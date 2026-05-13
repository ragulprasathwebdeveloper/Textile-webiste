import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
// import './styles.css';

import aboutus2 from './images/aboutus2.jpg';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import company from './images/company.png';
import footerimg from './images/footerimg.jpeg';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


const Contact=()=>{
    return<>
    <div style={{backgroundColor:'#dedede'}} className='complete'>
     <div className='aboutpagemain'>
        {/* The background image */}
        <img src={aboutus2} className='aboutpage' alt="About Us" />
        
        {/* Transparent overlay */}
        <div className='aboutpagetransparent'></div>
    
        {/* Content on top */}
        <div className='contactbanner'>
            <p>Contact</p>
        </div>
    
        <hr className='aboutushoriline' />
    
        <div className='aboutusbannerlink'>
          <FontAwesomeIcon icon={faHouse} className='aboutusbannerhomefont' />
          <Link to="/" className='aboutusbannerhomelink'>Home <span style={{color:'#e76d08'}}> / </span> </Link>
          <Link to="/" className='aboutusbanneraboutlink'>Contact</Link>
        </div>
    
    </div>
    

<div className='contactflex'>
<div className='contactflex1 fade-left'>
    <div style={{display:'flex'}}>
    <FontAwesomeIcon icon={faEnvelope} style={{ color: "White",height:'50px',padding:'10px',backgroundColor:'#e76d08' }} />
    <div style={{marginLeft:'20px'}}>
        <p className='contactflextext'>MAIL US NOW</p>
        <h2 className='contactflextext1'>Email Address</h2>
    </div>
    </div>
    <hr></hr>
    <p>ragulprasath42@gmail.com</p>
    <p>abc123@gmail.com</p>
</div>
<div className='contactflex1 scroll5'>
    <div style={{display:'flex'}}>
    <FontAwesomeIcon icon={faPhone} style={{ color: "White",height:'50px',padding:'10px',backgroundColor:'#e76d08' }} />
    <div style={{marginLeft:'20px'}}>
        <p className='contactflextext'>CALL US ANYTIME</p>
        <h2 className='contactflextext1'>Phone Number</h2>
    </div>
    </div>
    <hr></hr>
    <p>+91 9342686929</p>
    <p>+91 1234567891</p>
</div>
<div className='contactflex1 fade-right'>
    <div style={{display:'flex'}}>
    <FontAwesomeIcon icon={faLocationDot} style={{ color: "White",height:'50px',padding:'10px',backgroundColor:'#e76d08' }} />
    <div style={{marginLeft:'20px'}}>
        <p className='contactflextext'>OUR LOCATION</p>
        <h2 className='contactflextext1'>Our Location</h2>
    </div>
    </div>
    <hr></hr>
    <p style={{textWrap:'wrap'}}>The Queen's Walk, Bishop's, London SE1 <br></br>
    7PB, United Kingdom</p>
</div>
</div>

<div className='contactflex2'> 
    <div className='contactflex2para fade-left'>
        <h3 className='color'>LET'S TALK</h3>
        <h1>Contact Us & Get In here <br></br> Touch !</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour.</p>
        <div style={{ width: "100%", height: "400px" }}>
        <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509175!2d144.9556513153158!3d-37.817327979751606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c1d1705e1b29!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1615302208804!5m2!1sen!2sau" width="100%" height="80%"
        style={{ border: 0 }} allowFullScreen="" loading="lazy" ></iframe>
   </div>
</div>

{/* form page */}
<div>
    <div className='contactform fade-right'>
    <h1 style={{ color: 'black', marginBottom: '10px', }}>
        Send Your Message
    </h1>
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px' }}>
        <form onSubmit={(event) => {
                event.preventDefault(); // Prevent the form from reloading the page
                alert('Your request has been submitted'); // Display the alert
            }}
            style={{ flex: '1' }} >
    <table className='contactformtable'>
         <tr>
            <td style={{ padding: '16px' }}>
                <input type="text" id="name" name="name" required placeholder='Enter Name' className='contactforminput' />
            </td>
         </tr>
          <tr>
            <td style={{ padding: '16px' }}>
                <input type="email" id="email" name="email" required placeholder='Email Address' className='contactforminput' />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '16px' }}>
                <input type="tel" required placeholder='Phone Number' className='contactforminput' />  
            </td>
          </tr>
          <tr>
            <td style={{ padding: '16px' }}>
              <textarea id="message" name="message" rows="6" placeholder="Write your message" required className='contactforminput' ></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'center', padding: '16px' }}>
              <input type="submit" value="Submit" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
            </td>
          </tr>
    </table>
 </form>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
    </div>
</div>
</div>

</div>
{/* Footer Content */}

<div style={{ position: 'relative', marginTop: '90px'}}>
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

</div>


    </>
}

export default Contact;