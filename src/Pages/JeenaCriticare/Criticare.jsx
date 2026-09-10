import React, { useEffect, useState, useRef } from 'react'
import './Criticare.css'
import Newblog from '../FooterBlog/Newblog'
import Value from '../ValueAddedService/Value'


// ==========================================
// COUNTER COMPONENT
// ==========================================

const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const element = document.getElementById(`counter-${end}`)

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)

          // Ek baar count hone ke baad dobara observe nahi karega
          observer.disconnect()
        }
      },
      {
        threshold: 0.4,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [end])

  useEffect(() => {
    if (!start) return

    let startTime = null

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      )

      const currentCount = Math.floor(progress * end)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [start, end, duration])

  return (
    <span id={`counter-${end}`}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}


// ==========================================
// SCROLL ANIMATION WRAPPER
// direction="down" => upar se aayega (slide down)
// direction="up"   => neeche se aayega (slide up)
// ==========================================

const AnimateOnScroll = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${direction} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}


// ==========================================
// MAIN COMPONENT
// ==========================================

const Criticare = () => {
  return (
    <>
      {/* =====================================
          CONTRACT / HERO SECTION - upar se
      ===================================== */}

      <AnimateOnScroll direction="down">
        <section className="contract-page">

          {/* LEFT */}
          <div className="contract-left">

            <div className="contract-overlay"></div>

            <div className="contract-content">

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
          <div className="contract-form-box">

            <h2>
              Need help with storage space?
            </h2>

            <p>
              Contact our Contract logistics experts
            </p>


            <form>

              {/* ROW 1 */}
              <div className="form-row">

                <input
                  type="text"
                  placeholder="Company Name*"
                />

                <input
                  type="text"
                  placeholder="Contact Person*"
                />

              </div>


              {/* ROW 2 */}
              <div className="form-row">

                <input
                  type="email"
                  placeholder="Email*"
                />

                <input
                  type="tel"
                  placeholder="Phone No*"
                />

              </div>


              {/* ROW 3 */}
              <div className="form-row">

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


              {/* TEXTAREA */}
              <textarea
                placeholder="More information*"
              ></textarea>


              {/* AGREEMENT */}
              <label className="agreement">

                <input type="checkbox" />

                <span>
                  I agree to the Terms of Service and Privacy Policy
                </span>

              </label>


              {/* BUTTON */}
              <button type="submit">
                Submit
              </button>

            </form>

          </div>

        </section>
      </AnimateOnScroll>


      {/* =====================================
          MOVING SHIPMENT / ABOUT SECTION - neeche se
      ===================================== */}

      <AnimateOnScroll direction="up">
        <section className="moving-shipment">

          {/* LEFT IMAGE */}
          <div className="shipment-image">

            <img
              src="https://images.pexels.com/photos/33537946/pexels-photo-33537946.jpeg"
              alt="Temperature controlled shipment"
            />

          </div>


          {/* RIGHT CONTENT */}
          <div className="shipment-content">

            <h2>
              Moving Time &<br />
              Temperature Shipments
              <br />
              with Speed and Precision
            </h2>


            <p>
              We specialize in providing tailored logistics services that
              prioritize safety, reliability, and compliance. Our state-of-the-art
              facilities, coupled with advanced temperature-controlled storage and
              transportation infrastructure, ensure the integrity of your sensitive
              cargo throughout its journey. From stringent regulatory compliance to
              specialized handling protocols, we guarantee the highest standards
              of quality and care for every shipment. Jeena Criticare Logistics is
              the domestic healthcare arm of Jeena & Company.
            </p>

          </div>

        </section>
      </AnimateOnScroll>


      {/* =====================================
          COUNTING SECTION - upar se
      ===================================== */}

      <AnimateOnScroll direction="down">
        <section className="criticare-stats">


          {/* =================================
              12+
          ================================= */}

          <div className="stat-box">

            <div className="stat-icon">
              ★
            </div>

            <h3>
              <Counter
                end={12}
                suffix="+"
                duration={2000}
              />
            </h3>

            <p>
              Years of Expertise
            </p>

          </div>


          {/* =================================
              25,000+
          ================================= */}

          <div className="stat-box">

            <div className="stat-icon">
              🚚
            </div>

            <h3>
              <Counter
                end={25000}
                suffix="+"
                duration={2000}
              />
            </h3>

            <p>
              Shipments per month
            </p>

          </div>


          {/* =================================
              700+
          ================================= */}

          <div className="stat-box">

            <div className="stat-icon">
              🏢
            </div>

            <h3>
              <Counter
                end={700}
                suffix="+"
                duration={2000}
              />
            </h3>

            <p>
              Metro Cities & Towns
            </p>

          </div>


          {/* =================================
              365 (24×7)
          ================================= */}

          <div className="stat-box">

            <div className="stat-icon">
              24/7
            </div>

            <h3>
              <Counter
                end={365}
                suffix=" (24×7)"
                duration={2000}
              />
            </h3>

            <p>
              Days Operational
            </p>

          </div>


        </section>
      </AnimateOnScroll>

      {/* ================= MANAGE YOUR SUPPLY CHAIN - neeche se ================= */}

      <AnimateOnScroll direction="up">
        <section className="supply-chain-section">

          <h2>Manage Your Supply Chain</h2>

          <div className="supply-chain-image">
            <img
              src="https://jeena.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-08-at-12.35.04_902fe291.jpg"
              alt="Manage Your Supply Chain"
            />
          </div>

        </section>
      </AnimateOnScroll>

      {/*  certificate - upar se */}

      <AnimateOnScroll direction="down">
        <section
          className="certificate-sections"

        >
          <div className='certificate-containers'>
            <div className='certificate-headings'>
              <h2>Certification and Affiliated Trade Bodies</h2>
              <p>our commitment to Excellence</p>
            </div>
            <div className='certificate-cards'>
              {/* card 1 */}
              <div className='certificate-logos'>
                <img src="https://jeena.com/wp-content/uploads/2024/10/icon_1.png" alt="" />
              </div>
              <h3>International Organization  <br /> for Standardization</h3>
            </div>
            {/* 2 */}
            <div className='certificate-cards'>
              <div className='certificate-logos'>
                <img src="https://jeena.com/wp-content/uploads/2024/10/icon_2.png" alt="" />
              </div>
              <h3>The international air
          <br /> transport Association
        </h3>
            </div>
            {/* 3 */}
            <div className='certificate-cards'>
              <div className='certificate-logos'>
                <img src="https://jeena.com/wp-content/uploads/2024/10/icon_4.png" alt="" />
              </div>
              <h3>International Federation of  <br /> freight forwarders</h3>
            </div>
            {/*4  */}
              <div className='certificate-cards'>
              <div className='certificate-logos'>
                <img src="https://jeena.com/wp-content/uploads/2024/10/icon_3.png" alt="" />
              </div>
              <h3>Federation of Freight
          <br /> Forwarders Assn. In India
        </h3>
            </div>
            {/* 5 */}
              <div className='certificate-cards'>
              <div className='certificate-logos'>
                <img src="https://jeena.com/wp-content/uploads/2024/10/icon_7.png" alt="" />
              </div>
              <h3>World cargo <br /> alliance</h3>
            </div>
            {/* 6 */} 
              <div className='certificate-cards'>
              <div className='certificate-logos'>
                <img src="https://jeena.com/wp-content/uploads/2025/09/G7N-Logo.jpg" alt="" />
              </div>
              <h3>G7N Network </h3>
            </div>
            {/* 7 */}
              <div className='certificate-cards'>
              <div className='certificate-logos'>
                <img src="https://jeena.com/wp-content/uploads/2024/10/icon_9.png" alt="" />
              </div>
              <h3>Air cargo forum  <br />India</h3>
            </div>
            {/* 8 */}
              <div className='certificate-cards'>
              <div className='certificate-logos'>
                <img src="https://jeena.com/wp-content/uploads/2024/10/icon_8.png" alt="" />
              </div>
              <h3>Air Cargo agent<br />Association of India</h3>
            </div>
            {/* 9 */}
              <div className='certificate-cards'>
              <div className='certificate-logos'>
                <img src="https://jeena.com/wp-content/uploads/2026/06/AEO_logo.png" alt="" />
              </div>
              <h3>AEO Certificates </h3>
            </div>
            {/* 10 */}
              <div className='certificate-cards'>
              <div className='certificate-logos'>
                <img src="https://jeena.com/wp-content/uploads/2026/07/image-29.png" alt="" />
              </div>
              <h3>TIACA Certificates</h3>
            </div>
            {/* 11 */}
              <div className='certificate-cards'>
              <div className='certificate-logos'>
                <img src="https://jeena.com/wp-content/uploads/2024/10/icon_6.png" alt="" />
              </div>
              <h3>Custom House  <br /> agent</h3>
            </div>
            {/* 12 */}
              <div className='certificate-cards'>
              <div className='certificate-logos'>
                <img src="https://jeena.com/wp-content/uploads/2024/10/icon_5.png" alt="" />
              </div>
              <h3>Goods and services  <br />tax</h3>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <Newblog/>
      <Value/>
    </>
  )
}


export default Criticare;