import React from 'react'
import './Sea.css'
import Value from '../ValueAddedService/Value'
import Certificate from '../Certificate/Certificate'
import Newblog from '../FooterBlog/Newblog'


const Sea = () => {
  return (
    <>
        <section className="contract-pagess">

      {/* LEFT SIDE */}
      <div className="contract-leftss">

        <div className="contract-overlayss"></div>

        <div className="contract-contentss">
          <h1>
            Air 
            Freight
          </h1>

          <p>
            Delivering Trust & Excellence with Our Ocean
            <br />
            Freight Solutions for Seamless Global Shipping
          </p>
        </div>

      </div>

      {/* RIGHT FORM */}
      <div className="contract-form-boxss">

        <h2>Need help with air freight?</h2>

        <p>
          Contact our Air Freight experts
        </p>

        <form>

          <div className="form-rowss">
            <input
              type="text"
              placeholder="Company Name*"
            />

            <input
              type="text"
              placeholder="Contact Person*"
            />
          </div>

          <div className="form-rowss">
            <input
              type="email"
              placeholder="Email*"
            />

            <input
              type="tel"
              placeholder="Phone No*"
            />
          </div>

          <div className="form-rowss">

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

          <label className="agreementss">

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
{/*sea about   */}
<section className="air-freight-sections">
      
      {/* LEFT IMAGE */}
      <div className="air-freight-images">
        <img
          src="https://images.pexels.com/photos/9312571/pexels-photo-9312571.jpeg"
          alt="Air Freight Services"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="air-freight-contents">
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
<Value/>
{/* manage supply */}
   <section  className="supply-chain-section">
    <h2>Manage your Supply Chain</h2>
    <div className="supply-chain-image">
      <img src="https://jeena.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-30-at-18.26.35_e5b2b3f0.jpg" alt='Manage  your Supply Chain'/>
    </div>

   </section>
   <Certificate/>
   <Newblog/>
      
    </>
  )
}

export default Sea
