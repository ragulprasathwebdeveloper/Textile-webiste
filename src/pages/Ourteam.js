import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import aboutus2 from './images/aboutus2.jpg';

import ot1 from './images/ot1.jpg';
import ot2 from './images/ot2.jpg';
import ot3 from './images/ot3.jpg';
import m1 from './images/m1.png';
import banner1 from './images/banner1.jpg';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import company /* Our team */ from './images/company.png';
import footerimg from './images/footerimg.jpeg';


const Ourteam=()=>{
    return<>
    <div className='aboutpagemain'>
        {/* The background image */}
        <img src={aboutus2} className='aboutpage' alt="About Us" />
        
        {/* Transparent overlay */}
        <div className='aboutpagetransparent'></div>
    
        {/* Content on top */}
        <div className='aboutuspageabout'>
            <h1>Our Team </h1>
        </div>
    
        <hr className='aboutushoriline' />
    
        <div className='aboutusbannerlink'>
          <FontAwesomeIcon icon={faHouse} className='aboutusbannerhomefont' />
          <Link to="/" className='aboutusbannerhomelink'>Home <span style={{color:'#e76d08'}}> / </span> </Link>
          <Link to="/" className='aboutusbanneraboutlink'>Our Team</Link>
        </div>
    
    </div>
 

{/* Our team */}
<div>
  {/* Section Title */}
  <div className='ourteamtitle scroll5'>
    <h3 className="color capital"> Meet Our Team </h3>
    <h1 className='capital'> Our Expert And Professional <br /> Textica Staff </h1>
  </div>

  {/* Team Members Row 1 */}
  <div className='ourteamrow1'>
    <div className="team-member fade-left">
      <img src={ot1} alt="Team Member" className="team-img1" />
      <div className="hover-content1">
        <h3>John Doe</h3>
        <p>Senior Designer</p>
      </div>
    </div>
    <div className="team-member scroll5">
      <img src={ot2} alt="Team Member" className="team-img1" />
      <div className="hover-content1">
        <h3>Sarah Smith</h3>
        <p>Marketing Manager</p>
      </div>
    </div>
    <div className="team-member fade-right">
      <img src={ot3} alt="Team Member" className="team-img1" />
      <div className="hover-content1">
        <h3>Michael Lee</h3>
        <p>Software Engineer</p>
      </div>
    </div>
  </div>

  {/* Team Members Row 2 */}
  <div className='ourteamrow2'>
    <div className="team-member fade-left">
      <img src={ot1} alt="Team Member" className="team-img1" />
      <div className="hover-content1">
        <h3>Jane Doe</h3>
        <p>HR Manager</p>
      </div>
    </div>
    <div className="team-member scroll5">
      <img src={ot2} alt="Team Member" className="team-img1" />
      <div className="hover-content1">
        <h3>Emily White</h3>
        <p>Lead Developer</p>
      </div>
    </div>
    <div className="team-member fade-right">
      <img src={ot3} alt="Team Member" className="team-img1" />
      <div className="hover-content1">
        <h3>David Brown</h3>
        <p>Project Manager</p>
      </div>
    </div>
  </div>
</div>



{/* Our Services page */}
<div style={{backgroundColor:'#dedede scroll5'}}>
    <div className='ourteamservicetitle scroll5'>
        <h3 className='color' style={{marginTop:'2%'}}>Our Services</h3>
        <h1 style={{textTransform:'uppercase', margin:'2%'}}>provide best solution Take Look Into <br></br> Our Best Services</h1>
    </div>
    <div className='container ourteamserviceflex'>
        <div style={{padding:'26px',margin:'2px',backgroundColor:' #e6e6e6'}} className='fade-left'>
            <h3>Febric products and Accessories</h3>
            <p style={{fontSize:'17px'}}>Textiles are materials made from fibers or yarn, and they range of products range</p>
            <img src={m1} style={{width:'25%',padding:'16px',marginTop:'6%',backgroundColor:'#dedede'}}/>
        </div>
        <div style={{padding:'26px',margin:'2px',backgroundColor:' #e6e6e6'}} className='scroll5'>
            <h3>Febric products and Accessories</h3>
            <p style={{fontSize:'17px'}}>Textiles are materials made from fibers or yarn, and they range of products range</p>
            <img src={m1} style={{width:'25%',padding:'16px',marginTop:'6%',backgroundColor:'#dedede'}}/>
        </div>
        <div style={{padding:'26px',margin:'2px',backgroundColor:' #e6e6e6'}} className='fade-right'>
            <h3>Febric products and Accessories</h3>
            <p style={{fontSize:'17px'}}>Textiles are materials made from fibers or yarn, and they range of products range</p>
            <img src={m1} style={{width:'25%',padding:'16px',marginTop:'6%',backgroundColor:'#dedede'}}/>
        </div>
    </div>
<div className='container ourteamserviceflex'>
    <div style={{padding:'26px',margin:'2px',backgroundColor:' #e6e6e6',marginBottom:'6%'}} className='fade-left'>
        <h3>Febric products and Accessories</h3>
        <p style={{fontSize:'17px'}}>Textiles are materials made from fibers or yarn, and they range of products range</p>
        <img src={m1} style={{width:'25%',padding:'16px',marginTop:'6%',backgroundColor:'#dedede'}}/>
        </div>
    <div style={{padding:'26px',margin:'2px',backgroundColor:' #e6e6e6',marginBottom:'6%'}} className='scroll5'>
        <h3>Febric products and Accessories</h3>
        <p style={{fontSize:'17px'}}>Textiles are materials made from fibers or yarn, and they range of products range</p>
        <img src={m1} style={{width:'25%',padding:'16px',marginTop:'6%',backgroundColor:'#dedede'}}/>
    </div>
    <div style={{padding:'26px',margin:'2px',backgroundColor:' #e6e6e6',marginBottom:'6%'}} className='fade-right'>
        <h3>Febric products and Accessories</h3>
        <p style={{fontSize:'17px'}}>Textiles are materials made from fibers or yarn, and they range of products range</p>
        <img src={m1} style={{width:'25%',padding:'16px',marginTop:'6%',backgroundColor:'#dedede'}}/>
    </div>
</div>
</div>


{/* Percentage content */}
{/* className='scroll5' */}
<div style={{ position: 'relative', width: '100%', height: '360px', marginTop: '90px', marginBottom: '20px' }} className='scroll5'>
  <img src={banner1} alt="Banner" style={{ width: '100%', height: '360px',  }}  />
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust transparency with the alpha value (0.5 here)
    }} >
    <div className='banner'>
      <div className='bannergap'>
      <img  src={m1} alt="Dry Cleaning"  className='bannerm1img1' />
        <h1 style={{fontSize:'60px',fontWeight:'700',color:'#e76d08'}}>45%</h1>
        <p style={{fontSize:'40px', fontWeight:'750',color:'darkseagreen'}}>Dry Cleaning</p>
        <p style={{fontSize:'20px'}}>The Intersection of Textiles and Fine Art</p>
      </div>
      <div style={{ marginLeft: '160px', marginTop: '8px', borderLeft: '2px solid white', paddingLeft: '20px', }} >

  </div>
      <div className='bannergap'>
      <img src={m1} alt="Dry Cleaning" className='bannerm1img2'/>
        <h1 style={{fontSize:'60px',fontWeight:'700',color:'#e76d08'}}>55%</h1>
        <p style={{fontSize:'40px', fontWeight:'750',color:'darkseagreen'}}>Finish Projects</p>
        <p style={{fontSize:'20px'}}>The Intersection of Textiles and Fine Art</p>
      </div>
      <div style={{ marginLeft: '160px', marginTop: '8px', borderLeft: '2px solid white', paddingLeft: '20px', }} >

  </div>
      <div className='bannergap'>
      <img src={m1} alt="Dry Cleaning"  className='bannerm1img3' />
        <h1 style={{fontSize:'60px',fontWeight:'700',color:'#e76d08'}}>65%</h1>
        <p style={{fontSize:'40px', fontWeight:'750',color:'darkseagreen'}}>Trusted Clients</p>
        <p style={{fontSize:'20px'}}>The Intersection of Textiles and Fine Art</p>
      </div>
    </div>
  </div>
</div>


{/* Form to join  */}
<div className='ourteamformtitle'>
  <div className='scroll5'>
    <h1 className='ourteamformtitle1'> Want to join our team </h1>
    <p className='ourteamformtitle2'> Fill this Form </p>
  </div>
    <div className='ourteamformtable'>
        <form
            onSubmit={(event) => {
                event.preventDefault(); // Prevent the form from reloading the page
                alert('Your request has been submitted'); // Display the alert
            }} style={{ flex: '1' }} >
            <table className='ourteamformtable1 fade-left'>
                <tr>
                    <td className='ourteamlabel'> Name: </td>
                    <td style={{ padding: '16px' }}>
                        <input type="text" id="name" name="name" required className='ourteaminput' />
                    </td>
                </tr>
                <tr>
                    <td className='ourteamlabel'> Email: </td>
                    <td style={{ padding: '16px' }}>
                        <input type="email" id="email" name="email" required className='ourteaminput' />
                    </td>
                </tr>
                <tr>
                    <td className='ourteamlabel'> Gender: </td>
                    <td style={{ padding: '16px' }}>
                        <input type="radio" id="male" name="gender" value="male" required style={{ marginRight: '5px' }} />
                        <label htmlFor="male" style={{ marginRight: '15px' }}>Male</label>
                        <input type="radio" id="female" name="gender" value="female" style={{ marginRight: '5px' }} />
                        <label htmlFor="female">Female</label>
                    </td>
                </tr>
                <tr>
                    <td className='ourteamlabel'> Qualification: </td>
                    <td style={{ padding: '16px' }}>
                        <select  id="qualification" name="qualification" required className='ourteaminput' >
                            <option value="">Select your Professional</option>
                            <option value="Taylor">Taylor</option>
                            <option value="Designer">Designer</option>
                            <option value="fashion Designer">Fashion Designer</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className='ourteamlabel'> Documents: </td>
                    <td style={{ padding: '16px' }}>
                        <input type="file" required className='ourteaminput' />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ textAlign: 'center', padding: '16px' }}>
                        <input type="submit" value="Submit" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
                    </td>
                </tr>
            </table>
        </form>

        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={ot2} alt="Team" style={{ maxWidth: '75%', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                className='hide-on-small-screens fade-right' />
        </div>
        
    </div>
</div>


{/* Footer Content */}
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
}

export default Ourteam;