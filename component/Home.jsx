import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src="/assets/jasppingg.jpg"
          class="card-img"
          alt="Background"
          height="550px"
        />
        <div
          class="card-img-overlay d-flex flex-column 
        justify-content-center"
        >
          <div className="container"></div>
          <h5 className="card-title display-3 fw-bolder mb-0">
            NEW SEASON ARRIVALS
          </h5>
          <p className="card-text lead fs-2 ">OUT IN CART NOW</p>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
