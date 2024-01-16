import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav1">
          <Link to="/home" className="home">
            {/* <span className="trek"></span><br /> */}
            <span className="trailblazer">smartshop</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            Category
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contactus" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/loginform" className="nav-link">
            Signin/Signup
          </Link>
        </li>
        <li className="nav-item cart-icon">
          <Link to="/add" className="nav-link">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
