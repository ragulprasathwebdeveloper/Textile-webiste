import React, { useEffect, useState } from "react";
// import './ShopCart.css';
import { Link } from "react-router-dom";

import leftarrowwhite from './images/leftarrowwhite.png';

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acc, curr) => acc + parseInt(curr.price) * curr.quantity, 0);
    setTotal(newTotal);

    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return; 

    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: quantity } : item
    );

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
    <div className="cart-header-flex">
        <h1 className="cart-heading">My Cart</h1>
        <Link to = '/ShopCart' className="back-to-product"> <img src={leftarrowwhite} alt="left arrow" style={{width:'26px',height:'20px',marginRight:'6px'}} />Back to products</Link>
    </div>  
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div>
                <div>
                  <img src={product.img} alt={product.name} className="img-product" />
                </div>
            </div>
            <div className="cart-whole-content">
                <div className="cart-product-details">
                  <h3>{product.name}</h3>
                  <p><span style={{fontWeight:'600'}}>Price Rs :</span>{product.price}</p>
                  <p className="cart-des"><span style={{fontWeight:'600'}}>Product Description :</span> {product.des}</p>
                </div>
                <div className="whole-quantity">
                  <button onClick={() => updateQuantity(product.id, product.quantity - 1)} className="cart-button-minus"> - </button>
                    <p className="quantity">Quantity: {product.quantity}</p>
                  <button onClick={() => updateQuantity(product.id, product.quantity + 1)} className="cart-button-plus"> + </button>
                </div>
                <p className="total-price">
                  Total price : {product.price * product.quantity}
                </p>
                <button onClick={() => removeFromCart(product)} className="remove-btn">Remove from cart</button>
              </div>
          </div>
        ))}
      </div>
      <h3 className="cart-amt">Total Amount Rs : {total}</h3>
    </>
  );  
};

export default Cart;
