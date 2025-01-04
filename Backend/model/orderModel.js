 const mongooes =require("mongoose")



 const orderSchema= new mongooes.Schema({
    userId:{type:String,required:true},
    items:{type:Array, requried:true},
    amount:{type:Number, requried:true},
    address:{type:Object,requried:true},
    status:{type:String,default:"Food Processing"},
    date:{type:Date, default:Date.now()},
    payment:{type:Boolean,default:false}

 })
 const orderModel =mongooes.models.order|| mongooes.model("order",orderSchema)

 module.exports=orderModel