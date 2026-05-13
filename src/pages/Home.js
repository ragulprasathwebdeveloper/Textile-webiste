import React from 'react';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import './styles.css';

// Images import
import t1 from './images/t1.jpg';
import t2 from './images/t2.jpg';
import t3 from './images/t3.jpg';
import t4 from './images/t4.jpg';
import r1 from './images/r1.jpg';
import r2 from './images/r2.jpg';
import r3 from './images/r3.jpg';
import r4 from './images/r4.jpg';
import r5 from './images/r5.jpg';
import r6 from './images/r6.jpg';
import r7 from './images/r7.jpg';
import r8 from './images/r8.jpg';
import b1 from './images/b1.jpg';
import m1 from './images/m1.png';
import r15 from './images/r15.jpg';
import p1 from './images/p1.png';
import p2 from './images/p2.png';
import p3 from './images/p3.png';
import rightarrow from './images/rightarrow.png';
import tick from './images/tick.png';
import banner1 from './images/banner1.jpg';
import review4 from './images/review4.jpg';
import review2 from './images/review2.jpg';
import review3 from './images/review3.jpg';
import google from './images/google.png';
import footerimg from './images/footerimg.jpeg';
import company from './images/company.png';

// Fonts Import
import '@fontsource/roboto'; 
import '@fontsource/playfair-display';
import 'typeface-montserrat';
import 'typeface-lora';

<head>
  <link></link>
</head>

const Home = () => {
  return (
    <>
    <div>
      <div id="carouselExampleControls" className="carousel slide w-100" data-bs-ride="carousel">
        {/* Transparent overlay */}
        <div className="carousel-overlay"></div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={t1} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Welcome to Textica</h5>
              <p style={{ textTransform: 'uppercase' }}>Textiles And Sustainability Strategy And Reducting</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={t2} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Welcome to Textica</h5>
              <p style={{ textTransform: 'uppercase' }}>Textiles And Sustainability Strategy And Reducting</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={t3} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Welcome to Textica</h5>
              <p style={{ textTransform: 'uppercase' }}>Textiles And Sustainability Strategy And Reducting</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
 
      <div className="center-content scroll1">
    <p className="container universalheadfont">
      <span>Since 1990</span>
      <br />
      <span className='universalheadfont'>
        Create your design only for the fabric production and natural fabrics from various types and comfortable.
      </span>
    </p>
  </div>

      <div className='mt-5' style={{backgroundColor:'gainsboro'}}>
      <div style={{ display: 'flex'}} className='container scroll1'>
        <p className='ms-3' style={{ marginTop: '60px',marginRight:'40px' }}>
          <span style={{ fontSize: '30px', color: '#e76d08', fontWeight: '600' }} className='universalheadfont'>ABOUT US</span>
          <p style={{ fontSize: '40px', fontWeight: '700', lineHeight: '1.3', color: 'MenuText' }} className='universalheadfont'>The History of Textiles From Handcrafted</p>
          <p style={{ fontWeight: '600', fontSize: '18px', color: 'GrayText' }} className='universalbodyfont'>Textiles are materials made from fibers or yarn, and they are <br></br> used to create widetest range of products such as clothing and industrial goods.</p>
          <p><span style={{color: '#e76d08', fontWeight: '700', fontSize: '30px' }}> 01.</span> <span style={{ fontSize: '30px', fontWeight: '700' }} className='universalheadfont'>Digital Shop Available</span></p>
          <hr></hr>
          <p><span style={{ color: '#e76d08', fontWeight: '700', fontSize: '30px' }}> 02.</span> <span style={{ fontSize: '30px', fontWeight: '700' }} className='universalheadfont'>Great Client Support</span></p>
          <button class="super-cool-btn universalbodyfont">Read More <img src={rightarrow} className=" " alt="..." /></button>
        </p>  
        <div className='scroll2'>
        <img src={t4} alt="Example" className="hide-on-small-screens" style={{ width: '100%',marginTop:'20px',marginBottom:'20px' }}  />
            </div>
      </div>
      </div>

      {/* Scroll images our works */}

      <div>
      <h1 className="responsive-heading scroll2 universalheadfont"> Our Works </h1>
        <div className="center-container scroll2">
      <div className="Slider">
        <span style={{ '--i': 1 }}>
          <img src={r1} className="d-block w-100" alt="Slide 1" />
        </span>
        <span style={{ '--i': 2 }}>
          <img src={r2} className="d-block w-100" alt="Slide 2" />
        </span>
        <span style={{ '--i': 3 }}>
          <img src={r3} className="d-block w-100" alt="Slide 3" />
        </span>
        <span style={{ '--i': 4 }}>
          <img src={r4} className="d-block w-100" alt="Slide 4" />
        </span>
        <span style={{ '--i': 5 }}>
          <img src={r5} className="d-block w-100" alt="Slide 5" />
        </span>
        <span style={{ '--i': 6 }}>
          <img src={r6} className="d-block w-100" alt="Slide 6" />
        </span>
        <span style={{ '--i': 7 }}>
          <img src={r7} className="d-block w-100" alt="Slide 6" />
        </span>
        <span style={{ '--i': 8 }}>
          <img src={r8} className="d-block w-100" alt="Slide 6" />
        </span>
      </div>
    </div>
    </div>

    <div className="image-container scroll2">
  <img src={b1} className="hsimgb" alt="Background" />
  
  <div className='homescroll'>
  <div style={{ position: 'absolute', top: '0',}} className='classflex'>
    
    {/* Text Content Section */}
    <div className="look">
      <p className="text-white universalheadfont hsh1 take-a-look-line"> Take a Look Into Our Best Services </p>
      <p className="text-white universalbodyfont hsp1"> Textiles are materials made from fibers or yarn, and they are used to create a wide range of products such as clothing and industrial goods. </p>
      <button className="super-cool-btn universalbodyfont fs-5"> Read More <img src={rightarrow} alt="Arrow" /> </button>
    </div>

    {/* Scrollable Services List Section */}
    <div className="scrollable-container ms-5 services-list-container w-100 scroll1">
      <ul className="scrollable-list universalbodyfont">
        <li className="scrollable-item">Fabric Printing</li>
        <hr className="bold-divider" />
        <li className="scrollable-item">Design Fabric</li>
        <hr className="bold-divider" />
        <li className="scrollable-item">Manufacture</li>
        <hr className="bold-divider" />
        <li className="scrollable-item">Fabric Dyeing</li>
        <hr className="bold-divider" />
        <li className="scrollable-item">Engineering</li>
        <hr className="bold-divider" />
        <li className="scrollable-item">Stitch Fabric</li>
        <hr className="bold-divider" />
        {/* Duplicate list items for seamless looping */}
        <li className="scrollable-item">Cotton Velvet</li>
        <hr className="bold-divider" />
        <li className="scrollable-item">Synthesis Wool</li>
        <hr className="bold-divider" />
        <li className="scrollable-item">Manufacture</li>
        <hr className="bold-divider" />
        <li className="scrollable-item">Fabric Dyeing</li>
        <hr className="bold-divider" />
      </ul>
    </div>
  </div>
</div>
</div>

 <div className='design'>
 
       {/* First Item - fade-left2 */}
       <div className="image-container2 design1 fade-left2">
         <img src={t3} alt="Fabric" className='designimgone' />
         <div className="hover-content">
           <img src={m1}  alt="Icon"  className='designimgstyle'/>
           <h4 style={{ color: '#e76d08', }} className='designcontenthead' > Fabric Design </h4>
           <p className='designcontentpara'> Laundering services can be provided bytes commercial test Alternation provide </p>
         </div>
       </div>
 
       {/* Second Item - fade-up2*/}
       <div className="image-container2 fade-up2"  style={{marginRight:'20px'}}>
         <img src={t3} className='designimgone' alt="Sustain" />
         <div className="hover-content">
         <img src={m1} alt="Icon" className='designimgstyle' />
           <h4 style={{ color: '#e76d08', }} className='designcontenthead' > Sustain Design </h4>
           <p className='designcontentpara'> Laundering services can be provided bytes commercial test Alternation provide </p>
         </div>
       </div>
 
       {/* Third Item - fade-right2 */}
       <div className="image-container2 fade-right2"> 
         <img src={t3} className='designimgone' alt="Culture" />
         <div className="hover-content">
         <img src={m1} alt="Icon" className='designimgstyle' />
           <h4 style={{ color: '#e76d08', }} className='designcontenthead' >Culture Design</h4>
           <p className='designcontentpara'> Laundering services can be provided bytes commercial test Alternation provide</p>
         </div>
       </div>
     </div>


<div className='homeaboutusmain'>
      <div className='homeaboutus'>
        {/* First content - Fade Right */}
        <img src={r15} alt="About Us Image" className='homeaboutusimg fade-right' />
        
        {/* Second content - Fade Left */}
        <div style={{ marginLeft: '60px', marginRight: '60px' }}
          className="fade-left" 
        >
          <h1 className='aboutus'>About Us</h1>
          <img src={m1} style={{ width: '80px', height: '80px', marginTop: '198px',position: 'absolute', marginLeft: '560px', }} className='hide-on-small-screens' alt="Icon" />
          <img src={m1} style={{ width: '80px', height: '80px', marginTop: '476px', position: 'absolute', marginLeft: '560px', }} alt="Icon" className='hide-on-small-screens' />
          <img src={m1} style={{ width: '80px', height: '80px', marginTop: '749px', position: 'absolute', marginLeft: '560px', }}   alt="Icon" className='hide-on-small-screens'/>
          <p className='futurecontent'>The Future of Textiles Working Process</p>
          <h1 style={{ color: '#e76d08', fontWeight: '700', fontSize: '60px' }}>01</h1>
          <p style={{ fontSize: '40px', fontWeight: '600' }}>Productions Of Fabrics</p>
          <p style={{ fontSize: '20px' }}> Textiles are materials made from fibers or yarn, and they are used to create a wide range of products
            such as clothing. The History of Textiles: From Handcrafted Textiles to Mass Production
          </p>
          <hr />
          <h1 style={{ color: '#e76d08', fontWeight: '700', fontSize: '60px' }}>02</h1>
          <p style={{ fontSize: '40px', fontWeight: '600' }}>Exportation Globally</p>
          <p style={{ fontSize: '20px' }}> The textile industry is a major global industry, with production and consumption taking place in countries
            around the world. Textile production can have both positive and negative impacts.
          </p>
          <hr />
          <h1 style={{ color: '#e76d08', fontWeight: '700', fontSize: '60px' }}>03</h1>
          <p style={{ fontSize: '40px', fontWeight: '600' }}>Great Clients Support</p>
          <p style={{ fontSize: '20px' }}> In addition to clothing and household items, textiles are used in a variety of other applications, such as
            in medical products, automotive interiors, and aerospace materials. on the environment and the workers.
          </p>
        </div>
      </div>
    </div>


<div style={{marginTop:'60px'}}>
{/* className='scroll5' */}
<div  className='scroll1'>
  <p className='pricingplancontent1'>Our Pricing Plans</p>
  <h2 className='pricingplancontent2'>The Textiles Product Apparel <br></br> Manufactuer Industries</h2>
</div>

{/* Pricing plans */}

  <div className='mb-5 pricingplans'>
  {/* fade-left2 */}
    <div  style={{backgroundColor:'#e6e6e6',margin:'10px'}} className='fade-left2'>
      <div className='classrelative'>
      <img src={p1} style={{width:'100%'}}/>
      <p style={{ left:180,
        // backgroundColor:'orange',
        padding:'10px', borderTopLeftRadius:'12px', borderTopRightRadius:'12px', fontSize:'16px', color:'white', textTransform:'uppercase'}} 
        className='bestfrabicslast123 hide-on-small-screens'>Best Febrics</p>
      </div>
      <div style={{textAlign:'center'}}>
      <h4 className='mt-4' style={{fontSize:'40px', fontWeight:'700'}}>cutton febrics</h4>
      <h3 className='mt-3'><sup> $ </sup> <span style={{fontSize:'40px'}}> 59 </span> <span style={{fontSize:'20px', color:'#e76d08'}}>/ per miter </span></h3>
      <p style={{fontSize:'26px'}} className='mt-4'>Salary level up to $50k</p>
      <div className='mt-4'>
      <p>we guarantee you always <img src={tick}/></p>
      <hr></hr>
      <p>specialized and annual <img src={tick}/></p>
      <hr></hr>
      <p>Genuine fabrics materials <img src={tick}/></p>
      <hr></hr>
      <button class="super-cool-btn mb-4">Purchase</button>
      </div>
      </div>
    </div>
    {/* fade-up2 */}
    <div style={{backgroundColor:'#e6e6e6',margin:'10px'}} className='fade-up2'>
      <div style={{position:'relative'}}>
      <img src={p2} style={{width:'100%'}}/>
      <p style={{top:156,
        left:180,
        // backgroundColor:'orange',
        padding:'10px', borderTopLeftRadius:'12px', borderTopRightRadius:'12px', fontSize:'16px',color:'white', textTransform:'uppercase'}} 
        className='bestfrabicslast123 hide-on-small-screens'>Best Febrics</p>
      </div>
      <div style={{textAlign:'center'}}>
      <h4 className='mt-4' style={{fontSize:'40px', fontWeight:'700'}}>cutton febrics</h4>
      <h3 className='mt-3'><sup> $ </sup> <span style={{fontSize:'40px'}}> 59 </span> <span style={{fontSize:'20px', color:'#e76d08'}}>/ per miter </span></h3>
      <p style={{fontSize:'26px'}} className='mt-4'>Salary level up to $50k</p>
      <div className='mt-4'>
      <p>we guarantee you always <img src={tick}/></p>
      <hr></hr>
      <p>specialized and annual <img src={tick}/></p>
      <hr></hr>
      <p>Genuine fabrics materials <img src={tick}/></p>
      <hr></hr>
      <button class="super-cool-btn mb-4">Purchase</button>
      </div>
      </div>
    </div>
    {/* fade-right2 */}
    <div style={{backgroundColor:'#e6e6e6',margin:'10px'}} className='fade-right2'>
      <div style={{position:'relative'}}>
      <img src={p3} style={{width:'100%'}}/>
      <p style={{top:156,
        left:180,
        // backgroundColor:'orange',
        padding:'10px', borderTopLeftRadius:'12px', borderTopRightRadius:'12px', fontSize:'16px', color:'white', textTransform:'uppercase'}} 
        className='bestfrabicslast123 hide-on-small-screens'>Best Febrics</p>
      </div>
      <div style={{textAlign:'center'}}>
      <h4 className='mt-4' style={{fontSize:'40px', fontWeight:'700'}}>cutton febrics</h4>
      <h3 className='mt-3'><sup> $ </sup> <span style={{fontSize:'40px'}}> 59 </span> <span style={{fontSize:'20px', color:'#e76d08'}}>/ per miter </span></h3>
      <p style={{fontSize:'26px'}} className='mt-4'>Salary level up to $50k</p>
      <div className='mt-4'>
      <p>we guarantee you always <img src={tick}/></p>
      <hr></hr>
      <p>specialized and annual <img src={tick}/></p>
      <hr></hr>
      <p>Genuine fabrics materials <img src={tick}/></p>
      <hr></hr>
      <button class="super-cool-btn mb-4">Purchase</button>
      </div>
      </div>
    </div>
  </div>
</div>

{/* className='scroll5' */}
<div style={{ position: 'relative', width: '100%', height: '360px', marginTop: '90px', marginBottom: '20px' }} className='scroll5'>
  <img src={banner1} alt="Banner" style={{ width: '100%', height: '360px',  }}  />
  <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust transparency with the alpha value (0.5 here)
    }} >
    <div className='banner'>
      <div className='bannergap'>
      <img src={m1} alt="Dry Cleaning" className='bannerm1img1' />
        <h1 style={{fontSize:'60px',fontWeight:'700',color:'#e76d08'}}>45%</h1>
        <p style={{fontSize:'40px', fontWeight:'750',color:'darkseagreen'}}>Dry Cleaning</p>
        <p style={{fontSize:'20px'}}>The Intersection of Textiles and Fine Art</p>
      </div>
      <div style={{ marginLeft: '160px', marginTop: '8px', borderLeft: '2px solid white', // Vertical line
      paddingLeft: '20px', // Space between the border and content
    }} >
  </div>
      <div className='bannergap'>
      <img src={m1} alt="Dry Cleaning" className='bannerm1img2' />
        <h1 style={{fontSize:'60px',fontWeight:'700',color:'#e76d08'}}>55%</h1>
        <p style={{fontSize:'40px', fontWeight:'750',color:'darkseagreen'}}>Finish Projects</p>
        <p style={{fontSize:'20px'}}>The Intersection of Textiles and Fine Art</p>
      </div>
      <div style={{ marginLeft: '160px', marginTop: '8px', borderLeft: '2px solid white', // Vertical line
      paddingLeft: '20px', // Space between the border and content
    }} >
  </div>
      <div className='bannergap'>
      <img  src={m1} alt="Dry Cleaning" className='bannerm1img3' />
        <h1 style={{fontSize:'60px',fontWeight:'700',color:'#e76d08'}}>65%</h1>
        <p style={{fontSize:'40px', fontWeight:'750',color:'darkseagreen'}}>Trusted Clients</p>
        <p style={{fontSize:'20px'}}>The Intersection of Textiles and Fine Art</p>
      </div>
    </div>
  </div>
</div>


<div className='progressflex'>
{/* className='fade-left' */}
<div className='progressflextitle fade-left'> 
  <h1 style={{marginBottom:'50px',fontWeight:'700'}}>Why People Are Choose Us For Textile Work</h1>  
      <p style={{fontSize:'22px',fontWeight:'600'}}>Custom Tailoring</p>
      <div className="progress bg-white"  role="progressbar"  aria-label="Warning example"  aria-valuenow="75"  aria-valuemin="0"  aria-valuemax="100" >
      <div className="progress-bar bg-danger" style={{width:'90%'}}>90%</div>
    </div>
    <p style={{fontSize:'22px',fontWeight:'600',marginTop:'26px'}}>Hemming Shortening</p>
    <div  className="progress bg-white"  role="progressbar"  aria-label="Warning example"  aria-valuenow="75"  aria-valuemin="0"  aria-valuemax="100" >
      <div className="progress-bar bg-danger" style={{width:'88%'}}>88%</div>
    </div>
    <p style={{fontSize:'22px',fontWeight:'600',marginTop:'26px'}}>Home Textiles</p>
  <div className="progress bg-white"  role="progressbar"  aria-label="Warning example"  aria-valuenow="75"  aria-valuemin="0"  aria-valuemax="100" >
      <div className="progress-bar bg-danger" style={{width:'72%'}}>72%</div>
    </div>
  </div>

{/* Accordian  */}
{/* fade-right */}
  <div className="accordion accordion-flush progressflexaccordian fade-right"  id="accordionFlushExample" >
  {/* First Accordion Item */}
  <div className="accordion-item" style={{
      // border: '1px solid black',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"
        style={{ fontSize: '20px', fontWeight: '700',
          // background: '#ffffff',
          transition: 'background-color 0.3s ease, transform 0.3s ease' }} >
        01. What are the main problems faced by the textile industry?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{ animation: 'fadeIn 0.5s ease' }} >
      <div className="accordion-body fs-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. 
      </div>
    </div>
  </div>

  {/* Second Accordion Item */}
  <div className="accordion-item mt-4" style={{
      // border: '1px solid black',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"
        style={{ fontSize: '20px', fontWeight: '700',
          // background: '#ffffff',
          transition: 'background-color 0.3s ease, transform 0.3s ease' }} >
        02. What is the importance of the textile industry?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{ animation: 'fadeIn 0.5s ease' }} >
      <div className="accordion-body fs-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.      </div>
    </div>
  </div>

  {/* Third Accordion Item */}
  <div className="accordion-item mt-4" style={{
      // border: '1px solid black',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"
        style={{ fontSize: '20px', fontWeight: '700',
          // background: '#ffffff',
          transition: 'background-color 0.3s ease, transform 0.3s ease' }} >
        03. What is the demand for the textile industry?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{ animation: 'fadeIn 0.5s ease' }} >
      <div className="accordion-body fs-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.      </div>
    </div>
  </div>

  {/* Fourth Accordion Item */}
  <div  className="accordion-item mt-4"
    style={{
      // border: '1px solid black',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour"
        style={{ fontSize: '20px', fontWeight: '700',
          // background: '#ffffff',
          transition: 'background-color 0.3s ease, transform 0.3s ease' }} >
        04. How can India improve its textile industry?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{ animation: 'fadeIn 0.5s ease' }} >
      <div className="accordion-body fs-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.      </div>
    </div>
  </div>
</div>

    </div>

        <div>
        {/* className='scroll5' */}
          <div className='scroll5'>
          <h4 style={{textTransform:'uppercase',marginTop:'90px',textAlign:'center',color:'#e76d08'}}>Our Testimonials</h4>
          <h1 style={{textAlign:'center',fontSize:'50px',fontWeight:'700',marginBottom:'60px'}}>What Our Happy Clients Say <br></br> About Us</h1>
          </div>
          <div className='listofthree'>
          {/* className='fade-left' */}
            <div className='listofthree1 fade-left'>
              <div>
                <img src={review4} style={{marginLeft:'20px'}}/>
                <img src={google} style={{width:'14%',marginLeft:'140px'}}/>
              </div>
              <h2 style={{marginLeft:'20px',marginTop:'20px'}}>Alex John Martin</h2>
              <p style={{color:'#e76d08',fontWeight:'500',marginLeft:'20px'}}>SENIOR MANAGER</p>
              <p style={{textAlign:'justify',textIndent:'10%',paddingLeft:'20px',paddingRight:'20px',fontSize:'18px'}}>These services involve cleaning and washing textiles, such as cloting,  linens, and towels.  Laundering services can be provided by commerical laundry facilities hotels.</p>
              <h4 style={{marginLeft:'20px'}}>Quality Services</h4>
              <h5 style={{marginLeft:'20px'}}>100%</h5>
            </div>
            {/* className='fade-up2' */}
            <div className='listofthree2 fade-up'>
            <div>
                <img src={review2} style={{marginLeft:'20px'}}/>
                <img src={google} style={{width:'14%',marginLeft:'140px'}}/>
              </div>
              <h2 style={{marginLeft:'20px',marginTop:'20px'}}>Alex John Martin</h2>
              <p style={{color:'#e76d08',fontWeight:'500',marginLeft:'20px'}}>SENIOR MANAGER</p>
              <p style={{textAlign:'justify',textIndent:'10%',paddingLeft:'20px',paddingRight:'20px',fontSize:'18px'}}>These services involve cleaning and washing textiles, such as cloting,  linens, and towels.  Laundering services can be provided by commerical laundry facilities hotels.</p>
              <h4 style={{marginLeft:'20px'}}>Quality Services</h4>
              <h5 style={{marginLeft:'20px'}}>100%</h5>
            </div>
            {/* className='fade-right' */}
            <div className='listofthree3 fade-right'>
              <div>
                <img src={review3} style={{marginLeft:'20px'}}/>
                <img src={google} style={{width:'14%',marginLeft:'140px'}}/>
              </div>
              <h2 style={{marginLeft:'20px',marginTop:'20px'}}>Alex John Martin</h2>
              <p style={{color:'#e76d08',fontWeight:'500',marginLeft:'20px'}}>SENIOR MANAGER</p>
              <p style={{textAlign:'justify',textIndent:'10%',paddingLeft:'20px',paddingRight:'20px',fontSize:'18px'}}>These services involve cleaning and washing textiles, such as cloting,  linens, and towels.  Laundering services can be provided by commerical laundry facilities hotels.</p>
              <h4 style={{marginLeft:'20px'}}>Quality Services</h4>
              <h5 style={{marginLeft:'20px',marginBottom:'20px',marginTop:'10px'}}>100%</h5>
            </div>

          </div>
        </div>

{/* Footer Content */}
{/* className='scroll6' */}
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
    <a href="/FabricDyeing" style={{ textDecoration: 'none', color: 'inherit' }}  > Fabric Dyeing </a>
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

  );
};

export default Home;