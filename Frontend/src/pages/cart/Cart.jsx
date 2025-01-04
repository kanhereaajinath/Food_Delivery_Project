import { useContext } from "react"
import "./Cart.css"
import { StoreCon } from "../../context/StoreCon"
import { food_list } from "../../assets/frontend_assets/assets"
import { useNavigate } from "react-router-dom"
const Cart =()=>{
    const {cartItems,food_list, removeFromCart,getTotalCartAmount,url}=useContext(StoreCon)
    const navigate=useNavigate()
    return <div className="cart">
        <div className="cart-items"> 
            <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
<br />
<hr />
{food_list.map((item,index)=>{
if(cartItems[item._id]>0)
{
    return <div>
         <div className="cart-items-title cart-items-item">
    <img src={url + "/images/" + item.image} alt="" />
    <p>{item.name}</p>
    <p>${item.price}</p>
    <p>{cartItems[item._id]}</p>
    <p>${item.price*cartItems[item._id]}</p>
    <p  onClick={()=>removeFromCart(item._id)} className="cross">X</p>
   
    </div>
    <hr />
    </div>
}


})}
        </div>

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
                <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-promocode">
                <div>
                    <p>If you have promo code ,Enter here </p>
                    <div className="cart-promocode-input">
                        <input type="text" name="" id="" placeholder="promocode" />
                        <button>submit</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
   

}
export default Cart