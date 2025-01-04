import { useState } from 'react'
import ExploreMenu from '../../componets/ExploreMenu/ExploreMenu'
import Header from '../../componets/Header/Header'
import './Home.css'
import FoodDispaly from '../../componets/FoodDispaly/FoodDisplay'
import AppDownload from '../../componets/AppDownlod/AppDownload'
const Home =()=>{
    const [category, setCategory] = useState("All");  // Correctly defines category state

   return(      <>
        <div>
            
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}> </ExploreMenu>
            <FoodDispaly category={category} ></FoodDispaly>
            <AppDownload></AppDownload>
            </div>       
       </>
    )
}
export default Home