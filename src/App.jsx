import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import CTA from './components/CTA/CTA.jsx'
import Footer from './components/Footer/Footer.jsx';
import About from './Pages/About/About.jsx'
import Service from './Pages/Service/Service.jsx'
import Media from './Pages/Media/Media.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Blog1 from './Pages/Blogs/Blog1/Blog1.jsx'
import Blog2 from './Pages/Blogs/Blog2/Blog2.jsx'
import Blog3 from './Pages/Blogs/Blog3/Blog3.jsx'
import Carrer from './Pages/Carrer/Carrer.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import Csr from './Pages/Csr/Csr.jsx'
import Warehousing from './Pages/3pl&warehousing/Warehousing.jsx'
import Criticare from './Pages/JeenaCriticare/Criticare.jsx'
import Air from './Pages/AirFreight/Air.jsx'
import Sea from './Pages/SeaFreight/Sea.jsx'
import Project from './Pages/Project/Project.jsx'
import Door from './Pages/Door-to-Door/Door.jsx'
import Custom from './Pages/CustomBrokerage/Custom.jsx'
import Term from './Pages/Term&conditions/Terms.jsx'
import Faq from './Pages/FAQ/Faq.jsx'
import JeenaAustrilla from './Pages/Jeena Austrilla/JeenaAustrilla.jsx'
import Digital from './Pages/Digital-Solution/Digital.jsx'
const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/media" element={<Media/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/customs-clearance" element={<Blog1/>}/>
        <Route path="/blog/freight-forwarders" element={<Blog2/>}/>
        <Route path="/blog/export-customs-clearance" element={<Blog3 />}/>
        <Route path="/carrer" element={<Carrer />}/>
        <Route path='csr' element={<Csr />}/>
        <Route path='/warehousing' element={<Warehousing />} />
        <Route path='/jeena-criticare' element={<Criticare />} />
        <Route path='/airfreight' element={<Air/>} />
        <Route path='/seafreight' element={<Sea/>} />
       <Route path='/project' element={<Project/>} />
              <Route path='/door-to-door' element={<Door/>} />
       <Route path='/custom-brokerage' element={<Custom/>} />
              <Route path='/standard-Terms & conditions of services' element={<Term/>}/>
<Route path="/FAQ's" element={<Faq/>}/>

<Route path="/Jeena-Australia" element={<JeenaAustrilla/>}/>
<Route path='/Digital-Solution' element={<Digital/>}/>


        <Route/>
      </Routes>
      {location.pathname !== "/carrer" &&
        location.pathname !== "/csr" &&
        location.pathname !== "/contact" &&
        <CTA/>}
      <Footer/>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App