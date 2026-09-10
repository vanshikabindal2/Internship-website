import React from 'react'
import './Media.css'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Media = () => {
  return (
    <div className='media-page'>
        <section className='media-hero'>
    {/* video */}
    {/* <video className='media-hero' autoplay muted loop  playsInline> <source src='/video/video2.mp4' type="video/mp4"/></video> */}
    <video
          className="media-hero"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >

          <source
            src="/video/video2.mp4"
            type="video/mp4"
          />

        </video>

    <div className='media-overlay'></div>
    <div className='media-content'>
        <h1>Beyond <br />Boundaries</h1>
        <div className='media-line'></div>
        <p>We are a team of passionate individuals who are committed to delivering the best possible results for our clients. We believe in pushing the boundaries of what is possible and are always looking for new and innovative ways to solve problems.</p>
    </div>
    </section>

     {/* // overview */}
    <section className='media-overview'>
        {/* left */}
        <div className='ovrview-text'>
            <span className='overview-label'>Overview</span>
            <h2>Delivering Excellence <br />Through Every Connection</h2>
            <p>Unveil the latest media features, thought-provoking blogs, and insightful case studies that showcase Jeena’s expertise in the logistics industry. From new media features to detailed analysis, relish new stories and knowledge sessions daily!</p>

        </div>
        {/* right */}
        <div className='overview-video'>
            <video
          className="media-hero"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >

          <source                  
            src="/video/video.mp4"
            type="video/mp4"
          />

        </video>
        </div>
    </section>

    {/* media-awards */}
    <section className='media-awards'>
        <div className='media-awards-header'>
            <div>
                <h2>Media & Awards</h2>
                <p>The world is talking about Jeena & Company</p>
            </div>
        </div>

        {/* awards/media cards */}
        <div className='media-awards-cards'>
           
        {/*  card 1 */}
        <div className='media-card'>
            <img src='https://images.unsplash.com/photo-1610870596605-d293eaf5a1ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='international logistics'/>
            <div  className='media-card-content'>
                <h3>
Meeting the needs of global Indian diaspora: International festive deliveries forcross-border celebration</h3>
<p className='media-source'>The Financial Express </p>
<span className='media-date'>19-Nov-24</span>
            </div>
        </div>

         {/*  card 2 */}
        <div className='media-card'>
            <img src='https://plus.unsplash.com/premium_photo-1749979042773-e1abfd5dca6b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=' logistics industry'/>
            <div  className='media-card-content'>
                <h3>
Monumental stride in positioning India as logistics powerhouse: Industry</h3>
<p className='media-source'>Business Standard </p>
<span className='media-date'>23-Jul-24</span>
            </div>
        </div>

                 {/*  card 3*/}
        <div className='media-card'>
            <img src='https://plus.unsplash.com/premium_photo-1661394801509-14f324be7f6f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='business standard'/>
            <div  className='media-card-content'>
                <h3>India Inc Confronts Job-Related Stress Amid Rising Casualties</h3>
<p className='media-source'>NDTV Profit </p>
<span className='media-date'>03-Oct-24

</span>
            </div>
        </div>
        
                    </div>

    </section>

    {/* blogs */}
    <section className='blogs-section'>
        <div className='blogs-header'>
            <div>
                <h2>Blogs</h2>
                <p>Your Gateway to All the Insights at Jeena & Company's Blog Hub!</p>
            </div>
            <button className='view-blogs-btn'>View All  Blogs</button>
        </div>
        <div className='blog-cards'>
                    {/* card1 */}
                    <div className='blog-card'>
                        <div className='blog-image'>
                            <img src="https://jeena.com/wp-content/uploads/2025/12/Picture3.png" alt='img'/>
                            <span>Customs Clearance</span>
                        </div>
                        <div className='blog-content'>
                            <h3>Mumbai Customs Clearance Services: A Practical Step-by-.....</h3>
                            <p>Mumbai remains India’s busiest gateway for imports, handling a significant share of the...</p>
                    <Link to='/blog/customs-clearance'> <button  className='knoww more'>Know more <span><FaArrowRight/></span> </button></Link>  

                        </div>
                    </div>
                                        {/* card2 */}
                    <div className='blog-card'>
                        <div className='blog-image'>
                            <img src="https://jeena.com/wp-content/uploads/2025/02/The-Role-of-ULIP-in-Transforming-Indias-Supply-Chain-Landscape.png" alt='img'/>
                            <span>Miscellaneous</span>
                        </div>
                        <div className='blog-content'>
                            <h3>The Role of Freight Forwarders in Streamlining Global Trade...</h3>
                            <p>In the intricate web of global trade, where supply chain efficiency dictates economic resilience, freight forwarders serve as indispensable facilitators....</p>
                <Link to='/blog/freight-forwarders'> <button  className='knoww more'>Know more <span><FaArrowRight/></span> </button></Link>  
                </div>         
                    </div>
                                        {/* card3 */}

                    <div className='blog-card'>
                        <div className='blog-image'>
                            <img src="https://jeena.com/wp-content/uploads/2025/12/Picture2.png" alt='img'/>
                            <span>Customs Clearance</span>
                        </div>
                        <div className='blog-content'>
                            <h3>Export Customs Clearance Charges in Mumbai: What You...</h3>
                            <p>Mumbai continues to be one of India’s most important export gateways, handling a....</p>
                            <Link to='/blog/export-customs-clearance'> <button  className='knoww more'>Know more <span><FaArrowRight/></span> </button></Link>  

                        </div>
                    </div>

        </div>
    </section>
    </div>
    

   
  )
}

export default Media
