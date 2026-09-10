


import React, { useEffect, useRef } from 'react';
import './Custom.css';

import Certificate from '../Certificate/Certificate';
import Newblog from '../FooterBlog/Newblog';

const services = [
  {
    title: "Normal Dutiable Clearances",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/fi_2541979.svg",
  },
  {
    title: "In-bond & ex-bond Clearances",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/fi_679720.svg",
  },
  {
    title: "SEZ, EOU, FTWZ Clearances",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/fi_4009000.svg",
  },
  {
    title: "License Clearances",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/fi_3135763.svg",
  },
  {
    title: "Project/Break Bulk Clearances",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/fi_2897659.svg",
  },
  {
    title: "ATA Carnet/Exhibition Goods Clearances",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/fi_3043822.svg",
  },
  {
    title: "Repair, Return and Job Work Clearances",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/fi_12506277.svg",
  },
  {
    title: "Bank Guarantee Cancellation",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/circuit-1.svg",
  },
  {
    title: "Participative government agency Clearances -ADC, WHO, P&Q, A&Q, COO/FT",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/fi_4474140.svg",
  },
  {
    title: "SVB Registration, Finalization & Clearance",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/verify-3.svg",
  },
{
    title: "SH Code Consultancy Services",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/fi_1835948-1.svg",
  },
{
    title: "AEO Consultancy",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/fi_3135763-1.svg",
  },


];

const Custom = () => {

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

      <section className="custom-pagess">

        {/* LEFT SIDE */}
        <div className="custom-leftss">

          <div className="custom-overlayss"></div>

          <div className="custom-contentss">

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

        <div className="custom-form-boxss">

          <h2>
            Need help with air freight?
          </h2>

          <p>
            Contact our Air Freight experts
          </p>

          <form>

            {/* ROW 1 */}
            <div className="form-row-custom">

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

      <section className="custom-freight-sections">

        {/* LEFT IMAGE */}
        <div className="custom-freight-images">

          <img
            src="https://images.pexels.com/photos/6170464/pexels-photo-6170464.jpeg"
            alt="Project Cargo Logistics"
          />

        </div>


        {/* RIGHT CONTENT */}
        <div className="custom-freight-contents">

          <h2>
          Partner with Jeena for a<br/> Simplified Customs<br/> Clearance process
          </h2>


          <p>
            Leveraging global reach and local connections, we at Jeena simplify your freight forwarding needs with our customs clearance services. We meticulously craft the most efficient routes for your shipments, ensuring timely deliveries at cost-effective prices. Understanding the complexity of international shipping, we handle the voluminous documentation required to import and export your products with precision and efficiency.
          </p>
<p>Trust Jeena for unmatched industry expertise and a personalized approach designed to deliver affordability and punctuality to your logistics operations.

</p>

          

        </div>

      </section>


      {/* =========================
          MANAGE SUPPLY CHAIN
      ========================= */}

      <section className="custom-chain-section">

        <h2>
          Manage your Supply Chain
        </h2>

        <div className="custom-chain-image">

          <img
            src="https://jeena.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-07-at-12.51.33_00651d0a.jpg"
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
         Jeena goes beyond standard clearance to offer real-time updates, duty optimization, and end-to-end transparency. Whether it’s air, sea, or road shipments, we deliver efficiency and peace of mind, making global trade hassle-free for our clients.


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

export default Custom;
