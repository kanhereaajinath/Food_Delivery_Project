
import { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreCon } from '../../context/StoreCon'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const PlaceOrder=()=>{
    const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreCon)

    const [data, setData] = useState({
        firstName: "",
        lastName: "", // Corrected the typo here
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });
    
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }
  
    const placeOrder = async (event) => {
        event.preventDefault(); // Prevent default form submission
    
        // Step 1: Prepare Order Items
        const orderItems = food_list
            .filter(item => cartItems[item._id] > 0) // Filter items in the cart
            .map(item => ({ 
                ...item, 
                quantity: cartItems[item._id] 
            })); // Add quantity to each item
    
        // Step 2: Prepare Order Data
        const orderData = {
            address: data, // User-provided address
            items: orderItems, // Items in the cart
            amount: getTotalCartAmount() + 2, // Add delivery fee
        };
    
        console.log("Order Data:", orderData); // Debug log
    
       
            // Step 3: Send API Request
            const response = await axios.post(url+"/api/order/place", orderData, {
                headers: { token },
            });
    
            console.log("Server Response:", response.data); // Debug log
    
            if (response.data.success) {
                const { session_url } = response.data; // Ensure session_url is retrieved correctly
                console.log("Redirecting to:", session_url); // Log the URL for verification
                window.location.replace(session_url); // Redirect to Stripe checkout
            } else {
                alert("Error: " + response.data.message);
            }
            
    };
    const navigate=useNavigate()

    useEffect(()=>{
if(!token){

    navigate('/cart')
}
else if(getTotalCartAmount()===0){
    navigate('/cart')
}
    },[token])

return <form  className='place-order' onSubmit={placeOrder} >
    <div className='placeorder-left'>
        <p className='title'> Delivery Information </p>
        <div className='multi-fields'>
            <input name="firstName" onChange={onChangeHandler} value={data.firstName} type="text"  id="" placeholder='First Name' required/>
            <input type="text" name="lastName" id="" onChange={onChangeHandler} value={data.lastName} placeholder='Last Name' required />
        </div>
        <input type="text" name='email'value={data.email} onChange={onChangeHandler} placeholder='Email Adress' required/>
        <input type="text" value={data.street} onChange={onChangeHandler}   name="street"placeholder='Street' required/>
        <div className='multi-fields'>
            <input type="text" value={data.city} name="city" onChange={onChangeHandler} id="" placeholder='City' required/>
            <input type="text" name="state" value={data.state} onChange={onChangeHandler} id="" placeholder='State' required/>
        </div>
        <div className='multi-fields'>
            <input type="text" name="zipcode" onChange={onChangeHandler} value={data.zipcode} id="" placeholder='zip code ' required/>
            <input type="text" name="country" value={data.country}  onChange={onChangeHandler}id="" placeholder='Contry' required/>
        </div>
        <input type="text" name="phone" id="" onChange={onChangeHandler} value={data.phone} placeholder='Phone' required/>
    </div>
    <div className="placeorder-right">
    <div className="cart-bottom">
            <div className="cart-total">
                <h2>cart Total</h2>
                <div>
                    <div className="card-total-details">
                        <p>subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="card-total-details">
                        <p>Delivery fee</p>
                        <p>${getTotalCartAmount()===0?0:2}</p>
                    </div>
                    <hr />
                    <div className="card-total-details">
                        <b>Total</b>
                        <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                    </div>
                   
                </div>
                <button type='submit'>PROCEED TO Payment</button>
            </div>
            </div>
    </div>
</form>
}
export default PlaceOrder