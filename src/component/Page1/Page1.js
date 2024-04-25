import React from 'react'
import './Page1.css'
import NavScrollExample from '../Nav/Nav.js';
import Rays from '../sub component/Rays/Rays.js';
import Sec1 from '../Sec1/Sec1.js'
import Sec2 from '../Sec2/Sec2.js'
import ToTop from '../sub component/toTop/ToTop.js';
import Footer from '../Footer/Footer.js';



const Page1 = () => {

    



  return (
    <div id='page1' className='Page1'>
      <NavScrollExample/>
      {/* absoulute items */}
      <Rays/>

      {/* Sections */}
      <Sec1/>
      <Sec2/>
      <Footer/>    
      <a href="#sec1">
      <ToTop/>
      </a>  

      
    </div>
  )
}

export default Page1
