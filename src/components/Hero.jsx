import React from "react";
import "../Styles/Hero.css";

import WomanImg from "../img/icons8-team-6LZuSzSwso0-unsplash.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="main-hero-div">
      <div className="container">
        {/* text */}
        <div className="text-div-1">
          {/* pretitle */}
          <div>
            <div className="trend-div-main">
              <div className="trend-div"></div>New Trend
            </div>
            {/* title */}
            <h1 className="atmn-div">
              ECOMMERCE WEBSITE FOR TECHNOLOGIES, CLOTHING AND<br />
              <span className="womens-div">JEWELERY</span>
            </h1>
            <Link to={"/"} className="discover-div">
              Discover More
            </Link>
          </div>
        </div>
        {/* image */}
        <div>
          <img className="WomanImg" src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
