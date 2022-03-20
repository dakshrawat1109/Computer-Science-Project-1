import React, { Component } from "react";
import Logo from "../assets/img/NutraMeals-removebg-preview.png";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          {/* <a href="index.html">
            <img src={Logo} alt="" style={logo}></img>
          </a> */}
          <h1 class="logo me-auto me-lg-0"></h1>
          {/*Uncomment below if you prefer to use an image logo
                        <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a
            href="#book-a-table"
            class="book-a-table-btn scrollto d-none d-lg-flex"
          >
            Login
          </a>
        </div>
      </header>
      //End Header
    );
  }
}

export default Header;
