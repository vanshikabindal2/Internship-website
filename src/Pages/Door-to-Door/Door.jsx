


import React, { useEffect, useRef } from 'react';
import './Door.css';

import Certificate from '../Certificate/Certificate';
import Newblog from '../FooterBlog/Newblog';

const services = [
  {
    title: "Supply Chain management",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/supply-chain-1.svg",
  },
  {
    title: "Complete Transparency",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/search-2-1.svg",
  },
  {
    title: "Cross-Country Sales",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/logistics-2.svg",
  },
  {
    title: "Tailor-made <b/> Solutions",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/solution-1-1.svg",
  },
  {
    title: "State-of-the-art digital technology",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/digitalization-1-1.svg",
  },
  {
    title: "Time-bound Deliveries With Sea & Air Freight",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/delivery-time-1.svg",
  },
  {
    title: "Global & Local Network of Reliable Agents",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/travel-agent-1.svg",
  },
  {
    title: "Cutting-edge technology to improve efficiency",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/circuit-1.svg",
  },
  {
    title: "Technology-oriented Service for Monitoring of Shipments",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/order-tracking-1.svg",
  },

];

const Door = () => {

  // Reference for Value Added Services section
  const sectionRef = useRef(null);

  // Animation for VAS cards
  useEffect(() => {

    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".vas-card");

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

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };

  }, []);

  return (
    <>
      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="Door-pagess">

        {/* LEFT SIDE */}
        <div className="Door-leftss">

          <div className="Door-overlayss"></div>

          <div className="Door-contentss">

            <h1>
             Your Cargo, Our<br/> Responsibility,<br/> Door-to-Door!
            </h1>

            <p>
              Orchestrating & Implementing Extraordinary
              <br />
              Project with our End-to-End Transport Solutions
            </p>

          </div>

        </div>


        {/* =========================
            RIGHT FORM
        ========================= */}

        <div className="Door-form-boxss">

          <h2>
            Need help with air freight?
          </h2>

          <p>
            Contact our Air Freight experts
          </p>

          <form>

            {/* ROW 1 */}
            <div className="form-row-Door">

              <input
                type="text"
                placeholder="Company Name*"
              />

              <input
                type="text"
                placeholder="Contact Person*"
              />

            </div>


            {/* ROW 2 */}
            <div className="form-rows-Door">

              <input
                type="email"
                placeholder="Email*"
              />

              <input
                type="tel"
                placeholder="Phone No*"
              />

            </div>


            {/* ROW 3 */}
            <div className="form-rows-Door">

              <select defaultValue="">

                <option value="" disabled>
                  Select Service
                </option>

                <option value="air-freight">
                  Air Freight
                </option>

                <option value="sea-freight">
                  Sea Freight
                </option>

                <option value="3pl-warehousing">
                  3PL & Warehousing
                </option>

                <option value="project">
                  Project
                </option>

                <option value="others">
                  Others
                </option>

              </select>


              <input
                type="text"
                placeholder="Location*"
              />

            </div>


            {/* MESSAGE */}
            <textarea
              placeholder="More information*"
            ></textarea>


            {/* AGREEMENT */}
            <label className="agreements-Door">

              <input
                type="checkbox"
              />

              <span>
                I agree to the Terms of Service and Privacy Policy
              </span>

            </label>


            {/* BUTTON */}
            <button type="submit">
              Submit
            </button>

          </form>

        </div>

      </section>


      {/* =========================
          PROJECT ABOUT SECTION
      ========================= */}

      <section className="Door-freight-sections">

        {/* LEFT IMAGE */}
        <div className="Door-freight-images">

          <img
            src="https://images.pexels.com/photos/6170464/pexels-photo-6170464.jpeg"
            alt="Project Cargo Logistics"
          />

        </div>


        {/* RIGHT CONTENT */}
        <div className="Door-freight-contents">

          <h2>
           Simplifying the movement of over-sized cargo with our Door-to-door logistics
            <br />
            with our Door-to-door logistics
          </h2>


          <p>
           We offer comprehensive Door-to-door logistics services for the seamless transportation of shipments from the point of origin to the final destination. With a key focus on reliability, trust, and efficiency, Jeena ensures all the aspects of the logistics chain, starting from pickup to delivery, are meticulously managed. Leveraging advanced tracking and tracing technology and a wide network of local networks, Jeena streamlines the entire process, offering customers real-time tracking and peace of mind. Whether your cargo is domestic or international, Jeena’s Door-to-door freight forwarding service is committed to delivering your shipment safely to the destination.
          </p>


          

        </div>

      </section>


      {/* =========================
          MANAGE SUPPLY CHAIN
      ========================= */}

      <section className="Door-chain-section">

        <h2>
          Manage your Supply Chain
        </h2>

        <div className="Door-chain-image">

          <img
            src="https://jeena.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-17.10.03_91c8c308.jpg"
            alt="Manage your Supply Chain"
          />

        </div>

      </section>


      {/* =========================
          VALUE ADDED SERVICES
      ========================= */}

      <section
        className="vas-section"
        ref={sectionRef}
      >

        {/* HEADING */}
        <div className="vas-heading">

          <h2>
            Value Added Services
          </h2>

          <p>
            With our state-of-the-art infrastructure, facility, and
            value-added services, Jeena Criticare Logistics ensures
            the integrity of your sensitive cargo throughout its journey.
          </p>

        </div>


        {/* CARDS */}
        <div className="vas-grid">

          {services.map((service, index) => (

            <div
              className="vas-card"
              key={index}
              style={{
                "--delay": `${index * 0.08}s`,
              }}
            >

              {/* IMAGE */}
              <div className="vas-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>


              {/* TITLE */}
              <h3>
                {service.title}
              </h3>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          CERTIFICATE
      ========================= */}
 <Newblog />
      <Certificate />


      {/* =========================
          BLOG
      ========================= */}

     

    </>
  );
};

export default Door;
