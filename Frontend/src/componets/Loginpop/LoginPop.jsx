import { useContext, useEffect, useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreCon } from '../../context/StoreCon'
import axios from 'axios'
const LoginPop =({setShowLogin})=>{
    const {url,setToken}= useContext(StoreCon)

    const [currState,setCurrState]=useState("Login")
    const [data ,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))

    }

    const OnLogin= async (event)=>{
        event.preventDefault()
        let newUrl=url;
        if(currState==="Login"){
            newUrl +="/api/user/login"
        }
        else{
            newUrl +="/api/user/register"
        }
const response= await axios.post(newUrl,data)

if(response.data.success)
{
setToken(response.data.token)
localStorage.setItem("token",response.data.token)
setShowLogin(false)
}
else{
    alert(response.data.message)
}
    }

   
    return <>

    <div className='login-popup'>
        <form className='login-popup-container' onSubmit={OnLogin}>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
                {currState==='Login'?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='yourName' required />}
                
                <input name='email' type="email" onChange={onChangeHandler}  value={data.email} placeholder='your email'  required/>
                <input type="password" name="password" onChange={onChangeHandler}  value={data.password} id="" placeholder='password ' required />
            </div>
            <button className='button' type='submit'>{currState==="Sign up"? "create accounnt":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continouning I Agree to the terms of use & Privacy policy</p>

            </div>
            {currState==="Login"?<p>Ceate New Account ? <span onClick={()=>setCurrState("Sign up")}>Click Here</span></p>:
            <p>Alredy Have an Account? <span onClick={()=>setCurrState("Login")}> Login</span> </p>}

        </form>
    </div>
    </>

}
export default LoginPop