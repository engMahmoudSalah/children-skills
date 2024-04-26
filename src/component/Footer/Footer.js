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
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                commodo pretium nunc, ut commodo.
              </p>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                commodo pretium nunc, ut commodo.
              </p>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                commodo pretium nunc, ut commodo.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="h4"> اتصل بنا </h4>
            <div className="list-unstyled1">
              <li className="li">
                <i className="fa fa-envelope i"></i> mmss1001101@gmail.com
              </li>
              <li className="li">
                <i className="fa fa-phone i"></i> + 0102 242 0372{" "}
              </li>
              <li className="li">
                <i className="fa fa-map-marker i"></i> agazig university,
                Egypt
              </li>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="h4"> تابعنا</h4>
            <div className="list-unstyled2">
              <li className="li">
                <a href="#">
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
                    &copy; 2024 Faculty Of Science. All Rights Reserved.
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
