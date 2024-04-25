import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../img2/logo1.png";
import img2 from "../../img2/logo2.png";

import "./Nav.css";
import { Link } from "react-router-dom";
import Dark from "../Dark";

function NavScrollExample() {
  return (
    <div className="bg-body-trasparent">
        
        <div className="d-logo">
          <img height={50} src={img1} />
          &nbsp;&nbsp;
          <img height={50} src={img2} />
        </div>

        <div className="d-dark-btn">
          <Dark />
        </div>

    </div>
  );
}

export default NavScrollExample;
