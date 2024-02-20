import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import gitlogo from "../assets/github.png";
import lilogo from "../assets/linkedIn.png";
const Menu = () => {
  return (
    <div className="navbar">
      <div className="menu-container">
        <ul className="nav-links">
          <li>
            <Link
              to="/home"
              className="nav-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="nav-link"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="nav-link"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul className="nav-logo">
          <li>
            <Link
              to="https://github.com/LindEmma"
              className="nav-link"
            >
              <img
                src={gitlogo}
                alt="github-ikon"
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/emma-lind-406770296/"
              className="nav-link"
            >
              <img
                src={lilogo}
                alt="linkedIn-ikon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
