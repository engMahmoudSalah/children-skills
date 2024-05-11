import React from "react";
import "./footer.css"; // Import your CSS file for styling
import Rays from "../sub component/Rays/Rays";
import img1 from "../../img2/logo1.png";
import img2 from "../../img2/logo2.png";

const Footer = () => {
  return (
    <footer className="Footer">
      {/* <Rays /> */}

      <div className="container">
        <div className="column1">
          <div className="col-md-4">
            <h4 className="h4"> من نحن </h4>
            <div className="list-unstyled1">
              <p style={{direction:'ltr'}} className="p">
              :  كلية علوم ذوي الإعاقة والتأهيل قسم اضطراب التوحد
              </p>

              <p className="p"> الاخصائية / الشيماء شرقاوي محمد</p>
              <p className="p"> الاخصائية / الاء محمد فتحي محمد</p>
              <p className="p"> الاخصائية / مريم السيد سالم</p>
              <p className="p"> الاخصائية / اية عماد السيد</p>
              <p className="p"> الاخصائية / رهاد جمال محمد</p>
              <p className="p"> الاخصائية / الاء رضا زكي</p>
              
              
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="h4"> اتصل بنا </h4>
            <div className="list-unstyled1">
              {/* <li  className="li">
                <i className="fa fa-envelope i"></i> science@zu.edu.eg
              </li>
              <li style={{direction:'ltr'}} className="li">
              055 2303252{" "}
                 <i className="fa fa-phone i"></i>
              </li> */}
              <li className="li">
                <i className="fa fa-map-marker i"></i>  جامعة الزقازيق ,
                مصر
              </li>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="h4"> تابعنا</h4>
            <div className="list-unstyled2">
              <li className="li">
                <a href="https://www.facebook.com/groups/706464223561493/?ref=share&mibextid=NSMWBT">
                  <i className="fa fa-facebook i"></i>
                </a>
              </li>
              {/* <li className="li">
                <a href="#">
                  <i className="fa fa-twitter i"></i>
                </a>
              </li> */}
              {/* <li className="li">
                <a href="#">
                  <i className="fa fa-instagram i"></i>
                </a>
              </li> */}
              <li className="li">
                <img className="img" height={90} src={img1} />
                &nbsp;&nbsp;
                <img className="img" height={90} src={img2} />
              </li>
            </div>
          </div>
        </div>

        <div className="column2">
          <div className="bottom-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p className="text-center">
                    &copy; 2024 كلية علوم ذوي الإعاقة والتأهيل. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
