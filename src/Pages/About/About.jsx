import React from 'react'
import { useEffect } from 'react'
import './About.css'
const About = () => {

  useEffect(() => {

    const animatedElements = document.querySelectorAll(
      '.legacy-container, .history-image-wrapper, .history-content, .people-intro, .people-group, .person-card, .group-heading, .group-image-wrapper, .certificate.heading, .certificate-card'
    )

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add('is-visible')

            observer.unobserve(entry.target)

          }

        })

      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -70px 0px'
      }
    )

    animatedElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }

  }, [])
  return (
    <div>
      <main className='about-page'>
        <section className='about-hero'>
            <img src="https://images.unsplash.com/photo-1758691737387-a89bb8adf768?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='about-hero-image' alt="" />
            <div className='about-hero-overlay'> </div>
                <div className='about-hero-content'>
                    <span className='hero-label'> Company</span>
                    <h1>About Jeena Company</h1>
                    <p>Connecting businesses to the world through reliable logistics, seamless transportation, smart supply chain solutions, and efficient freight services—helping companies move products faster, reach new markets, and grow with confidence.
</p>
                </div>
           
        </section>
        {/* tapestry  */}
        <section className='legacy-section'> 
          <div className='legacy-container'>
            <div className='legacy-logo-wrapper'>
              <img src="https://jeena.com/wp-content/uploads/2025/01/FINAL_125-Logo-with-Tagline.png" className='legacy-logo' alt="" />
            </div>
            <div className='legacy-small-title'>
              Generations of Trust
            </div>
            <h2>Tapestry of legacy</h2>
            <p>In the year 1900, the world was a vastly different place. Steam engines belched plumes of coal, and cargo traveled through horse-driven carriages. It was in this era that Jeena & Company began its voyage. Our seasoned captains have navigated through eras, steering us to the shores of success. We don’t count our years; we count the wisdom we’ve accrued, the challenges we’ve overcome, and the partnerships we’ve forged.

</p>
<p>Today, our state-of-the-art technologies and pragmatic solutions transform logistics into symphonies of optimization. Our logistics architects craft solutions that resonate with the needs of the modern world, ensuring that every path we illuminate is one where promises are kept, deadlines are met, and expectations are not just met—they’re surpassed.

</p>
          </div>
        </section>


        {/* our purpose */}
        <section className='history-section'>
<div className='history-container'>
{/* left */}
<div className='history-image-wrapper'>
  <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='history-image' alt="" />
</div>

{/* right */}
<div className='history-content'>
  <span className='history-label'>OUR PURPOSE</span>
  <p>
We exist to empower our partners to reach every opportunity by reimagining supply chains through innovative logistics solutions. We connect businesses, markets, and communities with smarter, faster, and more reliable transportation, creating seamless movement and enabling sustainable growth.
</p>
</div>
</div>
        </section>

        {/* OUR PEOPLE */}
        <section className='people-section'>
          <div className='people-intro'>
            <span className='section-label'>OUR PEOPLE</span>
            <h2>OUR PEOPLE:The Pillars</h2>
            <p>At Jeena & Company, we believe that our greatest assets are not the ships that sail across oceans, nor the planes that soar through skies, but the people who make it all happen. Our triumphs are sculpted by the dedication and expertise of our pillars—the Logistics Architects. Let us introduce you to the visionaries who navigate the complex world of logistics with finesse and precision.

</p>
          </div>
<div className='people-group'>
  <h3>4th Generation of the Founding Family</h3>
  <div className='people-grid'>
    {/* 1 */}
    <div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2024/11/Frame-1686560527.jpg" alt="" />
      <div className='person-info'>
        <h4>Cyrus Katgara</h4>
        <p>Partner</p>
      </div>
    </div>
{/* 2 */}
<div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2024/11/image-106.jpg" alt="" />
      <div className='person-info'>
        <h4>Sam Katgara</h4>
        <p>Partner</p>
      </div>
    </div>
    {/* 3 */}
    <div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2024/11/Frame-1686560527-1.jpg" alt="" />
      <div className='person-info'>
        <h4>Homi Katgara</h4>
        <p>Partner</p>
      </div>
    </div>

  </div>

</div>

{/* management  */}
<div className='people-group'>
  <h3>Mangement Comnmittee</h3>
  <div className='people-grid'>
    <div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2025/07/Frame-2.jpg" alt="" />
      <div className='person-info'>
        <h4>Prediman Koul
</h4>
        <p>CEO</p>
      </div>
    </div>
    {/* 2 */}
    <div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2025/07/Frame-1.jpg" alt="" />
      <div className='person-info'>
        <h4>Gayomard Driver</h4>
        <p>Executive Director & Group CFO</p>
      </div>
    </div>
    {/* 3 */}
    <div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2024/11/image-106.jpg" alt="" />
      <div className='person-info'>
        <h4>Sam Katgara</h4>
        <p>Partner</p>
      </div>
    </div>
    {/* 4 */}
    <div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2025/07/Edited_Hector-Pic-1.jpg" alt="" />
      <div className='person-info'>
        <h4>Hector Patel</h4>
        <p>COO Sea Freight</p>
      </div>
    </div>
    {/* 5 */}
    <div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2025/07/Malcolm-Pic.jpg" alt="" />
      <div className='person-info'>
        <h4>Malcolm Dsouza</h4>
        <p>COO Air Freight</p>
      </div>
    </div>
    {/* 6 */}
    <div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2026/03/Frame-1820594795.png" alt="" />
      <div className='person-info'>
        <h4>Sameer Mistry</h4>
        <p>Group - Chief Information Officer</p>
      </div>
    </div>
    {/* 7 */}
    <div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2026/03/Frame-1820594794.png" alt="" />
      <div className='person-info'>
        <h4>Agnelo Dlima
</h4>
        <p>CSMO
</p>
      </div>
    </div>

  
  </div>
</div>

{/* 5th generation */}
<div className='people-group'>
  <h3>5th Generation </h3>
  <div className='people-grid'>
    {/* 1 */}
       <div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2024/11/Frame-1686560527-2.jpg" alt="" />
      <div className='person-info'>
        <h4>Ayesha Katgara</h4>
        <p>Head Transformation Office</p>
      </div>
    </div>
    {/* 2 */}
       <div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2026/03/Frame-1820594795.png" alt="" />
      <div className='person-info'>
        <h4>Nari Katgara</h4>
        <p>Country Development Manager</p>
      </div>
    </div>
    {/* 3 */}
    <div className='person-card'>
      <img src="https://jeena.com/wp-content/uploads/2024/11/Frame-1686560527-4.jpg" alt="" />
      <div className='person-info'>
        <h4>Jeh Katgara</h4>
        <p>Manager, Operations</p>
      </div>
    </div>
  </div>
</div>
        </section>

{/* our group */}
<section className='group-section'>
  <div className='group-container'>
    <div className='group-heading'>
      <span>OUR Group,Multiple Possibilities</span>
      <p>Jeena and Company has grown into a diverse group with business. spanning logistics, healthcare, travel, warehousing and realstate</p>
    </div>
    <div className='group-image-wrapper'>
      <img src="https://jeena.com/wp-content/uploads/2025/02/Group-of-Companies_Jeena-125-updated.jpg" alt="jeena and company" className='group-image' />
    </div>
  </div>
</section>

{/*  certificate */}

<section className='certificate-section'>
  <div className='certificate-container'>
    <div className='certificate heading'>
      <h2>Certification and Affiliated Trade Bodies</h2>
      <p>our commitment to Excellence</p>
    </div>
    <div className='certificate-card'>
      {/* card 1 */}
      <div className='certificate-logo'>
        <img src="https://jeena.com/wp-content/uploads/2024/10/icon_1.png" alt="" />
      </div>
      <h3>International Organization  <br /> for Standardization</h3>
    </div>
    {/* 2 */}
    <div className='certificate-card'>
      <div className='certificate-logo'>
        <img src="https://jeena.com/wp-content/uploads/2024/10/icon_2.png" alt="" />
      </div>
      <h3>The international air
  <br /> transport Association
</h3>
    </div>
    {/* 3 */}
    <div className='certificate-card'>
      <div className='certificate-logo'>
        <img src="https://jeena.com/wp-content/uploads/2024/10/icon_4.png" alt="" />
      </div>
      <h3>International Federation of  <br /> freight forwarders</h3>
    </div>
    {/*4  */}
      <div className='certificate-card'>
      <div className='certificate-logo'>
        <img src="https://jeena.com/wp-content/uploads/2024/10/icon_3.png" alt="" />
      </div>
      <h3>Federation of Freight
  <br /> Forwarders Assn. In India
</h3>
    </div>
    {/* 5 */}
      <div className='certificate-card'>
      <div className='certificate-logo'>
        <img src="https://jeena.com/wp-content/uploads/2024/10/icon_7.png" alt="" />
      </div>
      <h3>World cargo <br /> alliance</h3>
    </div>
    {/* 6 */} 
      <div className='certificate-card'>
      <div className='certificate-logo'>
        <img src="https://jeena.com/wp-content/uploads/2025/09/G7N-Logo.jpg" alt="" />
      </div>
      <h3>G7N Network </h3>
    </div>
    {/* 7 */}
      <div className='certificate-card'>
      <div className='certificate-logo'>
        <img src="https://jeena.com/wp-content/uploads/2024/10/icon_9.png" alt="" />
      </div>
      <h3>Air cargo forum  <br />India</h3>
    </div>
    {/* 8 */}
      <div className='certificate-card'>
      <div className='certificate-logo'>
        <img src="https://jeena.com/wp-content/uploads/2024/10/icon_8.png" alt="" />
      </div>
      <h3>Air Cargo agent<br />Association of India</h3>
    </div>
    {/* 9 */}
      <div className='certificate-card'>
      <div className='certificate-logo'>
        <img src="https://jeena.com/wp-content/uploads/2026/06/AEO_logo.png" alt="" />
      </div>
      <h3>AEO Certificates </h3>
    </div>
    {/* 10 */}
      <div className='certificate-card'>
      <div className='certificate-logo'>
        <img src="https://jeena.com/wp-content/uploads/2026/07/image-29.png" alt="" />
      </div>
      <h3>TIACA Certificates</h3>
    </div>
    {/* 11 */}
      <div className='certificate-card'>
      <div className='certificate-logo'>
        <img src="https://jeena.com/wp-content/uploads/2024/10/icon_6.png" alt="" />
      </div>
      <h3>Custom House  <br /> agent</h3>
    </div>
    {/* 12 */}
      <div className='certificate-card'>
      <div className='certificate-logo'>
        <img src="https://jeena.com/wp-content/uploads/2024/10/icon_5.png" alt="" />
      </div>
      <h3>Goods and services  <br />tax</h3>
    </div>
  </div>
</section>
        
      </main>
    </div>
  )
}

export default About
