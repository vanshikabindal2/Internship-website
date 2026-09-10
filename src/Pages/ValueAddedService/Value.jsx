import React, { useEffect, useRef } from "react";
import "./Value.css";

const services = [
  {
    title: "Diagnostic/Pharma",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/pharmacy.svg",
  },
  {
    title: "Air & Surface",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/wind.svg",
  },
  {
    title: "Delivery",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/logistic-2-1.svg",
  },
  {
    title: "Reverse Logistics",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/tracking-2.svg",
  },
  {
    title: "Warehousing & Packaging",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/packages-1-1.svg",
  },
  {
    title: "Late hours Pickup/Delivery",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/g615.svg",
  },
  {
    title: "NFO services for critical shipments",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/cargo-1.svg",
  },
  {
    title: "Tailor-made Solutions",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/solution-1-2.svg",
  },
  {
    title: "Offering Packaging",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/offer.svg",
  },
  {
    title: "Replenishment of Dry Ice",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/cold-1-1.svg",
  },
  {
    title: "Special arrangements",
    image:
      "https://jeena.com/wp-content/uploads/2024/11/airplane-1-1.svg",
  },
];

const Value = () => {
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
  );
};

export default Value;