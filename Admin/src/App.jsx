import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/sidebar"
import List from "./pages/list/List"
import Order from "./pages/order/Order"
import Add from "./pages/Add/Add"
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



function App() {
   const url="http://localhost:3002"
  return (
  <>
  <ToastContainer/>
  <Navbar/>
  <hr />
  <div className="app-content">
    <Sidebar/>
    <Routes>
      <Route path="/add" element={<Add url={url}/>}/>
      <Route path="/list" element={<List url={url}/>}/>
      <Route path="/orders" element={<Order url={url}/>}/>

    </Routes>
  </div>
  </>
    
  )
}

export default App
