import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { LuAlarmClock } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
// import theadicon from './images/theadicon.png';
// import './styles.css';

const Layout = () => {
  return (
    <div>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1050 }}>
        <Navbar bg="dark" className="py-2">
          <div className="d-flex w-100 flex-column flex-lg-row align-items-center text-white" style={{ fontFamily: 'Montserrat, serif' }}>
            <div className="d-flex align-items-center px-3 mb-2 mb-lg-0 d-none d-lg-block">
              <FontAwesomeIcon icon={faPhone} style={{ color: "#e76d08", fontSize: "22px" }} className="me-2" />
              <span>+91 93426 86929</span>
            </div>
            <div className="d-flex align-items-center px-3 mb-2 mb-lg-0 d-none d-lg-block">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#e76d08", fontSize: "22px" }} />
              <span className="text-white ms-2">ragulprasath42@gmail.com</span>
            </div>
            <div className="d-flex align-items-center ms-lg-auto flex-wrap justify-content-center">
              <div className="d-flex align-items-center px-3 mb-2 mb-lg-0">
                <LuAlarmClock style={{ color: "#e76d08", fontSize: "22px" }} className="me-2" />
                <p className="text-white m-0">Mon-Fri: 9.00am to 5.00pm</p>
              </div>
              <div className="d-flex d-none d-lg-block">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="ms-2 me-2">
                  <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "22px", color: "#e76d08" }} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="ms-2 me-2">
                  <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "22px", color: "#e76d08" }} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="ms-2 me-2">
                  <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "22px", color: "#e76d08" }} />
                </a>
              </div>
            </div>
          </div>
        </Navbar>

        <Navbar bg="white" expand="lg" className="px-3 shadow-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="navbar-brand-text d-flex align-items-center">
              {/* <img src={theadicon} alt="Brand Logo" className="brand-logo me-2" /> */}
              Textica
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="text-dark mx-3">Home</Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle as={Nav.Link} className="text-dark mx-3">Pages</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/aboutus">About Us</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/Ourteam">Our Team</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/ShopCart">Shop</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle as={Nav.Link} className="text-dark mx-3">Services</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/FabricDyeing">Fabric Dyeing</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/Manufacture">Manufacture</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/Stitch">Stitch Fabric</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link as={Link} to="/Contact" className="text-dark mx-3">Contact</Nav.Link>
              </Nav>
              <div className="d-flex align-items-center">
                <FaSearch style={{ cursor: "pointer", fontSize: "20px", color: "#e76d08", marginRight: "15px" }} />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div style={{ paddingTop: '120px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
