import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import aboutus2 from './images/aboutus2.jpg';
import fd1 from './images/fd1.jpg';
import fd02 from './images/fd02.jpg';
import threadfd from './images/threadfd.png';
import fd03 from './images/fd03.jpg';
import tick from './images/tick.png';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import company from './images/company.png';
import footerimg from './images/footerimg.jpeg';

const Manufacture1=()=>{
    return<>
    <div className='aboutpagemain'>
        {/* The background image */}
        <img src={aboutus2} className='aboutpage' alt="About Us" />
        
        {/* Transparent overlay */}
        <div className='aboutpagetransparent'></div>
    
        {/* Content on top */}
        <div className='Manubanner'>
            <h1>Manufacture</h1>
        </div>
    
        <hr className='aboutushoriline' />
    
        <div className='aboutusbannerlink'>
          <FontAwesomeIcon icon={faHouse} className='aboutusbannerhomefont' />
          <Link to="/" className='aboutusbannerhomelink'>Home <span style={{color:'#e76d08'}}> / </span> </Link>
          <Link to="/" className='aboutusbanneraboutlink'>Manufacture</Link>
        </div>
        </div>

<div className='fabricflex'>

    {/* Left side */}
<div>
    <div className='fabrictotal fade-left'>
    <div>
      <Link to="/FabricDyeing" className=' md1 Manuleft2' >Fabric Dyeing </Link>
      <Link to="/Manufacture" className="Manuleft1" > Manufacture</Link>
      <Link to="/Stitch" className="md1 Manuleft2" >Stitch Fabric</Link>
    </div>    
    </div>

    <div className='fabricimg1t fade-left'>
        <img src={fd02} className='fabricimg1'/>
    </div>


</div>

{/* right side  */}
<div>
    <img src={fd1} className='fabricrightimg fade-right'/>
    <div className='fabrictexttotal fade-right'>
        <h1>Manufactuer</h1>
        <p style={{fontSize:'17px',marginTop:'20px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will.</p>
        <div style={{backgroundColor:'#dedede',borderLeft:'1px solid orange',borderLeftStyle:'outset',borderLeftWidth:'6px'}}>
            <p style={{fontSize:'17px',margin:'20px',padding:'20px',}}>On the other hand, we denounce with blanditiis praesentium voluptatum righteous indignation and dislike men who are so beguiled and by the charm.</p>
        </div>
        <div>
            <p style={{fontSize:'17px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normalnow use Lorem Ipsum as their default model text, and a search for structures.</p>
        </div>

    <div className='fabricflextotal1 fade-right'>
        <div className='fabricflextotal'>
            <img src={threadfd} style={{width:'40%',height:'40%',marginTop:'46px',backgroundColor:'#dedede',padding:'6px'}}/>
            <div style={{marginTop:'20px',marginLeft:'6%',marginRight:'6%'}}>
                <h4>Screen Printing</h4>
                <p>It is a long established fact that a reader voluptatum page when layout.</p>
            </div>
        </div>
        <div style={{display:'flex'}}>
            <img src={threadfd} style={{width:'40%',height:'40%',marginTop:'46px',backgroundColor:'#dedede',padding:'6px'}}/>
            <div style={{marginTop:'20px',marginLeft:'6%',marginRight:'6%'}}>
                <h4>Screen Printing</h4>
                <p>It is a long established fact that a reader voluptatum page when layout.</p>
            </div>
        </div>
    </div>


    <div className='fabricfinalflex'>
    <div className='fabricfinalfleximg'>
        <img src={fd03} className='fabricfinalfleximg1'/>
    </div>
    <div>
        <h2 style={{marginBottom:'20px',marginTop:'28px',marginLeft:'16px'}}>Custom Tailoring</h2>
        <div style={{display:'flex',marginLeft:'16px'}}>
            <FontAwesomeIcon icon={faCheck} style={{ color: "white",padding:'4px',borderRadius:'50%',backgroundColor:'#e76d08' }} />
            <p style={{marginLeft:'6px'}}>At vero eos et accusamus et iusto odio</p>
        </div>
        <div style={{display:'flex',marginLeft:'16px'}}>
            <FontAwesomeIcon icon={faCheck} style={{ color: "white",padding:'4px',borderRadius:'50%',backgroundColor:'#e76d08' }} />
            <p style={{marginLeft:'6px'}}>At vero eos et accusamus et iusto odio</p>
        </div>
        <div style={{display:'flex',marginLeft:'16px'}}>
            <FontAwesomeIcon icon={faCheck} style={{ color: "white",padding:'4px',borderRadius:'50%',backgroundColor:'#e76d08' }} />
            <p style={{marginLeft:'6px'}}>At vero eos et accusamus et iusto odio</p>
        </div>
    </div>
</div>

{/* Accordian  */}
<div className="accordion accordion-flush fabricaccordian fade-right" id="accordionFlushExample">
{/* First Accordion Item */}
  <div 
    className="accordion-item"
    style={{transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"  
      style={{ fontSize: '20px', fontWeight: '700', transition: 'background-color 0.3s ease, transform 0.3s ease', }}>
        01. What are the main problems faced by the textile industry?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"
      style={{ animation: 'fadeIn 0.5s ease' }} >
      <div className="accordion-body fs-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. 
      </div>
    </div>
  </div>

  {/* Second Accordion Item */}
  <div className="accordion-item mt-4"
    style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"
      style={{ fontSize: '20px', fontWeight: '700', transition: 'background-color 0.3s ease, transform 0.3s ease' }} >
        02. What is the importance of the textile industry?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"
      style={{ animation: 'fadeIn 0.5s ease' }} >
      <div className="accordion-body fs-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.      </div>
    </div>
  </div>

  {/* Third Accordion Item */}
  <div className="accordion-item mt-4"
    style={{transition: 'transform 0.3s ease, box-shadow 0.3s ease'}} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"
      style={{ fontSize: '20px', fontWeight: '700', transition: 'background-color 0.3s ease, transform 0.3s ease' }} >
        03. What is the demand for the textile industry?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{ animation: 'fadeIn 0.5s ease' }} >
      <div className="accordion-body fs-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.      </div>
    </div>
  </div>

  {/* Fourth Accordion Item */}
  <div className="accordion-item mt-4"
    style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour"
       style={{ fontSize: '20px', fontWeight: '700',transition: 'background-color 0.3s ease, transform 0.3s ease' }} >
        04. How can India improve its textile industry?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"
      style={{ animation: 'fadeIn 0.5s ease' }} >
      <div className="accordion-body fs-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.      </div>
    </div>
  </div>
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



    </>
}

export default Manufacture1;