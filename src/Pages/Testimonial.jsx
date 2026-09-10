
import React from "react";
import {
  FaQuoteLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Testimonial.css";

const Testimonials = () => {
  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Customer Delight, Our",
      text:
        "Transporting high-value automobile parts requires the highest level of security and care. Jeena has exceeded our expectations in handling our shipments with precision, giving us confidence that our cargo is in safe hands.",
      client: "Automobile Client",
    },

    {
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=500&auto=format&fit=crop",
      title: "Customer Delight, Our",
      text:
        "In the retail industry, logistics costs can quickly add up, but Jeena has helped us optimize our supply chain while reducing expenses. Their team ensures smooth execution, making them an invaluable logistics partner.",
      client: "Retail Client",
    },

    {
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=500&auto=format&fit=crop",
      title: "Customer Delight, Our",
      text: 
        "Thank you for sharing the logger readings. Sincere appreciation from our side for the smooth shipment and timely delivery of our samples. It has always been a pleasure to work with you all.",
      client: "Manufacturing Client",
    },

    {
      image:
        "https://images.unsplash.com/photo-1714974529016-1e0f2dce54c8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Customer Delight, Our",
      text:"Thank you for sharing the logger readings. We sincerely appreciate your support in ensuring the safe and smooth transportation of our healthcare samples. Your timely delivery, careful handling, and consistent service have always given us confidence. It is a pleasure working with your team.",
      client: "Healthcare Client",
    },

    {
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=500&auto=format&fit=crop",
      title: "Customer Delight, Our",
      text:
        "Our shipments are handled with excellent care and professionalism. The team is responsive, reliable and always focused on timely delivery.",
      client: "Pharma Client",
    },

   
  ];

  return (
    <section className="testimonials-section">

      {/* Decorative Arrows */}
      <div className="testimonial-arrows">
        <span>›</span>
        <span>›</span>
      </div>

      {/* Heading */}
      <div className="testimonials-heading">
        <h2>Customer Testimonials</h2>
        <p>Discover what our clients have to say!</p>
      </div>

      {/* Slider */}
      <div className="testimonials-slider-wrapper">

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={25}
          slidesPerView={3}
          loop={true}
          speed={900}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 70,
            },

            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1000: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          className="testimonials-swiper"
        >

          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="testimonial-card">

                {/* Customer Image */}
                <div className="testimonial-image">
                  <img
                    src={item.image}
                    alt={item.client}
                  />
                </div>

                {/* Quote */}
                <div className="testimonial-quote">
                  <FaQuoteLeft />
                </div>

                {/* Content */}
                <div className="testimonial-content">

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="testimonial-client">
                    — {item.client}
                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

        {/* Slider Buttons */}
        <button className="testimonial-prev">
          <FaArrowLeft />
        </button>

        <button className="testimonial-next">
          <FaArrowRight />
        </button>

      </div>

     

    </section>
  );
};

export default Testimonials;

