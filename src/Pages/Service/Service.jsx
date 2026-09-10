// import React from 'react'
// import "./Service.css"
// import {Link} from "react-router-dom"
// const service=[
//   {number:"01",
//     title: "Air Freight",
//     image:"https://plus.unsplash.com/premium_photo-1661957173884-901e33146e92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description:"Jeena & Company provides fast, secure, and reliable air freight solutions, connecting global destinations with efficient transit, expert handling, real-time visibility, and dependable delivery.",
//   },
//    {number:"02",
//     title: "Sea Freight",
//     image:"https://plus.unsplash.com/premium_photo-1661962278758-d529030366fb?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description: "Jeena & Company delivers reliable sea freight solutions with global coverage, efficient cargo handling, competitive transit options, and seamless end-to-end logistics for businesses worldwide.",
//   },
//    {number:"03",
//     title: "Multimodal",
//     image:"https://jeena.com/wp-content/uploads/2024/10/Frame-1686560625.jpg",
//     description: "Jeena & Company provides seamless multimodal transportation, combining air, sea, road, and to deliver flexible, efficient, cost-effective, and reliable end-to-end logistics solutions.",
//   },
//   {number:"04",
//     title: "Door to Door",
//     image:"https://wimpexlogistics.com/images/door_to_door_delivery_tmb.jpg",
//     description: "Jeena & Company offers seamless door-to-door logistics, managing pickup, transportation, customs, and final delivery with reliability, efficiency, visibility, and complete end-to-end support.",
//   },
//   {number:"05",
//     title: "Projects",
//     image:"https://truckcdn.cardekho.com/in/tata/signa-4825-tk/tata-signa-4825-tk-11573.jpg",
//     description: "Jeena & Company delivers specialized project logistics solutions, managing complex, oversized, and time-sensitive cargo with expert planning, coordination, safe handling, and reliable global transportation.",
//   },
//   {number:"06",
//     title: "Customs Clearance",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIrcjrVrXvQVvxht6tjAWGxt6SSPnxkc9-NI3v0jh9sGMPlpXPV0ZzE0&s=10",
//     description: "Jeena & Company provides efficient customs clearance services, ensuring smooth documentation, regulatory compliance, faster processing, and hassle-free movement of shipments across international borders.",
//   },
  

  
// ]
// const Service = () => {
//   return (
//     <main className='servicess-page'>
//       {/* backgroundvideo */}
//       {/* <video className='services-video' autoplay muted loop playsInline preload='metdata'>
//         <source src="https://pixabay.com/videos/download/video-32052_medium.mp4" type="video/mp4"/>
//       </video> */}
//       <img className='servicess-image' src='https://images.unsplash.com/photo-1703977883249-d959f2b0c1ae?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
//       {/* dark */}
//       <div className='servicess-overlay'></div>
//       <section className='servicess-content'>
//               <span className='servicess-label'>JEENA & COMPANY</span>
//                     <h1>Jeena Services</h1>
//                     <p className='servicess-subtitle'>24/7 service <br />Connecting businesses to opportunities with speed, precision, and trust. </p>
//                     <p className='servicess-description' >Jeena & Company delivers end-to-end logistics solutions designed to keep your business moving. From freight forwarding and customs clearance to warehousing and supply chain management, we provide reliable, technology-driven services tailored to your needs.</p>
//       </section>
//       {/* cards */}
//       <section className='servicess-section'>
//         <div className='service-grid'>
//           {service.map((service)=>(
//             <article className='servicess-card' key={service.number}>
//               <div className='servicess-card-image'>
//                 <img src={service.image} alt={service.title}/>
//               </div>
//               {/* content */}
//               <div className='servicess-card-content'>
//                 <span className='servicess-number'>{service.number}</span>
//                 <h2>{service.title}</h2>
//                 <div className='service-line'>
//                   <p>{service.description}</p>
//                   <Link to='/contact'><button>Talk toExpert</button></Link>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>
//     </main>
//   )
// }

// export default Service
import React, { useEffect, useRef } from 'react'
import "./Service.css"
import {Link} from "react-router-dom"
const service=[
  {number:"01",
    title: "Air Freight",
    image:"https://plus.unsplash.com/premium_photo-1661957173884-901e33146e92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Jeena & Company provides fast, secure, and reliable air freight solutions, connecting global destinations with efficient transit, expert handling, real-time visibility, and dependable delivery.",
  },
   {number:"02",
    title: "Sea Freight",
    image:"https://plus.unsplash.com/premium_photo-1661962278758-d529030366fb?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Jeena & Company delivers reliable sea freight solutions with global coverage, efficient cargo handling, competitive transit options, and seamless end-to-end logistics for businesses worldwide.",
  },
   {number:"03",
    title: "Multimodal",
    image:"https://jeena.com/wp-content/uploads/2024/10/Frame-1686560625.jpg",
    description: "Jeena & Company provides seamless multimodal transportation, combining air, sea, road, and to deliver flexible, efficient, cost-effective, and reliable end-to-end logistics solutions.",
  },
  {number:"04",
    title: "Door to Door",
    image:"https://wimpexlogistics.com/images/door_to_door_delivery_tmb.jpg",
    description: "Jeena & Company offers seamless door-to-door logistics, managing pickup, transportation, customs, and final delivery with reliability, efficiency, visibility, and complete end-to-end support.",
  },
  {number:"05",
    title: "Projects",
    image:"https://truckcdn.cardekho.com/in/tata/signa-4825-tk/tata-signa-4825-tk-11573.jpg",
    description: "Jeena & Company delivers specialized project logistics solutions, managing complex, oversized, and time-sensitive cargo with expert planning, coordination, safe handling, and reliable global transportation.",
  },
  {number:"06",
    title: "Customs Clearance",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIrcjrVrXvQVvxht6tjAWGxt6SSPnxkc9-NI3v0jh9sGMPlpXPV0ZzE0&s=10",
    description: "Jeena & Company provides efficient customs clearance services, ensuring smooth documentation, regulatory compliance, faster processing, and hassle-free movement of shipments across international borders.",
  },
]

const Service = () => {
  const cardRefs = useRef([])

  useEffect(() => {
    // IntersectionObserver: scroll karte waqt jab card viewport me aaye, 'in-view' class add ho
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target) // ek baar animate hone ke baad dobara na chale
          }
        })
      },
      { threshold: 0.15 }
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className='servicess-page'>
      <img className='servicess-image' src='https://images.unsplash.com/photo-1703977883249-d959f2b0c1ae?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <div className='servicess-overlay'></div>
      <section className='servicess-content'>
              <span className='servicess-label'>JEENA & COMPANY</span>
                    <h1>Jeena Services</h1>
                    <p className='servicess-subtitle'>24/7 service <br />Connecting businesses to opportunities with speed, precision, and trust. </p>
                    <p className='servicess-description' >Jeena & Company delivers end-to-end logistics solutions designed to keep your business moving. From freight forwarding and customs clearance to warehousing and supply chain management, we provide reliable, technology-driven services tailored to your needs.</p>
      </section>
      <section className='servicess-section'>
        <div className='service-grid'>
          {service.map((service, index)=>(
            <article
              className='servicess-card'
              key={service.number}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className='servicess-card-image'>
                <img src={service.image} alt={service.title}/>
              </div>
              <div className='servicess-card-content'>
                <span className='servicess-number'>{service.number}</span>
                <h2>{service.title}</h2>
                <div className='service-line'>
                  <p>{service.description}</p>
                  <Link to='/contact'><button>Talk toExpert</button></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Service