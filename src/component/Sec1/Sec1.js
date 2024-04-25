import React, { useEffect } from "react";
import "./Sec1.css";
import Grid from "../sub component/Grid/Grid";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Sec1 = () => {


  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      id="Sec1"
      className=" Sec1 "
    >
      <Grid />
      {/* <Loading /> */}
      <h1>
         بعض مهارات رعاية 
        <span className="text-gardient f-50">  الذات للأطفال ذوي اضطراب</span>
        <p>
          <span className="text-gardient f-65"> التوحد </span>
          <span className="f-65"> </span>
        </p>
      </h1>

    </div>
  );
};

export default Sec1;
