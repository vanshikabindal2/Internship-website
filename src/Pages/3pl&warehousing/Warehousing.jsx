
import React, { useEffect, useRef, useState } from "react";
import "./Warehousing.css";
import Newblog from '../FooterBlog/Newblog'

const services=[
{
    title:"Warehousing",
    image:"https://jeena.com/wp-content/uploads/2024/10/inventory-1-1.svg",
},
{
    title:"Transportation",
    image:"https://jeena.com/wp-content/uploads/2024/11/logistic-2.svg",
},
{
    title:"Distribution",
    image:"https://jeena.com/wp-content/uploads/2024/11/supply-chain-1-1.svg",
},
{
    title:"Inbound &\nManufacturing",
    image:"https://jeena.com/wp-content/uploads/2024/11/manufacture-1.svg",
},
{
    title:"Supply",
    image:"https://jeena.com/wp-content/uploads/2024/11/Union-10.svg",
},
{
    title:"State-of-the-Art \nWarehouse facilities",
    image:"https://jeena.com/wp-content/uploads/2024/11/inventory-1-1-1.svg",
},

]

/* ================= SCROLL REVEAL HOOK ================= */
// direction: "top" | "bottom" | "left" | "right" | "zoom"
// Jaise hi element viewport me aata hai, "reveal-visible" class add ho jaati hai.
function useReveal(direction = "bottom", options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // sirf ek baar animate ho, baar baar nahi
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const className = `reveal reveal-${direction} ${visible ? "reveal-visible" : ""}`;
  return [ref, className];
}

const Warehousing = () => {
  // Hero section
  const [heroLeftRef, heroLeftClass] = useReveal("left");
  const [heroFormRef, heroFormClass] = useReveal("right");

  // Logistics info section
  const [logisticsImgRef, logisticsImgClass] = useReveal("left");
  const [logisticsContentRef, logisticsContentClass] = useReveal("right");

  // Value added services
  const [valueHeadingRef, valueHeadingClass] = useReveal("top");

  // Manage supply chain images
  const [mapOneRef, mapOneClass] = useReveal("zoom");
  const [mapTwoRef, mapTwoClass] = useReveal("zoom");

  // Warehouse space rent
  const [warehouseContentRef, warehouseContentClass] = useReveal("left");
  const [warehouseImageRef, warehouseImageClass] = useReveal("right");

  // Key features
  const [featuresTopRef, featuresTopClass] = useReveal("top");

  // WMS section
  const [wmsImageRef, wmsImageClass] = useReveal("left");
  const [wmsContentRef, wmsContentClass] = useReveal("right");

  return (
    <>
      {/* ================= CONTRACT HERO ================= */}
     <section className="contract-pages">

  {/* LEFT */}
  <div ref={heroLeftRef} className={`contract-lefts ${heroLeftClass}`}>
    <div className="contract-overlays"></div>

    <div className="contract-contents">
      <h1>
        3PL & Contract <br />
        Logistics
      </h1>

      <p>
        Rendering streamlined warehousing & contract
        <br />
        logistics to fulfill your customers’ demand
      </p>
    </div>
  </div>

  {/* RIGHT FORM */}
  <div
    ref={heroFormRef}
    className={`contract-form-boxs ${heroFormClass}`}
  >
    <h2>Need help with storage space?</h2>
    <p>Contact our Contract logistics experts</p>

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


      {/* ================= LOGISTICS INFO ================= */}
      <section className="logistics-info">

        {/* LEFT IMAGE */}
        <div ref={logisticsImgRef} className={`logistics-info-image ${logisticsImgClass}`}>
          <img
            src="https://plus.unsplash.com/premium_photo-1663091841319-41d3c2efa0b3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Warehouse worker moving boxes on a pallet trolley"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div ref={logisticsContentRef} className={`logistics-info-content ${logisticsContentClass}`}>

          <h2>
            Offering Reliable 3PL <br />
            Contract Logistics
          </h2>

          <p>
            Our Contract Logistics Services are designed to optimize your
            supply chain by multiple folds. Jeena seamlessly manages and
            handles all your 3PL contract logistics with our strategic
            network of storage facilities and advanced logistics
            infrastructure. Our seasoned professionals ensure efficient
            movement of shipments, meeting customer demands with precision
            and reliability.
          </p>

          <p>
            With Jeena as your trusted partner, you can streamline your
            supply chain operations and focus on growing your business
            with confidence.
          </p>

        </div>
      </section>
{/* value added */}
    <section className="value-services">
         <div className="value-services-container">
             {/* ========================= HEADING ========================= */}
             <h2 ref={valueHeadingRef} className={`value-services-title ${valueHeadingClass}`}> Value Added Services </h2>
              {/* ========================= DESCRIPTION ========================= */}
              <p className="value-services-description"> Jeena offers swift distribution logistic services to meet customer demand. Our value-added services entail bulk parcel deliveries, primary and secondary movement, splinter, and express service to our global customers, optimizing your supply chain by multiple folds. </p>
              {/* ========================= SERVICES GRID ========================= */}
              <div className="value-services-grid">
                {services.map((service, index) => {
                  const [itemRef, itemClass] = useReveal("bottom");
                  return (
                    <div
                      className={`value-service-item ${itemClass}`}
                      key={index}
                      ref={itemRef}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      {/* IMAGE */}
                      <div className="value-service-image">
                        <img src={service.image} alt={service.title.replace("\n", " ")} />
                      </div>
                      {/* TITLE */}
                      <h3 className="value-service-name">
                        {service.title.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < service.title.split("\n").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </h3>
                    </div>
                  );
                })}
              </div>
         </div>
    </section>
   
   {/* manage  supply */}
   <section className="manage-supply-chain">
    <div  className="manage-supply-chain-container">
        <h2>Manage Your Supply Chain</h2>
        <div ref={mapOneRef} className={`supply-chain-image-wrapper ${mapOneClass}`}>
            <img  src="https://jeena.com/wp-content/uploads/2024/11/map-e1738938068902.jpg" className="supply-chain-image"/>
            
        </div>
    </div>
   </section>
   {/* Transport */}
    {/* manage  supply */}
   <section className="manage-supply-chain">
    <div  className="manage-supply-chain-container">

        <div ref={mapTwoRef} className={`supply-chain-image-wrapper ${mapTwoClass}`}>
            <img  src="https://jeena.com/wp-content/uploads/2024/11/map3.jpg" className="supply-chain-image"/>
            
        </div>
    </div>
   </section>

   {/* space for rent   */}
   <section className="warehouse-section">
<div className="warehouse-container">
    <div ref={warehouseContentRef} className={`warehouse-content ${warehouseContentClass}`}>
        <h1>Warehouse Space Rent</h1>
        <p>Jeena & Company offers a cutting-edge warehouse space for rent, spanning 1.10 s 1.10 lakh sq. ft—built-up area. The warehouse is comprised of advanced state-of-the-art technology and robust management systems, offering all-around protection and security of products. The strategic location of the warehouse near the Nhava Sheva port, bus stops, major railway stations, and the airport, warehouse offer more convenient access for efficient logistics.</p>
<p>
Explore Jeena’s warehouse – where cutting-edge technology, robust management systems, and value-added services empower you to independently store and safeguard your products.</p>
    </div>
    <div ref={warehouseImageRef} className={`warehouse-image-wrapper ${warehouseImageClass}`}>
        <img src="https://techtrans.com/wp-content/uploads/2025/05/Warehouse_smaller.jpg" className="warehouse-image"/>
    </div>
</div>
<br/>
{/* keyfeatures */}
<section className="key-features">

      <div className="key-features-container">

        <h2 ref={featuresTopRef} className={`key-features-heading ${featuresTopClass}`}>
          Key Features
        </h2>

        {/* TOP 3 CONTENT */}
        <div className="key-features-content">

          <div className="feature-description">
            <h3>Modern Infrastructure</h3>
            <p>
              Our warehouse offers modern infrastructure, including a dynamic
              9000+ G+7 & G+6 heavy-duty pallet racking system and a G+3
              multi-tier shelving system. Moreover, we provide stackers,
              forklifts, fire hydrants, sprinklers, and hand pallet trolleys.
            </p>
          </div>

          <div className="feature-description">
            <h3>Industry Covered</h3>
            <p>
              With the increase in storage demand along with value-added
              services, we have maintained a warehouse space for rent that
              can cater to the needs of distinct industries including FMCG,
              E-commerce, Apparel, Pharmaceutical, Automobile, Cosmetic &
              personal care, etc.
            </p>
          </div>

          <div className="feature-description">
            <h3>Team of Professionals</h3>
            <p>
              Our warehousing team of experts comprehends each customer's
              requirements and designs solutions tailored to their needs.
              Our team expertise is chalking out solutions that ensure your
              goods remain in a safe and temperature-controlled environment.
            </p>
          </div>

        </div>


        {/* FEATURES */}

        <div className="features-grid">

          {[
            {
              img: "https://jeena.com/wp-content/uploads/2024/11/inventory-1-1-2.svg",
              alt: "Tech-enabled inventory management",
              label: <>Tech-enabled<br />inventory management</>,
            },
            {
              img: "https://jeena.com/wp-content/uploads/2024/11/supply-chain-1-2.svg",
              alt: "Distribution",
              label: "Distribution",
            },
            {
              img: "https://jeena.com/wp-content/uploads/2024/11/inventory-management-1.svg",
              alt: "FTWZ facilities",
              label: "FTWZ facilities",
            },
            {
              img: "https://jeena.com/wp-content/uploads/2024/11/group-2.svg",
              alt: "Multi-user facilities",
              label: "Multi-user facilities",
            },
            {
              img: "https://jeena.com/wp-content/uploads/2024/11/cardboard-box-1.svg",
              alt: "Pick and pack",
              label: <>Pick and<br />pack</>,
            },
            {
              img: "https://jeena.com/wp-content/uploads/2024/11/certificate-1.svg",
              alt: "Customs Bonded facilities",
              label: <>Customs Bonded<br />facilities</>,
            },
            {
              img: "https://jeena.com/wp-content/uploads/2024/11/product-management-1.svg",
              alt: "Box-In-Box Out management",
              label: <>Box-In-Box Out<br />management</>,
            },
            {
              img: "https://jeena.com/wp-content/uploads/2024/11/packages-1.svg",
              alt: "Pallet-In-Pallet Out Management",
              label: <>Pallet-In-Pallet<br />Out Management</>,
            },
            {
              img: "https://jeena.com/wp-content/uploads/2024/11/landing-page-1.svg",
              alt: "E-commerce operation",
              label: "E-commerce operation",
            },
            {
              img: "https://jeena.com/wp-content/uploads/2024/11/cold-1.svg",
              alt: "Ambient Temperature Control options",
              label: <>Ambient/Temperature<br />Control options</>,
            },
          ].map((feature, index) => {
            const [fRef, fClass] = useReveal("bottom");
            return (
              <div
                className={`feature-item ${fClass}`}
                key={index}
                ref={fRef}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <img src={feature.img} alt={feature.alt} />
                <h4>{feature.label}</h4>
              </div>
            );
          })}

        </div>

      </div>

    </section>

   </section>
   {/* management */}
   <section className="wms-section">
    <div className="wms-container">
        {/* left */}
        <div ref={wmsImageRef} className={`wms-image-box ${wmsImageClass}`}>
            <img src="https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg" className="wms-image"/>
        </div>
        {/* right */}
        <div ref={wmsContentRef} className={`wms-content ${wmsContentClass}`}>
            <h2>Jeena Warehousing</h2>
            <p>Our warehouse management system is built and designed with a customer-centric approach. The WMS offers an efficient, reliable, and secure solution to track and manage your stock inventory seamlessly. Jeena offers customers a real-time app to track and trace inventory, download customized reports, and secure access to your data.

</p>
        </div>
    </div>
   </section>
   <Newblog/>
  
  
    </>
  );
};

export default Warehousing;