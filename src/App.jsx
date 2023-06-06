import React  from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import AddToCart from './Components/AddToCart'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/addtocart' element={<AddToCart/>}></Route>
      </Routes>
    </div>
  )
}

export default App