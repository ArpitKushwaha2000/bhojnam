import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Customer/pages/Homepage/Homepage'
import Restaurants from '../Customer/pages/Restaurant/Restaurants'
import NavBar from '../Customer/components/NavBar/NavBar'
import Cart from '../Customer/pages/Cart/Cart'
import Profile from '../Customer/pages/Profile/Profile'


const CustomerRoutes = () => {
  return (
<div className='relative'>
  <div className='sticky top-0 z-50'>
    <NavBar/>
  </div>
<Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/restaurant/:city/:title/:id' element={<Restaurants/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/my-profile/*' element={<Profile/>}/>
  </Routes>
</div>
  )
}

export default CustomerRoutes