import React from 'react'
import './Austrilla.css'
import Certificate from '../Certificate/Certificate';

const industries = [
  {
    title: "Automotive",
    image: "https://jeena.com/wp-content/uploads/2024/10/01.svg",
  },
  {
    title: "Pharma",
    image: "https://jeena.com/wp-content/uploads/2024/11/02-1.svg",
  },
  {
    title: "Retail",
    image: "https://jeena.com/wp-content/uploads/2024/11/03-1.svg",
  },
  {
    title: "Engineering",
    image: "https://jeena.com/wp-content/uploads/2024/10/04.svg",
  },
  {
    title: "Defence & Aerospace",
    image: "https://jeena.com/wp-content/uploads/2025/02/defences.png",
  },
  {
    title: "Wellness",
    image: "https://jeena.com/wp-content/uploads/2024/11/06-1.svg",
  },
  {
    title: "Chemicals",
    image: "https://jeena.com/wp-content/uploads/2024/11/07-1.svg",
  },
  {
    title: "FMCG",
    image: "https://jeena.com/wp-content/uploads/2025/02/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png",
  },
];

const JeenaAustrilla = () => {
  return (
    <>
      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="Austrilla-pagess">

        {/* LEFT SIDE */}
        <div className="Austrilla-leftss">

          <div className="Austrilla-overlayss"></div>

          <div className="Austrilla-contentss">

            <h1>
              Australasia’s Leading <br />
              End-to-End Logistics <br />
              Solutions Provider <br />
              A global Logistics <br />
              Partner
            </h1>

          </div>

        </div>


        {/* =========================
            RIGHT FORM
        ========================= */}
        <div className="Austrilla-form-boxss">

          <h2>
            Need help with air freight?
          </h2>

          <p>
            Contact our Air Freight experts
          </p>

          <form>

            {/* ROW 1 */}
            <div className="form-row-Austrilla">

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
            <div className="form-rows-Austrilla">

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
            <div className="form-rows-Austrilla">

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
          OVERVIEW
      ========================= */}
      <section className="overview-section">

        <div className="overview-container">

          <h2>Overview</h2>

          <p>
            Initiated in Australia, Jeena Global is at the forefront of
            facilitating profitable and streamlined international trade
            across Australasia and beyond. We serve a wide range of
            industries with customised, door-to-door logistics designed
            for global reach and regional relevance.
          </p>

          <p>
            Backed by over a century of expertise from our parent company
            in India, and a robust presence in Australia and New Zealand,
            we offer comprehensive logistics services that are crafted to
            streamline supply chains while enhancing operational efficiency.
            We offer scalable and agile logistics solutions — from cold
            chain transportation for pharmaceuticals and perishables to
            end-to-end textile freight management. Our integrated supply
            chain network, covering air, sea, and road freight, ensures
            seamless connectivity between Australia, New Zealand, and
            major global trade hubs. Jeena Australia offers specialised
            multimodal solutions across Australia’s major cities, including
            Sydney, Melbourne, Perth, Brisbane, and New Zealand’s logistics
            hubs like Auckland and Christchurch.
          </p>

          <p>
            Affiliated with prestigious organisations including ACAAI, FFFAI,
            FIATA, MTO, WCA, FAPAA, AEO, BCHAA, and ISO 9001:2015, and
            accredited by IATA, Jeena & Company promises the highest standards
            of quality, transparency, and reliability. Our active participation
            in the International Chamber of Commerce and Industry, like the
            India-New Zealand Business Council and Indo-Australia Chamber of
            Commerce, underscores our commitment to holding strong trade
            relationships globally.
          </p>

        </div>

      </section>


      {/* =========================
          SERVING COUNTRIES
      ========================= */}
      <section className="countries-section">

        <div className="countries-container">

          {/* LEFT CONTENT */}
          <div className="countries-content">

            <h2>Serving Countries across the Globe</h2>

            <div className="office-info">

              <div className="office-title">

                <span className="location-icon">
                  ●
                </span>

                <h3>Office Location</h3>

              </div>


              <div className="office-details">

                <h4>Corporate Office</h4>

                <p>
                  Level 14, 3 Parramatta Square 153<br />
                  Macquarie Street Parramatta<br />
                  NSW 2150
                </p>

              </div>


              <div className="contact-info">

                <p>
                  <strong>
                    Cell No: +61 414 726 098
                  </strong>
                </p>

                <p>
                  <strong>
                    Email: nkatgara@jeena.co.in
                  </strong>
                </p>

              </div>

            </div>

          </div>


          {/* RIGHT MAP */}
          <div className="australia-map">

            <img
              src="https://jeena.com/wp-content/uploads/2025/06/map3.png"
              alt="Australia Map"
            />

          </div>

        </div>

      </section>


      {/* =========================
          INDUSTRIES WE SERVE
      ========================= */}
      <section className="industries-section">

        <div className="industries-container">

          <div className="industries-header">

            <h2>
              Industries We Serve
            </h2>

            <p>
              Jeena &amp; Company stands as a global logistics provider,
              delivering specialized solutions across various industries,
              backed by our profound industry knowledge and extensive
              experience.
            </p>

          </div>


          <div className="industries-grid">

            {industries.map((industry, index) => (

              <div
                className="industry-item"
                key={index}
              >

                <div className="industry-icon">

                  <img
                    src={industry.image}
                    alt={industry.title}
                  />

                </div>

                <h3>
                  {industry.title}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          CERTIFICATE
      ========================= */}
      <Certificate />

    </>
  )
}

export default JeenaAustrilla
