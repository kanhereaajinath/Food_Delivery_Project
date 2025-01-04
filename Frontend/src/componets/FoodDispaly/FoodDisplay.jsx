import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreCon } from '../../context/StoreCon';
import FoodItem from '../foodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreCon);
  console.log('Category:', category);

  return (
    <div className='food-dispaly' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-dispalay-list">
        {food_list
          .filter((item) => category === "All" || category === item.category) // Filtering the list based on category
          .map((item, index) => (
            <FoodItem
              key={item._id} // Use a unique key like _id instead of index
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
