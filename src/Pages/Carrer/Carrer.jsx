

import React, { useEffect } from "react";
import "./Carrer.css";
import Business from "../../assets/Business.png";

const Carrer = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="carrer-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="carrer-hero">

        {/* LEFT CONTENT */}
        <div className="carrer-content animate-on-scroll">

        

          <h1>
            Take a flight for an
            <br />
            exciting career in
            <br />
            Logistics with Jeena!
          </h1>

          <p>
            Work with our vibrant 125-year-old legacy logistics brand
            to unravel a journey filled with success, growth, and
            continuous learning.
          </p>

          <button className="opening-btn">
            See Opening
          </button>

        </div>


        {/* RIGHT IMAGE */}
        <div className="carrer-image-wrapper animate-on-scroll">

          <div className="hero-image-glow"></div>

          <img
            src={Business}
            alt="Jeena career"
            className="carrer-image"
          />

        </div>

      </section>


      {/* =====================================================
          OVERVIEW SECTION 1
      ===================================================== */}

      <section className="carrer-overview">

        {/* LEFT */}
        <div className="overview-content animate-on-scroll">

          <span className="section-small-title">
            ABOUT OUR JOURNEY
          </span>

          <h2>
            Overview
          </h2>

          <div className="heading-line"></div>

          <p>
            Welcome to Jeena & Company! We are a logistics and freight
            forwarding brand with a 125 years of expertise and experience.
            Here, we invite you to join and explore the world of logistics –
            the ups and downs of the sea, constant disruption in air and
            adventurous journey beyond boundaries!
          </p>

          <p>
            At Jeena, we have developed a culture of perpetual learning,
            wherein, every day is a chance to dig deeper into logistics
            solutions to experience new challenges.
          </p>

          <p>
            So, if you're ready to embark on this journey with us, buckle up
            and hop on board – because with Jeena, every step of the way
            promises to be fulfilling and leads to success!
          </p>

        </div>


        {/* RIGHT */}
        <div className="overview-image animate-on-scroll">

          <img
            src="https://jeena.com/wp-content/uploads/2024/11/image-19.jpg"
            alt="Jeena office"
          />

          <div className="image-overlay"></div>

        </div>

      </section>


      {/* =====================================================
          OVERVIEW SECTION 2
      ===================================================== */}

      <section className="carrer-overview overview-reverse">

        {/* LEFT IMAGE */}
        <div className="overview-imagee animate-on-scroll">

          <img
            src="https://images.unsplash.com/photo-1670121180530-cfcba4438038?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Jeena team"
          />

          <div className="image-overlay"></div>

        </div>


        {/* RIGHT CONTENT */}
        <div className="overview-content animate-on-scroll">

          <span className="section-small-title">
            GROW • LEARN • ACHIEVE
          </span>

          <h2>
            Life at Jeena
          </h2>

          <div className="heading-line"></div>

          <p>
            At Jeena, every individual is encouraged to learn, explore
            and grow. We believe that a strong organisation is built by
            people who are passionate about what they do.
          </p>

          <p>
            Our environment encourages collaboration, creativity and
            continuous learning while providing opportunities to work
            across different areas of the logistics industry.
          </p>

          <p>
            Join us and become part of a team where every journey,
            challenge and achievement matters.
          </p>

        </div>

      </section>


      {/* =====================================================
          CULTURE SECTION
      ===================================================== */}

      <section className="culture-section">

        <div className="culture-background-glow"></div>

        {/* HEADING */}
        <h2 className="animate-on-scroll">
          Culture@Jeena
        </h2>

        <div className="culture-heading-line"></div>

        {/* DESCRIPTION */}
        <p className="culture-description animate-on-scroll">
          At Jeena & Company, our culture is the most treasured asset.
          We as an organisation offer an exceptional blend of technology
          and innovation, reflecting Jeena's strength and values. We are a
          closely-knit family that greatly emphasises on give-and-take
          relationship built on our honesty and integrity.
        </p>

        <p className="culture-description animate-on-scroll">
          Jeena is known for its solution-oriented approach driven by our
          long-term relationships. We remain adaptable and flexible in an
          ever-changing environment. Our 125 year young legacy is deeply
          rooted in India with a global perspective enabling us to remain
          young, active, harmonious and always ready to meet requirements
          of our diverse clientele.
        </p>


        {/* CULTURE GRID */}
        <div className="culture-grid">


          {/* 1 */}
          <div className="culture-item animate-on-scroll">

            <div className="culture-icon">
              <img
                src="https://jeena.com/wp-content/uploads/2024/11/fi_912278.svg"
                alt="Innovation"
              />
            </div>

            <h3>
              Innovation
            </h3>

          </div>


          {/* 2 */}
          <div className="culture-item animate-on-scroll">

            <div className="culture-icon">
              <img
                src="https://jeena.com/wp-content/uploads/2024/11/wind-1.svg"
                alt="Solution oriented"
              />
            </div>

            <h3>
              Solution-oriented
              <br />
              approach
            </h3>

          </div>


          {/* 3 */}
          <div className="culture-item animate-on-scroll">

            <div className="culture-icon">
              <img
                src="https://jeena.com/wp-content/uploads/2024/11/logistic-2-2.svg"
                alt="Long term relationships"
              />
            </div>

            <h3>
              Long-term
              <br />
              relationships
            </h3>

          </div>


          {/* 4 */}
          <div className="culture-item animate-on-scroll">

            <div className="culture-icon">
              <img
                src="https://jeena.com/wp-content/uploads/2024/11/fi_1581759.svg"
                alt="Young"
              />
            </div>

            <h3>
              We are young
            </h3>

          </div>


          {/* 5 */}
          <div className="culture-item animate-on-scroll">

            <div className="culture-icon">
              <img
                src="https://jeena.com/wp-content/uploads/2024/11/packages-1-2.svg"
                alt="Honesty"
              />
            </div>

            <h3>
              Honesty &
              <br />
              Integrity
            </h3>

          </div>


          {/* 6 */}
          <div className="culture-item animate-on-scroll">

            <div className="culture-icon">
              <img
                src="https://jeena.com/wp-content/uploads/2024/11/Union-12.svg"
                alt="Flexible"
              />
            </div>

            <h3>
              Flexible &
              <br />
              Adaptable
            </h3>

          </div>


          {/* 7 */}
          <div className="culture-item animate-on-scroll">

            <div className="culture-icon">
              <img
                src="https://jeena.com/wp-content/uploads/2024/11/cargo-1-1.svg"
                alt="Young and active"
              />
            </div>

            <h3>
              Remain young
              <br />
              & active
            </h3>

          </div>


          {/* 8 */}
          <div className="culture-item animate-on-scroll">

            <div className="culture-icon">
              <img
                src="https://jeena.com/wp-content/uploads/2024/11/cargo-2.svg"
                alt="Family"
              />
            </div>

            <h3>
              Closely-knit family
              <br />
              of employees
            </h3>

          </div>


          {/* 9 */}
          <div className="culture-item animate-on-scroll">

            <div className="culture-icon">
              <img
                src="https://jeena.com/wp-content/uploads/2024/11/cargo-3.svg"
                alt="Relationships"
              />
            </div>

            <h3>
              Give and take
              <br />
              relationships
            </h3>

          </div>

        </div>


        {/* DOWNLOAD */}
        <div className="culture-download animate-on-scroll">

          <a href="">
            Click here to download the Jeena Culture Doc
          </a>

        </div>

      </section>


      {/* =====================================================
          LIFE @ JEENA
      ===================================================== */}

      <section className="life-section">

        <div className="life-bg-glow"></div>

        {/* HEADER */}
        <div className="life-header">

          <span className="section-small-title animate-on-scroll">
            OUR PEOPLE • OUR MOMENTS
          </span>

          <h2 className="animate-on-scroll">
            Life@Jeena
          </h2>

          <div className="life-heading-line"></div>

          <p className="animate-on-scroll">
            At Jeena, life isn’t just about work; it’s about building
            connections, creating memories, and having a blast along
            the way!
          </p>

          <p className="animate-on-scroll">
            From our annual picnics where we soak up the sun and bond
            over games and laughter, to our lively monthly town halls
            where ideas flow freely and achievements are celebrated,
            there’s never a dull moment.
          </p>

          <p className="animate-on-scroll">
            We cherish our diverse festivals, bringing everyone together
            to share in the joy of cultural traditions. And let’s not
            forget our epic cricket matches, where competitiveness
            meets camaraderie on the field.
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


      {/* =====================================================
          FEATURED JOBS
      ===================================================== */}

      <section className="featured-jobs">

        <div className="featured-job-container animate-on-scroll">

          <span className="jobs-small-title">
            START YOUR JOURNEY
          </span>

          <h2>
            Our Featured Jobs
          </h2>

          <p>
            Explore exciting opportunities and become a part of
            the Jeena family.
          </p>

          <div className="job-buttons">

            <a
              href="https://careers.jeena.com/jeena/"
              target="_blank"
              rel="noopener noreferrer"
              className="job-btn"
            >
              Naukri
            </a>

            <a
              href="https://www.linkedin.com/company/jeena-&-company/jobs/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="job-btn"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Carrer;