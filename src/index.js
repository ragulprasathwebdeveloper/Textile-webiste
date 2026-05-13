import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Aboutus from './pages/aboutus';
import Contact from './pages/Contact';
import Ourteam from './pages/Ourteam';
import FabricDyeing from './pages/FabricDyeing';
import Manufacture from './pages/Manufacture';
import Stitch from './pages/Stitch';
import ShopCart from './pages/ShopCart';
import Cart from './pages/Cart';

function App() {

   const [cart, setCart] = useState(() => {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
   });

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
   }, [cart]);

   return (
      <Routes>
         <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="Ourteam" element={<Ourteam />} />
            <Route path="ShopCart" element={<ShopCart cart={cart} setCart={setCart} />} />
            <Route path="Cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="FabricDyeing" element={<FabricDyeing />} />
            <Route path="Manufacture" element={<Manufacture />} />
            <Route path="Stitch" element={<Stitch />} />
            <Route path="Contact" element={<Contact />} />
         </Route>
      </Routes>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);
