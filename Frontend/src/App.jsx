import { useState } from 'react'
import Navbar from './componets/Navbar'
import { Route, Routes } from 'react-router-dom'


import Home from './pages/Home/Home'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import Cart from './pages/cart/Cart'
import Footer from './componets/Footer/Footer'
import LoginPop from './componets/Loginpop/LoginPop'
import Verify from './pages/verify/verify'
import MyOrders from './pages/myOrders/myOrders'




function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
   <div className='app'>
{showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
    <Navbar setShowLogin={setShowLogin}></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/cart' element={<Cart></Cart>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
      <Route path='/verify' element={<Verify/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>


    </Routes>
   </div>
       <Footer></Footer>
    </>
  )
}

export default App
