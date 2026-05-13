import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './ShopCart.css';

import cartwhite2 from './images/cartwhite2.png';

const ProductList = ({ product, cart, setCart }) => {

  const addToCart = () => {
    
    const alreadyInCart = cart.find(item => item.id === product.id);

      if (alreadyInCart) {
        toast.info(" Item already in cart!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        return;
      }

      const newItem = { ...product, quantity: 1 };
      setCart([...cart, newItem]);   

  };

  return (
    <>
      <div className="product">
        <div className="img">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="details">
          <h3>{product.name}</h3>
          <p>Price Rs : {product.price}</p>
          <div>
            <button className="button" onClick={addToCart}><img src={cartwhite2} alt="Add to Cart" style={{width:'16%',height:'16%'}} /> Add to Cart</button>
          </div>
          </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProductList;
