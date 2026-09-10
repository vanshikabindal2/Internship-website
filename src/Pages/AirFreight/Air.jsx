
import React from 'react';
import './Air.css';
import Value from '../ValueAddedService/Value'
import Certificate from '../Certificate/Certificate'
import Newblog from '../FooterBlog/Newblog'

const Air = () => {
  return (
    <>
    <section className="contract-pages">

      {/* LEFT SIDE */}
      <div className="contract-lefts">

        <div className="contract-overlays"></div>

        <div className="contract-contents">
          <h1>
            Air 
            Freight
          </h1>

          <p>
            Fast, reliable and efficient air freight
            <br />
            solutions for your business
          </p>
        </div>

      </div>

      {/* RIGHT FORM */}
      <div className="contract-form-boxs">

        <h2>Need help with air freight?</h2>

        <p>
          Contact our Air Freight experts
        </p>

        <form>

          <div className="form-rows">
            <input
              type="text"
              placeholder="Company Name*"
            />

            <input
              type="text"
              placeholder="Contact Person*"
            />
          </div>

          <div className="form-rows">
            <input
              type="email"
              placeholder="Email*"
            />

            <input
              type="tel"
              placeholder="Phone No*"
            />
          </div>

          <div className="form-rows">

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

          <textarea
            placeholder="More information*"
          ></textarea>

          <label className="agreements">

            <input type="checkbox" />

            <span>
              I agree to the Terms of Service and Privacy Policy
            </span>

          </label>

          <button type="submit">
            Submit
          </button>

        </form>

      </div>

    </section>

    {/* // about */}
<section className="air-freight-section">
      
      {/* LEFT IMAGE */}
      <div className="air-freight-image">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
          alt="Air Freight Services"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="air-freight-content">
        <h2>
          Expand Your Reach with
          <br />
          Our Air Freight Services
        </h2>

        <p>
          Jeena & Company offers safe, efficient, and reliable air cargo
          services for high-value, temperature-sensitive goods. We are
          globally connected with major carriers ensuring your cargo reaches
          its destination timely, every time. Jeena & Company leverages digital
          solutions, and controlled freight networks to fulfill your specific
          requirements.
        </p>

        <p>
          We have a dedicated team handling temperature-sensitive, dangerous
          goods and live species cargo shipments. Our air freight professionals
          ensure all the documentation is processed timely to offer you speedy
          delivery.
        </p>

        <p>
          Discover our extensive range of international air freight and
          domestic air cargo services, unprecedented industry expertise, and
          bespoke approach to cater to an affordable and timely delivery of
          cargo across destinations for a gamut of industries.
        </p>
      </div>

    </section>
{/*  value added service */}
<Value/>
 {/* manage supply */}
   <section  className="supply-chain-section">
    <h2>Manage your Supply Chain</h2>
    <div className="supply-chain-image">
      <img src="https://jeena.com/wp-content/uploads/2024/10/freight2.jpg" alt='Manage  your Supply Chain'/>
    </div>

   </section>
<Certificate/>
<Newblog/>

        </>
  );
};

export default Air;

