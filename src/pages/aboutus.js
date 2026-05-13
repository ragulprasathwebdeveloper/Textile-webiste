import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {Link } from "react-router-dom";

// import './styles.css';

import aboutus2 from './images/aboutus2.jpg';

import t4 from './images/t4.jpg';

import rightarrow from './images/rightarrow.png';

// import thread1 from './images/thread1.jpeg';

import m1 from './images/m1.png';

import ab1 from './images/ab1.jpg';

// import ab2 from './images/ab2.jpg';

// import ab3 from './images/ab3.jpg';

import banner1 from './images/banner1.jpg';
import React from 'react';
import company from './images/company.png';
import footerimg from './images/footerimg.jpeg';


const about=()=>{
    return(
        <>
<div className='aboutpagemain'>
    {/* The background image */}
    <img src={aboutus2} className='aboutpage' alt="About Us" />
    
    {/* Transparent overlay */}
    <div className='aboutpagetransparent'></div>

    {/* Content on top */}
    <div className='aboutuspageabout'>
        <h1>About Us</h1>
    </div>

    <hr className='aboutushoriline' />

    <div className='aboutusbannerlink'>
      <FontAwesomeIcon icon={faHouse} className='aboutusbannerhomefont' />
      <Link to="/" className='aboutusbannerhomelink'>Home <span style={{color:'#e76d08'}}> / </span> </Link>
      <Link to="/" className='aboutusbanneraboutlink'>About Us</Link>
    </div>

</div>

<div className='aboutuspageaboutcontent'>
    <img src={t4} alt='t4' className='aboutuspageaboutcontentimg fade-left' />
    <div className='aboutusmargin fade-right' >
        <h1 className='aboutustext'>About us</h1>
        <h2 className='aboutustext1'>Let’s Build Something Creative Together</h2>
        <p className='aboutustext2'>Textiles are materials made from fibers or yarn, and they are used to create widetest range of products such as clothing and industrial goods.</p>
        
        <hr></hr>

        <div>   
            <h4 className='aboutustext3'>Textiles Materials</h4>
            <p className='aboutustext2'>Textile services refer to businesses that provide various textile-related services as laundering washed with water</p>
        </div>

        <hr></hr>

        <div>
            <h4 className='aboutustext1'>Create Your Design</h4>
            <p className='aboutustext2'>Dry Cleaning Services: Dry cleaning services use specialized solvents to clean textiles washed with water.</p>
        </div>
        <button className="super-cool-btn"> Read More <img src={rightarrow} alt="Arrow" /> </button>
    </div>
</div>

<div className='ourbenefit scroll5'>
  {/* class scroll5 */}
  <img src={banner1} alt="Banner" className='ourbenefitimg hide-on-small-screens'
    // className="scroll5" 
  />
  <div className='ourbenefittransparent' >
  <div className='ourbenefitwrite'>
  {/* First Column */}
  <div className="ourbenefit1">
    <p className='ourbenefittxt1'>Our Benefits</p>
    <h1>From Handcrafted Textiles to Mass</h1>
    <p className='ourbenefit2'> Textiles are materials made from fibers or Fabrication services provide businesses and organizations with
      custom-designed and they are used to create widetest they are used.
    </p>
    <button className="super-cool-btn mb-4">Read More</button>
  </div>

  {/* Second Column */}
  <div className="ourbenefit1">
    <h1 style={{color:'#e76d08'}}>Fabric Treatment</h1>
    <hr></hr>
    <ul className='ourbenefitlist1'>
      <p>Fabric products and Accessories</p>
      <hr></hr>
      <p>Textiles Trends and Forecasts</p>
      <hr></hr>
      <p>Such as organic using recycled</p>
      <hr></hr>
      <p>Such as organic using recycled services use solvents clean</p>
      <hr></hr>
    </ul>
  </div>

  {/* Third Column */}
  <div className="ourbenefit1">
    <h1 style={{color:'#e76d08'}}>Rapid Productions</h1>
    <hr></hr>
    <ul className='ourbenefitlist1'>
    <p>Fabric products and Accessories</p>
      <hr></hr>
      <p>Textiles Trends and Forecasts</p>
      <hr></hr>
      <p>Such as organic using recycled</p>
      <hr></hr>
      <p>Such as organic using recycled services use solvents clean</p>
      <hr></hr>
    </ul>
  </div>
</div>

  </div>
</div>


<div className='ourservices'>
<div className='ourserivcestitle scroll5' style={{textAlign:'center'}}>
    <h4 className='ourservicestext'>Our Services</h4>
    <h2 className='ourservicestext1'>
        Provide the Best Solutions <br /> Take a Look at Our Best Services
    </h2>
</div>

<div className='ourserviceslist'>
            {/* first content */}
        <div className='au1 fade-left' style={{}}>
                <h3>Febric products and Accessories</h3>
                <p className='ourserviceslisttext'>Textiles are materials made from fibers or yarn, and they range of products range</p>
                <img src={m1} alt='m1' className='au1img'/>
        </div>

        <div className='au1 fade-right' style={{flex:2}}>
                <h3>Innovations in Textile Technology Smart</h3>
                <p className='ourserviceslisttext'>The textile industry is a major global Technology with range taking place</p>
                <img src={m1} alt='m1' className='au1img'/>
        </div> 

        <div className='au1 fade-left'>
                <h3>Sustainable Production Textile Balancing</h3>
                <p className='ourserviceslisttext'>Laundering services can be provided bytes commercial test Alteration provide</p>
                <img src={m1} alt='m1' className='au1img'/>
        </div>

        <div className='au1 fade-right'>
                <h3>Extiles and Culture Exploring Role Textiles</h3>
                <p className='ourserviceslisttext'>Textile production can have both positive and negative impacts environment</p>
                <img src={m1} alt='m1' className='au1img'/>
        </div>

        <div className='au1 fade-left'>
                <h3>The Future of Textiles Trends and Forecasts</h3>
                <p className='ourserviceslisttext'>In addition to clothing and household items textiles are used other applications</p>
                <img src={m1} alt='m1' className='au1img'/>
        </div>

        {/* Hi man this is yo the charger and the gang leader of the mechanism and the young billing system that is the own prediction way to handle the way of the writing the way of the technic thayt hey only handle the way to get the way out of it */}

    </div>
</div>

<div className='ourproductiontitle scroll5'>
    <h3 className='color'>Our Production</h3>
    <h1>Textiles and Fashion From <br /> Reducing Runway </h1>
</div>

<div className='ourproductionflex'>
  <img src={ab1} alt="Fabric production" className='ourproductionimg fade-left' />
  <div className='ourproductiontext1 fade-right'>
    <h2>01. Production Of Fabric</h2>
    <p> There are many variations of passages of Lorem Ipsum available. The majority have suffered alteration in
      some form, by injected humour, or randomised words which don't look even slightly believable. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. </p>
  </div>
</div>

<div className='ourproductionflex'>
  <div className='ourproductiontext1 fade-left'>
    <h2>02. Exportation Globally</h2>
    <p> There are many variations of passages of Lorem Ipsum available, the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
  </div>
  <img src={ab1} alt="Fabric production" className='ourproductionimg hide-on-small-screens fade-right' />
</div>

<div className='ourproductionflex'>
  <img src={ab1} alt="Fabric production" className='ourproductionimg hide-on-small-screens fade-left' />
  <div className='ourproductiontext1 fade-right'>
    <h2>03. Great Client Support</h2>
    <p> There are many variations of passages of Lorem Ipsum available. The majority have suffered alteration in
      some form, by injected humour, or randomised words which don't look even slightly believable. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. </p>
  </div>
</div>


{/* Footer content */}

<div style={{ position: 'relative', marginTop: '90px'}} className='scroll6'>
  {/* The image */}
  <img src={footerimg} style={{ width: '100%',}} alt="Footer" className='hide-on-small-screens' />
  
  {/* The darker overlay */}
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)',  }} >

<div className='footercontent'>
<img src={company} alt='company' className='texticaimg'/>
  <div className='footercontentabout'>
    <h3 className='footercontentabouttexica'>About Textica</h3>
    <p className='abouttext'>It helps designers plan out where the content will sit,  
    the content to be written and approved.</p>
  </div>

  <div className='texticaservices'>
    <h3 style={{color:'#e76d08'}}>Textica Services</h3>
    <div className='texticaservicestext'>
  <p>
    <a href="/FabricDyeing" style={{ textDecoration: 'none', color: 'inherit' }}  > Fabric Dyeing</a>
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
    )
}

export default about;