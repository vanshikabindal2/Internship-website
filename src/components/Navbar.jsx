import React, { useState } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
import logo from '../assets/logo.png'
import {
  FaChevronDown,
  FaUser,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="navbar">
      {/* ================= LOGO ================= */}
         <div className="navbar-logo">
        <img src={logo} alt="Company Logo" />
      </div>

      {/* ================= NAVIGATION ================= */}

      <nav className={`navbar-menu ${mobileOpen ? "mobile-active" : ""}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>
          Home
        </Link>

        <Link to='/about' onClick={() => setMobileOpen(false)}>
          About Us
        </Link>

        {/* ================= SERVICES ================= */}

        <div
          className={`nav-dropdown ${
            openDropdown === "services" ? "dropdown-active" : ""
          }`}
          onMouseEnter={() => setOpenDropdown("services")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            className="nav-dropdown-btn"
            onClick={() => toggleDropdown("services")}
          >
           <Link to='/service'><span>Service</span></Link> 
            <FaChevronDown />
          </button>

          <div className="mega-menu services-menu">
            <div className="mega-inner">
              {/* LEFT SIDE */}

              <div className="service-column">
                <h3>Logistic Services</h3>

                <div className="service-grid">
                  <a href="#air-freight">
                    <span>Air Freight</span>
                    <FaArrowRight />
                  </a>

                  <a href="#sea-freight">
                    <span>Sea Freight</span>
                    <FaArrowRight />
                  </a>

                  <a href="#multimodal">
                    <span>Multimodal</span>
                    <FaArrowRight />
                  </a>

                  <a href="#door-to-door">
                    <span>Door to Door</span>
                    <FaArrowRight />
                  </a>

                  <a href="#projects">
                    <span>Projects</span>
                    <FaArrowRight />
                  </a>

                  <a href="#customs">
                    <span>Customs Brokerage</span>
                    <FaArrowRight />
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE */}

              <div className="service-column supply-column">
                <h3>Supply Chain Services</h3>

                <div className="supply-grid">
                  <a href="#warehousing">
                    <span>3PL Warehousing</span>
                    <FaArrowRight />
                  </a>

                  <a href="#criticare">
                    <span>Jeena Criticare</span>
                    <FaArrowRight />
                  </a>

                  <Link to="/service" className="view-services">
                    <span>View All Services</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MEDIA ================= */}

        <div
          className={`nav-dropdown ${
            openDropdown === "media" ? "dropdown-active" : ""
          }`}
          onMouseEnter={() => setOpenDropdown("media")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            className="nav-dropdown-btn"
            onClick={() => toggleDropdown("media")}
          >
           <Link to='/media'>Media</Link> 
            <FaChevronDown />
          </button>

          <div className="mega-menu media-menu">
            <div className="media-inner">
              {/* BLOGS */}

              <div className="media-card">
                <div className="media-image">
                  <img src="https://images.unsplash.com/photo-1638342863994-ae4eee256688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blogs" />
                </div>

                <h3>Blogs</h3>

                <p>
                  Explore the world of industry trends, expert opinions, and
                  valuable insights to keep yourself informed and inspired!
                </p>

                <a href="#blogs">
                  <span>View All Blogs</span>
                  <FaArrowRight />
                </a>
              </div>

              {/* CASE STUDIES */}

              <div className="media-card">
                <div className="media-image">
                  <img
                    src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Case Studies"
                  />
                </div>

                <h3>Case Studies</h3>

                <p>
                  Dive into real-world success stories showcasing innovative
                  solutions and exceptional service delivery.
                </p>

                <a href="#case-studies">
                  <span>View All Case Studies</span>
                  <FaArrowRight />
                </a>
              </div>

              {/* MEDIA & AWARDS */}

              <div className="media-card">
                <div className="media-image">
                  <img
                    src="https://images.unsplash.com/photo-1659080907377-ee6a57fb6b9c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Media and Awards"
                  />
                </div>

                <h3>Media & Awards</h3>

                <p>
                  Discover our achievements and media highlights as we continue
                  to set benchmarks in the logistics and supply chain industry.
                </p>

                <a href="#awards">
                  <span>View All Media & Awards</span>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>


          
        </div>

        {/* ================= OTHER LINKS ================= */}

        <Link to="/carrer" onClick={() => setMobileOpen(false)}>
          Career
        </Link>

        <Link to ="/csr" onClick={() => setMobileOpen(false)}>
          Csr
        </Link>
        <Link to="/contact" onClick={() => setMobileOpen(false)}>
          Contact
        </Link>
      </nav>

      {/* ================= RIGHT SIDE ================= */}

      <div className="navbar-right">
        {/* <Link to='/customer' className="portal">
          <FaUser />
          <span>Customer Portal</span>
        </Link> */}
        <a  href="https://links.jeenaweb.in/JeenaCustomerPortal/JCPLogin" target="_blank" className="portal">
         <FaUser />
          <span>Customer Portal</span>
         </a>

        <Link to='#' className="contact-navbar">
          Get Quote
        </Link>
      </div>

      {/* ================= MOBILE TOGGLE ================= */}

      <button
        className="mobile-toggle"
        onClick={() => {
          setMobileOpen(!mobileOpen);
          setOpenDropdown(null);
        }}
        aria-label="Toggle Menu"
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Navbar;