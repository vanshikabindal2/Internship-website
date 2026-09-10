import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "Why choose Jeena as my global logistics company?",
    answer:
      "With 125 years of experience, Jeena & Company is a beacon of service excellence, operating across 6 continents and 60 countries. We leverage a vast global network to provide tailored logistics solutions for diverse industries.",
  },

  {
    question: "What end-to-end supply chain solutions does Jeena offer?",
    answer:
      "Jeena provides complete end-to-end supply chain solutions including transportation, warehousing, freight forwarding, customs clearance and logistics management.",
  },

  {
    question: "How do you track international freight forwarding services?",
    answer:
      "Our international freight forwarding services provide shipment tracking and visibility, allowing customers to monitor their shipments throughout the transportation process.",
  },

  {
    question: "How can your 3PL warehousing services optimise my inventory?",
    answer:
      "Our 3PL warehousing solutions help businesses manage inventory efficiently, reduce storage costs and improve order fulfilment through better inventory visibility.",
  },

  {
    question: "Does Jeena provide reliable customs clearance services?",
    answer:
      "Yes, Jeena provides customs clearance support to help ensure shipments comply with customs regulations and move smoothly across international borders.",
  },

  {
    question: "Do you offer pharma air freight solutions?",
    answer:
      "Yes, we provide specialised pharma air freight solutions designed for the safe and timely transportation of pharmaceutical and temperature-sensitive products.",
  },

  {
    question: "Can Jeena act as my multimodal transport operator?",
    answer:
      "Jeena provides best-in-class integrated logistics solutions by combining various modes such as rail, road, air and ocean. This approach ensures your cargo reaches its destination via the most efficient and cost-effective routes.",
  },

  {
    question: "Do you handle door-to-door international shipping?",
    answer:
      "We focus on on-time delivery directly to your doorstep with the utmost care. We even facilitate cross-border celebrations for the global Indian diaspora through international festive delivery services.",
  },

  {
    question: "How does Jeena manage project cargo logistics?",
    answer:
      "Jeena delivers specialised project cargo logistics, expertly moving oversized and heavy-lift shipments across global boundaries. Our experienced team combines industry expertise with precision planning to handle complex industrial equipment and machinery safely and efficiently. With a focus on end-to-end solutions, compliance, and reliability, Jeena ensures every project cargo movement adds value to your supply chain—making us the trusted partner for industries like energy, construction, and manufacturing.",
  },

  {
    question: "Do you provide automotive supply chain management?",
    answer:
      "Yes, we deliver specialised solutions for high-stakes sectors like Pharmaceuticals, Automotive, Projects, Defence, Retail and many more. For Defence and automotive clients, we provide high-level security and real-time tracking for high-value parts to ensure they are always in safe hands.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <section className="faq-section">

      {/* ================= TITLE ================= */}
      <h1 className="faq-title">
        Frequently Asked
        <br />
        Question
      </h1>

      {/* ================= FAQ CONTAINER ================= */}
      <div className="faq-container">

        {faqData.map((item, index) => (
          <div
            className={`faq-item ${
              openIndex === index ? "active" : ""
            }`}
            key={index}
          >

            {/* QUESTION */}
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              <span className="faq-question-text">
                {item.question}
              </span>

              {/* ARROW */}
              <span
                className={`faq-arrow ${
                  openIndex === index ? "rotate" : ""
                }`}
              >
                ⌄
              </span>
            </div>

            {/* ANSWER */}
            <div
              className={`faq-answer ${
                openIndex === index ? "show" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Faq;