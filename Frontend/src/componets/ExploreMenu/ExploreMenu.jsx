import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets';
const ExploreMenu = ({category,setCategory}) => {
   
    return (
      <div className='explore-menu' id='Explore-menu'> 
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
      Explore our menu and discover a world of flavors crafted to delight your taste buds! From classic favorites to unique specialties, we offer a wide range of dishes to suit every craving and occasion. Whether you're in the mood for something comforting or adventurous, you'll find the perfect choice here. Browse our carefully curated options and treat yourself to a dining experience you’ll love. Dive in and let the feast begin
        </p>      
        <div className='explore-menu-list'>
      {menu_list.map((item, index) => {
  return (
    <div 
    onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
    key={index} 
    className="explore-menu-list-item"
  >
        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
        <p>{item.menu_name}</p>
    </div>
  )
      })}

    
    
      
      </div>
      </div>
    );
  };
  
  export default ExploreMenu;
  