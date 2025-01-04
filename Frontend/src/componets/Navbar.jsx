
import { useContext, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreCon } from '../context/StoreCon'
const Navbar =({setShowLogin})=>{
    const [menu, setmenu]=useState("Menu")
    const {getTotalCartAmount, token, setToken}=useContext(StoreCon)
    const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem("token"); // Remove token from local storage
      setToken(""); // Clear token in component state
      navigate('/'); // Redirect to home page
    };
return(
    
    <>
    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="" className='logo '/></Link> 
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setmenu("Home")}className={menu==="Home"?"active":""}>Home</Link>
            <a href='#Explore-menu' onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setmenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setmenu("contact-us")}className={menu==="contact-us"?"active":""}>Contat us </a>

        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-search-icon'>
             <Link to='/cart'>  <img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token ? (
  <button onClick={() => setShowLogin(true)} className="sign-in-button">
    Sign in
  </button>
) : (
  <div className="nav-bar-profile">
    <img src={assets.profile_icon} alt="User profile" className="profile-icon" />
    <ul className="nav-profile-dropdown" role="menu">
      <li onClick={()=>navigate('/myorders')} role="menuitem">
        <img src={assets.bag_icon} alt="Orders icon" />
        <p>Orders</p>
      </li>
      <hr />
      <li role="menuitem">
      <img 
  onClick={logout} 
  src={assets.logout_icon} 
  alt="Logout icon" 
  className="logout-icon" 
  style={{ cursor: 'pointer' }}
/>        <p>Logout</p>
      </li>
    </ul>
  </div>
)}


        </div>
    </div>
    </>
)
}
export default Navbar