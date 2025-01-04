import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Add.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add =({url})=>{

    const [image, setImage]= useState(false);
    const [data ,setData ]=useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"

    })
    const onChangeHadndler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))

    }
    const onSubmitHandler= async(event) =>{
        event.preventDefault()
        const formData= new FormData()
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("file",image)
        const response= await axios.post(`${url}/api/food/upload`, formData)
        if(response.data.success){
setData({
    name:"",
    description:"",
    price:"",
    category:"Salad"
 })
 setImage(false)
 toast.success(response.data.message)
        }
        else {
toast.error(response.data.message)
        }
        

    }
return(
    <>
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
      <p>Upload Image</p>
      <label htmlFor="image">
        <img src={image?URL.createObjectURL(image):assets.upload_area} alt="Upload" />
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0]) } type="file" id="image"  hidden required />
            </div>
            <div className="add-product-name flex-col">
                <p>Prodcut Name</p>
                <input onChange={onChangeHadndler} value={data.name} type="text" name="name" placeholder='Type Here'/>

            </div>
            <div className="add-product-description flex-col">
                <p>Product description </p>
                <textarea onChange={onChangeHadndler} value={data.description}  name="description" id="" rows='6' placeholder='Write content Here' required></textarea>

            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category </p>
                    <select onChange={onChangeHadndler} value={data.category} name="category" >
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwhich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price flex-col">
<p> Product Price</p>
<input onChange={onChangeHadndler} value={data.price} type="Number" name="price" placeholder='$20' />
                </div>

            </div>
            <button type='submit' className='add-btn'>Add</button>
        </form>
    </div>
    </>
    
)
}
export default Add