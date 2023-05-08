import React from "react";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        {/* <Logo /> */}
        {/* <h1>
          The <span>News</span> Feed App
        </h1> */}
        <Link to="/register" className="btn btn-hero">
          Login/Register
        </Link>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Med Access <span>Care</span> Zone
          </h1>
          <p>lorem ipsum dolor sit amet, consetetur sadip lorem</p>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
