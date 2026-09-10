


import React, { useState, useEffect, useRef } from 'react'
import './Csr.css';

const cancerWardImages = [
  "https://jeena.com/wp-content/uploads/2024/11/image-99.jpg",
  "https://jeena.com/wp-content/uploads/2025/02/Masina_01.jpg",
  "https://jeena.com/wp-content/uploads/2025/02/Masina_03.jpg",
  "https://jeena.com/wp-content/uploads/2025/02/Masina_02.png",
]

// ek chota custom hook: element ref deta hai + batata hai ki
// wo viewport me aaya ya nahi (scroll pe bhi, load pe bhi)
function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // agar IntersectionObserver available nahi (bahut purana browser),
    // to seedha true kar do taaki content dikhta rahe
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.unobserve(node)
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options })

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

const Csr = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cancerWardImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + cancerWardImages.length) % cancerWardImages.length)
  }

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % cancerWardImages.length)
  }

  const [heroRef, heroInView] = useInView()
  const [aboutRef1, aboutInView1] = useInView()
  const [initRef, initInView] = useInView()
  const [aboutRef2, aboutInView2] = useInView()
  const [aboutRef3, aboutInView3] = useInView()
  const [aboutRef4, aboutInView4] = useInView()
  const [aboutRef5, aboutInView5] = useInView()
  const [aboutRef6, aboutInView6] = useInView()
  const [aboutRef7, aboutInView7] = useInView()

  return (
    <div className='csr-page'>

      <section ref={heroRef} className={`csr-hero ${heroInView ? 'in-view' : ''}`}>
        <div className='csr-hero-content'>
          <h1>Sailing Towards a <br/>Sustainable Tomorrow</h1>
        </div>
        <div className='csr-hero-image'>
          <img src="https://jeena.com/wp-content/uploads/2024/11/Recycle-1.png"/>
        </div>
      </section>

      {/* about */}
      <section ref={aboutRef1} className={`csr-about ${aboutInView1 ? 'in-view' : ''}`}>
        <div className='csr-about-content'>
          <h2>Every Action We Take Aims to Build a <br/>Better Tomorrow</h2>
          <p>At Jeena & Company, we believe in the power of giving back. Our commitment to Corporate Social Responsibility (CSR) is not just a duty; it's our passion. Through our diverse initiatives, we strive to create a ripple effect of positive change that resonates within communities and beyond. From going paperless and saving electricity by leveraging solar panels to providing educational opportunities and healthcare facilities, every action we take aims to build a better tomorrow.</p>
        </div>
        <div className='csr-about-image'>
          <img src='https://jeena.com/wp-content/uploads/2024/11/image-84.png'/>
        </div>
      </section>

      {/* education */}
      <section ref={initRef} className={`csr-initiatives ${initInView ? 'in-view' : ''}`}>
        <div className='csr-cards'>
          <div className='csr-card'>
            <img src='https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            <div className='csr-card-content'>
              <h3>Education</h3>
              <p>At Jeena, we believe in providing young individuals equal opportunity to quality learning.</p>
            </div>
          </div>
          <div className='csr-card'>
            <img src='https://images.unsplash.com/photo-1727552395647-b2a50b82a4ec?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <div className='csr-card-content'>
              <h3>Animals Welfare</h3>
              <p>Jeena offers impactful animal welfare programs ensuring no animal is left homeless or hungry.</p>
            </div>
          </div>
          <div className='csr-card'>
            <img src='https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <div className='csr-card-content'>
              <h3>Education</h3>
              <p>At Jeena, we believe in providing young individuals equal opportunity to quality learning.</p>
            </div>
          </div>
          <div className='csr-card'>
            <img src='https://images.pexels.com/photos/8688803/pexels-photo-8688803.jpeg'/>
            <div className='csr-card-content'>
              <h3>Mid-day Meal</h3>
              <p>Jeena is offering mid-day meals to combat hunger and foster quality learning with nutritious meals for children.</p>
            </div>
          </div>
          <div className='csr-card'>
            <img src='https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg'/>
            <div className='csr-card-content'>
              <h3>Healthcare</h3>
              <p>Enhancing community well-being through accessible healthcare and wellness initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* sailing */}
      <section ref={aboutRef2} className={`csr-about ${aboutInView2 ? 'in-view' : ''}`}>
        <div className='csr-about-image'>
          <img src='https://jeena.com/wp-content/uploads/2024/11/Frame-1686560858.png'/>
        </div>
        <div className='csr-about-content'>
          <h2>Sailing Towards a<br/>Sustainable Tomorrow</h2>
          <p>We understand that green and sustainable logistics is the way to go. Hence, we are striving to make our operations as paperless as possible. Some of the processes like issuance of bill of lading, post shipping documents, invoices, and receipts are made available for customers on our customer portal.</p>
        </div>
      </section>

      {/* mid day meal project */}
      <section ref={aboutRef3} className={`csr-about ${aboutInView3 ? 'in-view' : ''}`}>
        <div className='csr-about-content'>
          <img src='https://jeena.com/wp-content/uploads/2024/11/image-90.png'/>
          <h2>Mid-day Meal Project</h2>
          <p>The Katgara Foundation's vision of 'No Child In India Shall be Deprived from Education due to Hunger' has propelled them to feed at least 5 million children by 2025. We have been proudly sponsoring the Akshay Patra Foundation and Pragati School to provide underprivileged children mid-day meal to more than 400 underprivileged children daily. We have supported more than 1800 students in Odisha for 6 days a week with good quality food under the Akshay Patra Mid-day meal plan.
          <br/>We take pride in aiding children to fight the scarcity of food and receive their right to education. The Katgara Foundation leads by example by distributing school children's food grains and other essential household commodities. We annually distribute home essentials and food grains to destitute rural families to ensure that no rural family stays without food and essentials.</p>
        </div>
        <div className='csr-about-imagee'>
          <img src='https://jeena.com/wp-content/uploads/2024/11/image-20.jpg'/>
        </div>
      </section>

      {/* mid day meal 2 project */}
      <section ref={aboutRef4} className={`csr-aboutt ${aboutInView4 ? 'in-view' : ''}`}>
        <div className='csr-about-imagee'>
          <img src='https://jeena.com/wp-content/uploads/2024/11/image-92.jpg'/>
        </div>
        <div className='csr-about-contentt'>
          <img src='https://jeena.com/wp-content/uploads/2024/11/ccc267a5d2eadfc65ba12bf40ef7adf9.png'/>
          <h2>Mid-day Meal</h2>
          <p>Since July 2008, The Katgara Foundation has been an integral part of Pragati School, a voluntary organization offering free education to underprivileged children and sponsoring free daily mid-day meal projects for more than 400 children at the Pragati School located in Gurgaon, Haryana. The Katgara Foundation leads by example by distributing school children's food grains and other essential household commodities.
          <br/> We annually distribute home essentials and food grains to destitute rural families to ensure that no rural family stays without food and essentials.</p>
        </div>
      </section>

      {/* Alibaug School */}
      <section ref={aboutRef5} className={`csr-about ${aboutInView5 ? 'in-view' : ''}`}>
        <div className='csr-about-content'>
          <img src='https://jeena.com/wp-content/uploads/2024/11/image-96.png'/>
          <h2>Alibaug School Gets a <br/>Watermaker</h2>
          <p>Our sister concern company, Watermaker recently installed the WaterMaker in Babasaheb Najare High School & Junior College at Awas, Allibaug to educate children on the importance and art of conserving water. The WaterMaker leverages a bespoke technology to make water from Humidity in the air.<br/>This technology has made Jalmudi Village in Andhra Pradesh the first village to receive purified drinking water made out of air.</p>
        </div>
        <div className='csr-about-imagee'>
          <img src='https://jeena.com/wp-content/uploads/2024/11/image-95.jpg'/>
        </div>
      </section>

      {/* Rendering Water */}
      <section ref={aboutRef6} className={`csr-aboutt ${aboutInView6 ? 'in-view' : ''}`}>
        <div className='csr-about-imageee'>
          <img src='https://jeena.com/wp-content/uploads/2024/11/Group-44129.png'/>
        </div>
        <div className='csr-about-content'>
          <h2>Rendering Water Purifier to a <br/>Village</h2>
          <p>Jeena's initiative to contribute healthy and safe drinking water involved non-electrical gravity-based purifiers being distributed to 68 families who have limited access to safe drinking water at a tribal village "Kambhacha Pada" at Aarey Milk Colony at Goregaon in Mumbai.
          <br/> On World Water Day on 22nd March 2018, water purifiers were installed at Nehru Science Centre to provide an uninterrupted supply of clean drinking water to over 3,000 visitors.</p>
        </div>
      </section>

      {/* Katgara Foundation */}
      <section ref={aboutRef7} className={`csr-about ${aboutInView7 ? 'in-view' : ''}`}>
        <div className='csr-about-content'>
          <h2>The Katgara Foundation Supporting Health <br/>Initiatives</h2>
          <p>The Katgara Foundation believes in building a world with better healthcare initiatives. To prompt the cause, the foundation brings together several free eye, cataract eye surgery, and dental check-ups for its employees and underprivileged people in rural areas. The foundation also initiates blood donation camps throughout Pan India branches in association with certified government bodies.</p>
        </div>
        <div className='csr-about-imagee'>
          <img src='https://jeena.com/wp-content/uploads/2024/11/image-95-1.jpg'/>
        </div>
      </section>

      {/* slider */}
      <section className='ccw-section'>
        <div className='ccw-logo'>
          <img src='https://jeena.com/wp-content/uploads/2024/11/Frame-1686560935.png' alt='Masina Hospital Trust' />
        </div>

        <h2 className='ccw-heading'>Building the Foundation of Cancer Ward</h2>

        <p className='ccw-desc'>
          The Katgara Foundation is dedicated to making each life count. We funded a cancer
          ward's construction and renovation at the Masina Hospital, allowing patients to feel
          comfortable around all the world-class facilities and a homely environment during
          their treatment at the hospital. Through this act, the Katgara Foundation reaffirms
          its stand to aid the betterment of healthcare infrastructure to support those in need.
        </p>

        <div className='ccw-slider'>
          <button className='ccw-arrow ccw-arrow-left' onClick={goPrev} aria-label='Previous slide'>
            &#10094;
          </button>

          <div className='ccw-slide-track'>
            <img
              src={cancerWardImages[current]}
              alt={`cancer-ward-slide-${current}`}
              className='ccw-slide-image'
            />
          </div>

          <button className='ccw-arrow ccw-arrow-right' onClick={goNext} aria-label='Next slide'>
            &#10095;
          </button>

          <div className='ccw-dots'>
            {cancerWardImages.map((_, idx) => (
              <span
                key={idx}
                className={`ccw-dot ${idx === current ? 'active' : ''}`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Csr