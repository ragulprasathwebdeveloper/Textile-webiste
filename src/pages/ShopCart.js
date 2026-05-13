import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { FaShoppingCart  } from "react-icons/fa";
import data from'./ProList.json';
import ProductList from './ProductList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

import footerimg from './images/footerimg.jpeg';
import company from './images/company.png';

// import './ShopCart.css';

const Shop = ({cart, setCart}) => {
    const [products] = useState(data);
    return(
        <>
        <div className="NavbarHeader">
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div className="navbar-shop">
                <p>Shopping page</p>
              </div>
                <Link to="/cart">
                <div style={{ position: 'relative' }}>
                    <FaShoppingCart className="shop-icon" />
                    {cart.length > 0 && (
                        <span style={{
                        position: 'absolute',
                        top: '16px',
                        right: '20px',
                        background: 'red',
                        borderRadius: '50%',
                        color: 'white',
                        padding: '4px 10px',
                        fontSize: '12px'
                        }}>
                        {cart.length}
                        </span>
                    )}
                    </div>        
                </Link>
            </div>
        </div>
            <div className="product-container">
                {products.map((product) =>(
                   <ProductList key={product.id} product={product}
                   cart={cart} setCart={setCart} />
                ))}
            </div>

            <div style={{ position: 'relative', marginTop: '90px'}} className='scroll6'>
          {/* The image */}
          <img src={footerimg} style={{ width: '100%',}} alt="Footer" className='hide-on-small-screens' />
          
          {/* The darker overlay */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)',  }} >

        <div className='footercontent'>
        <img src={company} className='texticaimg'/>
          <div className='footercontentabout'>
            <h3 className='footercontentabouttexica'>About Textica</h3>
            <p className='abouttext'>It helps designers plan out where the content will sit,  
            the content to be written and approved.</p>
          </div>

          <div className='texticaservices'>
            <h3 style={{color:'#e76d08'}}>Textica Services</h3>
            <div className='texticaservicestext'>
          <p>
            <a href="/FabricDyeing" style={{ textDecoration: 'none', color: 'inherit' }}  > Fabric Printing </a>
          </p>
          <p>
            <a href="/Stitch" style={{ textDecoration: 'none', color: 'inherit' }} >Stitch Fabric </a>
          </p>
          <p>
            <a href="/Manufacture" style={{ textDecoration: 'none', color: 'inherit' }}  > Manufacture </a>
          </p>
        </div>

          </div>

          <div className='texticalinks'>
          <h3 style={{color:'#e76d08'}}>Useful Links</h3>
          <div className='texticaservicestext'>
            <p>
              <a href="/aboutus" style={{ textDecoration: 'none', color: 'inherit' }} > About Us </a>
            </p>
            <p>
              <a href="/FabricDyeing" style={{ textDecoration: 'none', color: 'inherit' }}> Our Services </a>
            </p>
            <p>
              <a href="/Ourteam" style={{ textDecoration: 'none', color: 'inherit' }} > Our Team </a>
            </p>
            <p>
              <a href="/ShopCart" style={{ textDecoration: 'none', color: 'inherit' }} > Our Pricing </a>
            </p>
          </div>
        </div>

        </div>

        <hr style={{ border: 'none', backgroundColor: 'white', height: '2px', width: '90%', margin: '20px auto',}}/>

        <div className='texticaiconsline'>      
          {/* Social Icon Links */}
              {[
                { icon: faFacebookF, link: 'https://facebook.com' },
                { icon: faInstagram, link: 'https://instagram.com' },
                { icon: faTwitter, link: 'https://twitter.com' },
                { icon: faYoutube, link: 'https://youtube.com' },
              ].map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer"
                  className='texticaicons'
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'orange';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#e76d08';
                  }}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
              <div className='lastline hide-on-small-screens'>
                <p>Proudly Powered By Textica Indus</p>
              </div>
            </div>
            
  </div>
</div>
        </>
    );
};

export default Shop;