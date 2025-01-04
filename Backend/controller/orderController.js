const orderModel=require("../model/orderModel.js")
const userModel=require("../model/UserModel.js")
const Strip =require('stripe')

const stripe = new Strip(process.env.STRIPE_SECRET_KEY)


//placing order 
const placeOrder=async (req,res)=>{
    const fronted_url="http://localhost:5173/"
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name, // Corrected here: `product_data` not `prodct_data`
                },
                unit_amount:item.price*100*80  // Ensure proper conversion to integer
            },
            quantity: item.quantity,
        }));
        
        // Add delivery charges
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: 2*100*80, // Adjust delivery charge as needed (already in smallest currency unit)
            },
            quantity: 1,
        });
        

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${fronted_url}verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${fronted_url}verify?success=false&orderId=${newOrder._id}`,
        });
        
        console.log("Stripe Session:", session);
        res.json({success:true, session_url:session.url}) // Add this to debug
        


    } catch (error) {
        console.log(error)
        res.json({success:false,message:'error'})
    }

}
const verifyOrder= async(req,res)=>{
const {orderId ,success}=req.body
try {
    if(success==='true'){
        await orderModel.findByIdAndUpdate(orderId,{payment:true})
        res.json({success:true,message:"Paid"})
    }
    else{
        await orderModel.findByIdAndDelete(orderId)
        res.json({success:false,message:"Not Paid"})
    }
} catch (error) {
    
    console.log("eroor")
    res.json({success:false,message:"Error"})
}
}

//user Orders for fronted
const userOrder= async (req,res)=>{
try {
    const orders=await orderModel.find({userId:req.body.userId})
    res.json({success:true,data:orders})
} catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
    
}
}


//Listing order for admin panel
const listOrder=async (req,res)=>{
    try {
        const orders= await orderModel.find({})
        res.json({success:true,data:orders})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}
//api for updating order status 
const updateStatus= async (req,res)=>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true,message:"Status updated"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }

}

module.exports={placeOrder, verifyOrder, userOrder,listOrder,updateStatus}