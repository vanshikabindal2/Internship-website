import React, { useEffect, useRef } from "react";
import './Digital.css'
const services = [
  {
    title: "Universal Tracking using B/L or Container No",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/tracking-2-1.svg",
  },
  {
    title: "Secure Authentication with OTP",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/wind-2.svg",
  },
  {
    title: "Shipment Tracking",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/logistic-2-3.svg",
  },
  {
    title: "Digitally signed Invoices",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/tracking-2-2.svg",
  },
  {
    title: "Follow Up Calls & Cold Calls",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/packages-1-3.svg",
  },
  {
    title: "Customer - Invoices & Outstanding",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/packages-2.svg",
  },
  {
    title: "Customer Wise Tracking",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/packages-3.svg",
  },
  {
    title: "Analytics & Reporting - Monthly & Yearly",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/packages-4.svg",
  },
  {
    title: "DSR. (Daily Status Reports)",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/offer.svg",
  },
  {
    title: "Replenishment of Dry Ice",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/shipment-1-1.svg",
  },
  
   {
    title: "Industry Updates",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/cold-1-2.svg",
  },
   {
    title: "FAQ and Feedbacks",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/airplane-1-2.svg",
  },
];

const Digital = () => {
    
      const sectionRef = useRef(null);
    
      useEffect(() => {
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
    
        cards.forEach((card) => observer.observe(card));
    
        return () => observer.disconnect();
      }, []);
    
  return (
    <>
   <section className='shipment-section'>
<div className='shipment-overlay'></div>
<div className='shipment-content'>
    <h1>Conveniently Track & <br/>Trace Your Shipment <br/>with Our Future-<br/>ready application</h1>
</div>
   </section>

{/* //    sustainable section */}
<section className='sustainable-section '>
<div className='sustainable-image'>
    <img src='https://jeena.com/wp-content/uploads/2024/11/Frame-1686560858.png' alt='image'/> 
</div>
<div className='sustainable-content'>
    <h2>Sailing Towards a<br/> Sustainable Tomorrow</h2>
    <p>Our commitment to a sustainable present and future is demonstrated in our agility to adapt, innovate, and implement digital practices, leaving behind the traditional way of operating. Being a legacy in logistics, we promise our customers and employees a sustainable future driven by our dedication to digital transformation and innovation at the core of our services.
</p>
</div>
</section>
{/* cargo section*/}
<section className='cargo-section'>
    <div className='cargo-content'>
        <h2>One Platform to Streamline Your Cargo</h2>
        <p>Jeena and Company believes that adaptability and innovation are the cornerstone of success in today’s digital age. Pioneers in the logistics and freight forwarding industry, we have constantly embraced digital transformation for our day-to-day operations, benefitting us and our customers impactfully. J5 and Jeena Customer Portal are our internal initiatives for our customers to get hassle-free and faster documentation and shipping processes with convenience and digital comfort.

</p>
        <p>J5 is our internal Operational System that is built to streamline daily operations, track customer history, billing, and other important documents, and enroll new clients onboard with convenience and digital comfort.</p>
    </div>
    <div className='cargo-image'>
<img src="https://jeena.com/wp-content/uploads/2025/02/J5-logo-PNG.png"/>
    </div>
</section>
{/* Jeena 24 x 7 */}
<section className='sustainable-section '>
<div className='sustainable-image'>
    <img src='https://jeena.com/wp-content/uploads/2025/02/Jeena-247.png' alt='image'/> 
</div>
<div className='sustainable-content'>
    <h2>Jeena 24 x 7
</h2>
<p>The customer portal Jeena 24 x 7 is our futuristic step to digitalize the way our customers download bills of lading and receipts, upload their essential documents, and track and trace their shipments from anywhere, anytime.

</p>
<p>Jeena & Company offers a customer-centric digital app and web for a simplified logistics experience. This software is designed to eliminate the complexity of booking shipments for our global customers. Jeena 24 x 7 renders streamlined end-to-end services including booking, cancellation, real-time tracking and tracing, document management, and much more.

</p>
</div>
</section>

{/* value added service */}
<section className="vas-section" ref={sectionRef}>

      <div className="vas-heading">
        <h2>Value Added Services</h2>

        <p>
          With our state-of-the-art infrastructure, facility, and
          value-added services, Jeena Criticare Logistics ensures the
          integrity of your sensitive cargo throughout its journey.
        </p>
      </div>

      <div className="vas-grid">

        {services.map((service, index) => (
          <div
            className="vas-card"
            key={index}
            style={{
              "--delay": `${index * 0.08}s`,
            }}
          >

            <div className="vas-image">
              <img
                src={service.image}
                alt={service.title}
              />
            </div>

            <h3>{service.title}</h3>

          </div>
        ))}

      </div>

    </section>
    {/* laptop */}
    <section className='sustainable-section '>
<div className='sustainable-image'>
    <img src='https://images.pexels.com/photos/8424478/pexels-photo-8424478.jpeg' alt='image'/> 
</div>
<div className='sustainable-content'>
    <h2>Warehouse Management System
</h2>
<p>Our warehouse management system is built and designed with a customer-centric approach. The WMS offers an efficient, reliable, and secure solution to track and manage your stock inventory seamlessly. Jeena offers customers a real-time app to track and trace inventory, download customized reports, and secure access to your data.</p>

</div>
</section>

{/* criticare  */}
<section className="criticare-section">
  <div className="criticare-container">
  {/* left */}
  <div className="criticare-content">
    <h1>Jeena criticare Portal</h1>
    <p>Our warehouse management system is built and designed with a customer-centric approach. The WMS offers an efficient, reliable, and secure solution to track and manage your stock inventory seamlessly. Jeena offers customers a real-time app to track and trace inventory, download customized reports, and secure access to your data.</p>
    <a href="#" className="google-play-link"><img src=" https://jeena.com/wp-content/uploads/2024/10/Frame-1686560341.png"/></a>
  </div>
{/* right image */}
<div className="criticare-image">
  <img src= "https://jeena.com/wp-content/uploads/2024/11/image-109.png" />
</div>
</div>
</section>
{/* last  */}
<section className='sustainable-section '>
<div className='sustainable-image'>
    <img src='https://jeena.com/wp-content/uploads/2024/11/image-131.jpg' alt='image'/> 
</div>
<div className='sustainable-content'>
    <h2>SAP (Schnellecke App)

</h2>
<p>Our warehouse management system is built and designed with a customer-centric approach. The WMS offers an efficient, reliable, and secure solution to track and manage your stock inventory seamlessly. Jeena offers customers a real-time app to track and trace inventory, download customized reports, and secure access to your data.</p>
</div>
</section>


</>
  )
}

export default Digital
