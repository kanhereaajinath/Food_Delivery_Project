import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./List.css";

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
        console.log(response.data);
      } else {
        toast.error("Error: Unable to fetch list");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error: API call failed");
    }
  };

  const removeFood =async (foodId)=>{
  const response= await axios.post(`${url}/api/food/remove`,{id:foodId})
  await fetchList();
  if(response.data.success)
  {
    toast.success(response.data.message)
  }
else{
    toast.error("Error")
}
  }
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div className="list add flex-col ">
        <p>All food List</p>
        <div className="list-table">
            <div className="list-table-format title">
            <b>Image</b>
<b>Name</b>
<b>Category</b>
<b>Price</b>
<b>Action</b>
            </div>
            {list.map((item,index)=>{
                return(
                    <div key={index} className="list-table-format">
                      <img src={`${url}/images/`+item.image} alt="" />  
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>{item.price}</p>
                    <p onClick={()=>removeFood(item._id)} className="cursor">X</p>

                    </div>
                )

            })}
        </div>
       
      </div>
    </>
  );
};

export default List;
