import React from "react";
import "./CTA.css";

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <div className="contact-banner-photo">
        <img
          src="https://images.pexels.com/photos/7709294/pexels-photo-7709294.jpeg"
          alt="Customer support agent"
        />
      </div>

      <div className="contact-banner-content">
        <h2>
          Contact us now and make your logistics efficient and
          future-proof!
        </h2>
        <p>
          As a global logistics company, we develop customised concepts
          that perfectly align with your goals.
        </p>
        <a href="/contact" className="contact-banner-btn">
          Contact us
        </a>
      </div>
    </section>
  );
};

export default ContactBanner;