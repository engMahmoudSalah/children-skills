import React from "react";
import "./error.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Error = () => {
  return (
    <div className="Error">
      <div className="d-error">
        <h1>404</h1>{" "}
        <p>يوجد خطا في ادخال الصفحة</p>
        <Link to="/">
          {" "}
          <button>الصفحة الرئيسية </button>
        </Link>{" "}

      </div>
      <Footer />
    </div>
  );
};

export default Error;
