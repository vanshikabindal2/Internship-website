
import React, { useEffect, useRef } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaDownload,
  FaChevronUp,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Footer = () => {
  const footerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const animatedElements = footer.querySelectorAll(".footer-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>

      {/* Main Footer */}
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-column information footer-animate from-left">
          <img
            src={logo}
            alt="Jeena & Company"
            className="footer-logo"
          />

          <h3>Information</h3>

          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/carrer">Carrer</Link>
            </li>

            <li>
              <Link to="/standard-Terms & conditions of services">
                Standard Terms & Conditions of Services
              </Link>
            </li>

            <li>
              <a
                href="https://jeena.com/wp-content/uploads/2025/02/Standard-TC-Cold-Chain-Logistics-JEENA.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Standard Terms & Condition for Healthcare
                <br />
                Business
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/jeena-&-company/" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>

          <p className="company-name">
            Jeena & Company
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column footer-animate from-top delay-1">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/media">Media</Link>
            </li>

            <li><Link to="/Digital-Solution">Digital Solutions</Link></li>

            <li>
              <a
                href="https://links.jeenaweb.in/JeenaCustomerPortal/JCPLogin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jeena Customer Portal
              </a>
            </li>

            <li>
              <Link to="/contact">Contact us</Link>
            </li>

            <li><Link to="Jeena-Australia">Jeena Australia</Link></li>
            <li>Jeena Blogs</li>
            <li><Link to="/FAQ's">FAQ's</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column footer-animate from-right delay-2">
          <h3>Logistics</h3>

          <ul>
            <li>
              <Link to="/airfreight">Air Freight</Link>
            </li>

            <li>
              <Link to="/seafreight">Sea Freight</Link>
            </li>

            <li>
              <Link to="/project">Project</Link>
            </li>

            <li>
              <Link to="/door-to-door">
                Door to Door
              </Link>
            </li>

            <li>
              <Link to="/custom-brokerage">
                Custom Brokerage
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column footer-animate from-bottom delay-3">
          <h3>Supply Chain</h3>

          <ul>
            <li>
              <Link to="/warehousing">
                3PL & Warehousing
              </Link>
            </li>

            <li>
              <Link to="/jeena-criticare">
                Jeena Criticare
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom footer-animate from-bottom">

        <div className="brochure">
          <FaDownload />
          <span>Download Brochure</span>
        </div>

        <div className="bottom-links">
          <span>ISO 27001 Policy</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>GDP Policy</span>
        </div>

      </div>

      {/* Back To Top */}
      <button
        className="back-to-top"
        onClick={scrollToTop}
      >
        <FaChevronUp />
      </button>

    </footer>
  );
};

export default Footer;
