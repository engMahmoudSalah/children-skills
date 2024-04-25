
import React , {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Page1 from "./component/Page1/Page1";
import Error from "./component/Error/Error";
import Page2 from "./component/Sec2/Sec2";


function App() {

  // animation
  useEffect(()=> {
    AOS.init({
       // Global settings
        disable: 'mobile', // Disable animations on mobile devices
        startEvent: 'DOMContentLoaded', // Event on which AOS initialization should start
        useClassNames: true, // Add class names to elements to apply AOS animations

        // Animation settings
        offset: 150, // Offset (in px) from the original trigger point
        duration: 1000, // Duration of the animation (in ms)
        easing: 'ease', // Easing function for the animation
        delay: 200, // Delay before the animation starts (in ms)

        // Scroll settings
        once: false, // Whether animation should only happen once
        mirror: true, // Whether elements should animate out while scrolling past them
    });
  },[])

  return (
    <>
      <div className="bg">
        <BrowserRouter>
          
          <Routes>
            <Route path="/" element={<Page1/>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
