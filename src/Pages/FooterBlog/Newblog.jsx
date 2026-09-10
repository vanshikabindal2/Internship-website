import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../Media/Media.css'

const Newblog = () => {
  return (
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
  )
}

export default Newblog