import React, {Component} from "react";

class Home extends Component{
    render(){
        return(
            <section id="hero" class="d-flex align-items-center">
            <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
              <div class="row">
                <div class="col-lg-8">
                  <h1>NutraMeals</h1>
                  <h2>Your Healthy Food Delivery Partner</h2>
                  <input role="combobox" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category"></input>
                  <div class="btns">
                    <a href="#menu" class="btn-menu animated fadeInUp scrollto">Menu</a>
                    <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Restaurants</a>
                  </div>
                </div>
        
              </div>
            </div>
          </section>
        );
    }
}

export default Home;

