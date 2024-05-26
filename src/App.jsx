import './App.css'
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import SearchItem from './Components/SearchItem';
import Cart from './Components/Cart';
import { items } from './Components/Data';
import { useState } from 'react';

function App() {
 const [data,setData]=useState([...items])
 const [cart,setCart]=useState([])
  return (
    <>
      <div>
      <Router>
      <Navbar  cart={cart} setData={setData}/>
      <Routes>
        <Route path="/" element={<Product items={data}  cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
        <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
      </Router>
      </div>
     
    </>
  )
}

export default App
