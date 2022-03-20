import React, { Component } from "react";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <section id="hero">
        <div
          style={{
            position: "absolute",
            left: "60%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
          class="container position-relative text-center text-lg-center"
          // data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div class="col-lg-8 font-link">
            <h1
              style={{
                fontFamily: "Rancho",
                fontSize: "6.5em",
                marginBottom: "1rem",
              }}
            >
              NutraMeals
            </h1>

            <h2
              style={{
                fontFamily: "Sedgwick Ave Display",
                fontSize: "2em",
                marginBottom: "1rem",
              }}
            >
              Your Healthy Food Delivery Partner
            </h2>
            <input
              style={{
                width: "600px",
                height: "50px",
                borderRadius: "50px",
                textAlign: "center",
              }}
              role="combobox"
              id="mySearch"
              onkeyup="myFunction()"
              placeholder="Search for restaurant"
              title="Type in a category"
            ></input>
            <div class="btns">
              <a href="#menu" class="btn-menu animated fadeInUp scrollto">
                Menu
              </a>
              <a
                href="#book-a-table"
                class="btn-book animated fadeInUp scrollto"
              >
                Restaurants
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
