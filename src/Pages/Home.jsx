



import React, { useEffect, useState, useRef } from "react";
import {
  FaArrowRight,
  FaTruck,
  FaGlobe,
  FaAward,
  FaUsers,
} from "react-icons/fa";
import "./Home.css";
import Testimonial from "./Testimonial.jsx";
import truck from "../assets/truck.png";
import { Link } from "react-router-dom";
import Certificate from './Certificate/Certificate.jsx';
import Wave from './wave/Wave.jsx'
// ==================================================
// HERO IMAGES
// ==================================================

const images = [
  "https://images.pexels.com/photos/27490332/pexels-photo-27490332.jpeg",

  "https://www.epsilonlogistic.com/theme_epsilon/static/src/images/sea_freight/sub_banner/sh_ell_sea_freight_intro_img_new.webp",

  "https://images.pexels.com/photos/6407537/pexels-photo-6407537.jpeg",

  "https://images.pexels.com/photos/30705537/pexels-photo-30705537.jpeg",

  "https://images.pexels.com/photos/37636327/pexels-photo-37636327.jpeg",

  "https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnU7bhprmTyv0_BlKfAWAhFMWmJ0svv_nZexnO1bnm8lB8zTtxu173ZIE&s=10",

  "https://images.pexels.com/photos/33608252/pexels-photo-33608252.jpeg",

  "https://www.mckinsey.com/~/media/mckinsey/industries/travel%20logistics%20and%20infrastructure/our%20insights/air%20freight%20forwarders%20move%20forward%20into%20a%20digital%20future/air-freight-forwarders-1536x1536-100.jpg",

  "https://images.pexels.com/photos/4481325/pexels-photo-4481325.jpeg",
];
const industries = [
  {
    title: "Automotive",
    image: "https://jeena.com/wp-content/uploads/2024/10/01.svg",
  },
  {
    title: "Chemicals",
    image: "https://jeena.com/wp-content/uploads/2024/10/07.svg",
  },
  {
    title: "Electronics",
    image: "https://jeena.com/wp-content/uploads/2024/10/08.svg",
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
    title: "Pharma",
    image: "https://jeena.com/wp-content/uploads/2024/10/02.svg",
  },
  {
    title: "Retail",
    image: "https://jeena.com/wp-content/uploads/2024/10/03.svg",
  },
  {
    title: "FMCG",
    image: "https://jeena.com/wp-content/uploads/2025/02/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png",
  },
];


// ==================================================
// STAT COUNTER
// ==================================================

const StatCounter = ({
  icon,
  number,
  suffix,
  label,
  delay,
  startCounting,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;

    const duration = 1800;
    const incrementTime = 30;

    const increment = number / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= number) {
        start = number;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [startCounting, number]);

  return (
    <div
      className="stat-item"
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className="stat-icon">
        {icon}
      </div>

      <div className="stat-number">
        {count.toLocaleString()}
        {suffix}
      </div>

      <div className="stat-label">
        {label}
      </div>
    </div>
  );
};


// ==================================================
// HOME COMPONENT
// ==================================================

const Home = () => {
  const statsRef = useRef(null);

  const [startCounting, setStartCounting] = useState(false);

  // ==================================================
  // ACTIVE HERO IMAGE
  // ==================================================

  const [active, setActive] = useState(0);

  // ==================================================
  // WHEEL LOCK
  // ==================================================

  const wheelLock = useRef(false);


  // ==================================================
  // START COUNTER WHEN USER SCROLLS TO STATS
  // ==================================================

  useEffect(() => {
    const section = statsRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);

          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);


  // ==================================================
  // NEXT IMAGE
  // INFINITE LOOP
  // ==================================================

  const nextImage = () => {
    setActive((prev) => {
      return (prev + 1) % images.length;
    });
  };


  // ==================================================
  // PREVIOUS IMAGE
  // INFINITE LOOP
  // ==================================================

  const previousImage = () => {
    setActive((prev) => {
      return (prev - 1 + images.length) % images.length;
    });
  };


  // ==================================================
  // HERO IMAGE WHEEL SCROLL
  // ==================================================

  useEffect(() => {
    const handleWheel = (e) => {
      const visual = document.querySelector(".home-hero-visual");

      if (!visual) return;

      const rect = visual.getBoundingClientRect();

      // Mouse image area ke andar hai ya nahi
      const mouseInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      // Image ke bahar normal page scroll
      if (!mouseInside) return;


      // ==================================================
      // VERTICAL + HORIZONTAL MOVEMENT
      // ==================================================

      const movement =
        Math.abs(e.deltaY) >= Math.abs(e.deltaX)
          ? e.deltaY
          : e.deltaX;


      // Small movement ignore
      if (Math.abs(movement) < 8) return;


      // Already scrolling
      if (wheelLock.current) {
        e.preventDefault();
        return;
      }


      // ==================================================
      // DOWN / RIGHT = NEXT
      // UP / LEFT = PREVIOUS
      // ==================================================

      e.preventDefault();

      wheelLock.current = true;


      if (movement > 0) {
        setActive((prev) => {
          return (prev + 1) % images.length;
        });
      } else {
        setActive((prev) => {
          return (prev - 1 + images.length) % images.length;
        });
      }


      // ==================================================
      // SLOW TRANSITION
      // ==================================================

      setTimeout(() => {
        wheelLock.current = false;
      }, 850);
    };


    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });


    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);


  // ==================================================
  // IMAGE POSITION
  // CIRCULAR / INFINITE POSITION
  // ==================================================

  const getPosition = (index) => {
    const total = images.length;

    let difference = index - active;


    // ==================================================
    // IMPORTANT:
    // LAST IMAGE KE BAAD FIRST IMAGE KO NEAR MANA JAYEGA
    // ==================================================

    if (difference > total / 2) {
      difference -= total;
    }

    if (difference < -total / 2) {
      difference += total;
    }


    // ==================================================
    // CENTER
    // ==================================================

    if (difference === 0) {
      return "main";
    }


    // ==================================================
    // LEFT
    // ==================================================

    if (difference === -1) {
      return "left";
    }


    // ==================================================
    // RIGHT
    // ==================================================

    if (difference === 1) {
      return "right";
    }


    // ==================================================
    // FAR LEFT
    // ==================================================

    if (difference === -2) {
      return "far-left";
    }


    // ==================================================
    // FAR RIGHT
    // ==================================================

    if (difference === 2) {
      return "far-right";
    }


    // ==================================================
    // OTHER IMAGES
    // ==================================================

    return "hidden";
  };


  // ==================================================
  // HOME JSX
  // ==================================================

  return (
    <main className="home-page">


      {/* ==================================================
          HERO SECTION
      ================================================== */}

      <section
        className="home-hero"
        id="home"
      >


        {/* ==================================================
            LEFT CONTENT
        ================================================== */}

        <div className="home-hero-content">

          <div className="hero-top-line">
            <span></span>

            LOGISTICS · SUPPLY CHAIN · INDIA
          </div>


          <h1>
            Connecting India

            <br />

            <span>
              to the world.
            </span>

            <br />

            Creating possibilities.
          </h1>


          <p>
            Delivering smarter logistics solutions that connect
            businesses, industries and people across the globe —
            with reliability, technology and care.
          </p>


          <Link
            to="/service"
            className="hero-btn"
          >
            Explore our services

            <FaArrowRight />
          </Link>

        </div>


        {/* ==================================================
            RIGHT IMAGE SECTION
        ================================================== */}

        <div className="home-hero-visual">


          {/* BACKGROUND GLOW */}

          <div className="hero-glow"></div>


          {/* ==================================================
              IMAGE STACK
          ================================================== */}

          <div className="hero-stack">

            {images.map((image, index) => {
              const position = getPosition(index);

              return (
                <img
                  key={index}
                  src={image}
                  alt={`Logistics ${index + 1}`}
                  className={`hero-stack-img hero-stack-img--${position}`}
                />
              );
            })}

          </div>


          {/* ==================================================
              SLIDER CONTROLS
          ================================================== */}

          <div className="hero-slider-bottom">


            {/* ==================================================
                PREVIOUS BUTTON
            ================================================== */}

            <button
              type="button"
              className="hero-arrow"
              onClick={previousImage}
              aria-label="Previous image"
            >
              ←
            </button>


            {/* ==================================================
                DOTS
            ================================================== */}

            <div className="hero-dots">

              {images.map((_, index) => (
                <span
                  key={index}
                  className={
                    index === active
                      ? "active"
                      : ""
                  }
                  onClick={() => setActive(index)}
                ></span>
              ))}

            </div>


            {/* ==================================================
                NEXT BUTTON
            ================================================== */}

            <button
              type="button"
              className="hero-arrow"
              onClick={nextImage}
              aria-label="Next image"
            >
              →
            </button>


            {/* ==================================================
                NUMBER
            ================================================== */}

            <small>
              {String(active + 1).padStart(2, "0")}

              {" / "}

              {String(images.length).padStart(2, "0")}
            </small>

          </div>


          {/* ==================================================
              SCROLL HINT
          ================================================== */}

          <div className="scroll-hint">
            SCROLL ON IMAGE TO EXPLORE
          </div>


        </div>

      </section>

{/* ship ANIMATION */}

<Wave/>


      {/* ==================================================
          ABOUT US
      ================================================== */}

      <section
        className="about-section"
        id="about"
      >

        <div className="about-container">


          {/* LEFT CONTENT */}

          <div className="about-content">

            <span className="about-label">
              About Us
            </span>


            <h2>
              The perfect logistics Solution
              <br />
              your business ever needs
            </h2>


            <p>
              Jeena & Company, with its venerable 125 years
              of industry experience, stands as a beacon of
              service excellence in the global logistics
              landscape. We provide comprehensive logistics
              solutions tailored to a diverse range of
              industries. Our seasoned professionals leverage
              their deep-rooted experience and knowledge to
              deliver the precise solutions our clients require.
            </p>


            <Link
              to="/about"
              className="know-more-btn"
            >
              Know More

              <FaArrowRight />
            </Link>

          </div>


          {/* RIGHT IMAGE */}

          <div className="about-image-wrapper">

            <img
              src={truck}
              alt="Logistics Truck"
              className="about-truck-image"
            />

          </div>

        </div>

      </section>

{/* map */}

    <section className="global-section">

      <h1>6 Continents 60 Countries</h1>

      <p>
        Jeena &amp; Company, with its venerable 125 years of industry
        experience, stands as a
        <br />
        beacon of service excellence in the global logistics landscape.
      </p>

      <div className="globe-container">
        <img
          src="https://jeena.com/wp-content/uploads/2024/10/pikaso_enhance__none_4K_Standard_r_c_-3-1.png"
          alt="Global Presence"
          className="globe-image"
        />
      </div>

    </section>

      {/* ==================================================
          SERVICES
      ================================================== */}

      <section
        className="services-section"
        id="services"
      >

        <div className="services-container">


          {/* SERVICES HEADING */}

          <span className="about-label">
            Our Services
          </span>


          {/* <h2>
            Complete logistics
            <br />

            <span>
              solutions for your business 
            </span>
            <button className="service-btn">view all</button>
          </h2> */}
<h2>
  Complete logistics
  <br />

  <span className="service-heading-row">
    solutions for your business

    <Link to="/service" className="service-btn">
      <span>view all ↗</span>
    </Link>
  </span>
</h2>

          {/* ==================================================
              SERVICES GRID
          ================================================== */}

          <div className="services-grid">


            {/* CARD 01 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1170&auto=format&fit=crop"
                  alt="Air Freight"
                />

              </div>


              <div className="service-content">

                <span className="service-number">
                  01
                </span>

                <h3>
                  Air Freight
                </h3>

                <p>
                  Fast, secure, and reliable air
                  transportation solutions ensuring
                  your time-sensitive shipments reach
                  destinations quickly, safely, and
                  efficiently.
                </p>

              

              </div>

            </div>


            {/* CARD 02 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src="https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=1170&auto=format&fit=crop"
                  alt="Sea Freight"
                />

              </div>


              <div className="service-content">

                <span className="service-number">
                  02
                </span>

                <h3>
                  Sea Freight
                </h3>

                <p>
                  Cost-effective and reliable ocean
                  shipping solutions designed to handle
                  large-volume cargo efficiently,
                  ensuring safe and timely international
                  deliveries worldwide.
                </p>

               

              </div>

            </div>


            {/* CARD 03 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src="https://sirma.com/public/images/how_modern_technology_is_shaping_multimodal_logistics_6a19df443f.jpg"
                  alt="Multimodal"
                />

              </div>


              <div className="service-content">

                <span className="service-number">
                  03
                </span>

                <h3>
                  Multimodal
                </h3>

                <p>
                  Seamless transportation using multiple
                  modes, combining road, rail, air, and
                  sea to ensure flexible, efficient, and
                  reliable cargo movement.
                </p>

             

              </div>

            </div>


            {/* CARD 04 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src="https://i0.wp.com/godamwale.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-30-at-9.23.01-PM.jpeg?fit=712%2C802&ssl=1"
                  alt="3PL & Warehousing"
                />

              </div>


              <div className="service-content">

                <span className="service-number">
                  04
                </span>

                <h3>
                  3PL & Warehousing
                </h3>

                <p>
                  Efficient third-party logistics and
                  secure warehousing solutions designed
                  to simplify storage, inventory management,
                  order fulfillment, and timely distribution.
                </p>

               

              </div>

            </div>


            {/* CARD 05 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src="https://2.wlimg.com/product_images/bc-full/2024/2/12499293/custom-clearance-documentation-service-1707990447-7295061.jpeg"
                  alt="Custom Clearance"
                />

              </div>


              <div className="service-content">

                <span className="service-number">
                  05
                </span>

                <h3>
                  Custom Clearance
                </h3>

                <p>
                  Fast and reliable customs clearance
                  services ensuring smooth documentation,
                  compliance, and timely movement of your
                  shipments across international borders.
                </p>

              

              </div>

            </div>


            {/* CARD 06 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdoWcQifk0Darn3Qtz88-g9XjTqVo32n4cMEo2tk0D-cmJ12CgH1kxGI&s=10"
                  alt="Door-to-door Logistics"
                />

              </div>


              <div className="service-content">

                <span className="service-number">
                  06
                </span>

                <h3>
                  Door-to-door Logistics
                </h3>

                <p>
                  Reliable end-to-end delivery solutions
                  that handle pickup, transportation,
                  customs, and final delivery directly
                  to your desired destination.
                </p>

             

              </div>

            </div>


            {/* CARD 07 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src="https://truckcdn.cardekho.com/in/ashok-leyland/2820-tipper/ashok-leyland-2820-tipper-70163.jpg?tr=w-456"
                  alt="Projects"
                />

              </div>


              <div className="service-content">

                <span className="service-number">
                  07
                </span>

                <h3>
                  Projects
                </h3>

                <p>
                  Explore our successful logistics
                  projects, showcasing reliable
                  transportation, efficient supply
                  chain management, and customized
                  solutions delivered for businesses.
                </p>

               

              </div>

            </div>


            {/* CARD 08 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsr7IuXUDNYPeWAYlhNC25wWPGrPzGZleHEeckLSzAJQLP9Yd6Mky3i0&s=10"
                  alt="Jeena Criticare"
                />

              </div>


              <div className="service-content">

                <span className="service-number">
                  08
                </span>

                <h3>
                  Jeena Criticare
                </h3>

                <p>
                  Reliable healthcare logistics solutions
                  ensuring secure, timely, and efficient
                  transportation of critical medical
                  supplies and pharmaceutical products.
                </p>

              

              </div>

            </div>


          </div>

        </div>

      </section>

{/* industries */}
<section className="industries-section">
      <div className="industries-container">

        {/* Heading */}
        <div className="industries-header">
          <h2>Industries We Serve</h2>

          <p>
            Jeena &amp; Company stands as a global logistics provider,
            delivering specialized
            <br />
            solutions across various industries, backed by our profound
            industry knowledge
            <br />
            and extensive experience.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-item" key={index}>

              <div className="industry-icon">
                <img
                  src={industry.image}
                  alt={industry.title}
                />
              </div>

              <h3>{industry.title}</h3>

            </div>
          ))}
        </div>

      </div>
    </section>
   <Certificate/>
      {/* ==================================================
          STATISTICS
      ================================================== */}

      <section
        className="stats-section"
        ref={statsRef}
      >

        <div className="stats-container">


          <StatCounter
            icon={<FaTruck />}
            number={40}
            suffix="+"
            label="Million Shipment"
            delay={0.1}
            startCounting={startCounting}
          />


          <StatCounter
            icon={<FaGlobe />}
            number={60}
            suffix="+"
            label="Global Presence"
            delay={0.25}
            startCounting={startCounting}
          />


          <StatCounter
            icon={<FaAward />}
            number={125}
            suffix=""
            label="Years of Experience"
            delay={0.4}
            startCounting={startCounting}
          />


          <StatCounter
            icon={<FaUsers />}
            number={1500}
            suffix="+"
            label="Experts"
            delay={0.55}
            startCounting={startCounting}
          />


        </div>

      </section>


      {/* ==================================================
          TESTIMONIAL
      ================================================== */}

      <Testimonial />
      <section className="life-section">

        <div className="life-bg-glow"></div>

        {/* HEADER */}
        <div className="life-header">

          
          <h2 className="animate-on-scroll">
            Life@Jeena
          </h2>

          <div className="life-heading-line"></div>

          <p className="animate-on-scroll">
            Experience the Jeena Lifestyle!
          </p>

          

        </div>


        {/* LIFE CARDS */}
        <div className="life-cards-container">


          {/* CARD 1 */}
          <div className="life-cards animate-on-scroll">

            <div className="life-image">

              <img
                src="https://jeena.com/wp-content/uploads/2024/10/image-32.jpg"
                alt="Internal Events"
              />

              <div className="life-image-overlay"></div>

            </div>

            <div className="life-card-title">
              <h3>
                Internal Events
              </h3>
            </div>

          </div>


          {/* CARD 2 */}
          <div className="life-cards animate-on-scroll">

            <div className="life-image">

              <img
                src="https://jeena.com/wp-content/uploads/2024/10/image-32-1.jpg"
                alt="Annual Picnics"
              />

              <div className="life-image-overlay"></div>

            </div>

            <div className="life-card-title">
              <h3>
                Annual Picnics
              </h3>
            </div>

          </div>


          {/* CARD 3 */}
          <div className="life-cards animate-on-scroll">

            <div className="life-image">

              <img
                src="https://jeena.com/wp-content/uploads/2024/10/image-32-2.jpg"
                alt="Exhibitions and Conference"
              />

              <div className="life-image-overlay"></div>

            </div>

            <div className="life-card-title">
              <h3>
                Exhibitions & Conference
              </h3>
            </div>

          </div>


          {/* CARD 4 */}
          <div className="life-cards animate-on-scroll">

            <div className="life-image">

              <img
                src="https://jeena.com/wp-content/uploads/2024/10/image-32-3.jpg"
                alt="Sports and Adventure"
              />

              <div className="life-image-overlay"></div>

            </div>

            <div className="life-card-title">
              <h3>
                Sports & Adventure
              </h3>
            </div>

          </div>

        </div>

      </section>


      

    </main>
  );
};


export default Home;

