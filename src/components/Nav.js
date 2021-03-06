import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("mycart") != undefined) {
      let arr = JSON.parse(localStorage.getItem("mycart"));
      setCount(arr.length);
    }
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/enquirylog">
                 Enquiry Log
              </Link>
            </li>
         
          </ul>
        </div>
      </div>
    </nav>
  );
}
