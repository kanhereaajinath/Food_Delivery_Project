import { assets } from '../../assets/frontend_assets/assets'
import './Footer.css'
const Footer =()=>{
return(
    <>
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='fot' src={assets.logo} alt="" />
                <p>At FoodHaven, we bring delicious flavors to your doorstep with a click. Whether you're craving a quick bite or a gourmet meal, we've got you covered. Fresh, fast, and fabulous — that's how we serve happiness on your plate</p>
                <div className='footer-socail-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon}alt="" />
                </div>
            </div>
            <div className="footer-content-center" >
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH </h2>
                <ul>
                    <li>+919309121699</li>
                    <li>contatc@tomato.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="footer-copyright">
            copyright 2025 @ak.com -All Right Reserved
        </p>
    </div>
    </>
)
}
export default Footer