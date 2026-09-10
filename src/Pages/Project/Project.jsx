import React from 'react'
import './Project.css'
import Value from '../ValueAddedService/Value'
import Certificate from '../Certificate/Certificate'
import Newblog from '../FooterBlog/Newblog'

const Project = () => {
  return (
    <>
              <section className="project-pagess">

      {/* LEFT SIDE */}
      <div className="project-leftss">

        <div className="project-overlayss"></div>

        <div className="project-contentss">
          <h1>
           Projects Logistics

          </h1>

          <p>
          Orchestrating & Implementing Extraordinary    <br />Project with our End-to-End Transport Solutions
            
          </p>
        </div>

      </div>

      {/* RIGHT FORM */}
      <div className="project-form-boxss">

        <h2>Need help with air freight?</h2>

        <p>
          Contact our Air Freight experts
        </p>

        <form>

          <div className="form-row-project">
            <input
              type="text"
              placeholder="Company Name*"
            />

            <input
              type="text"
              placeholder="Contact Person*"
            />
          </div>

          <div className="form-rows-project">
            <input
              type="email"
              placeholder="Email*"
            />

            <input
              type="tel"
              placeholder="Phone No*"
            />
          </div>

          <div className="form-rows-project">

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

          <label className="agreements-project">

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
    {/*project about  */}
<section className="project-freight-sections">
      
      {/* LEFT IMAGE */}
      <div className="project-freight-images">
        <img
          src="https://jeena.com/wp-content/uploads/2024/11/image-76.jpg"
          alt="Air Freight Services"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="project-freight-contents">
        <h2>
         Discover Excellence in    <br /> Project Cargo Logistics

          <br />
        
        </h2>

        <p>
          With a philosophy grounded in strategic planning and executed with unwavering idealism, we redefine project cargo logistics. Our tailored end-to-end solutions cater to diverse industries, earning us a coveted spot among India’s top 10 project logistics companies. Jeena’s seasoned professionals combine traditional freight forwarding and transportation with bespoke capabilities to handle heavy lift projects.


        </p>


        <p>
       Leveraging cutting-edge technology, we ensure complete control over heavy-lift forwarding and break-bulk cargo, transforming it into a meticulously managed process for our clients.


        </p>
      </div>

    </section>

{/* mange supply */}
    <section  className="Project-chain-section">
    <h2>Manage your Supply Chain</h2>
    <div className="project-chain-image">
      <img src="https://jeena.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-15.32.04_084682ce.jpg" alt='Manage  your Supply Chain'/>
    </div>

   </section>
   <Value/>
   <Certificate/>
   <Newblog/> 
    </>
  )
}

export default Project
