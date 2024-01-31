import React from "react";
import { Icon } from "@iconify/react";
import "../Styles/home.css";

const Home = () => {
  const handleHomeButtonClicked = () => {
    document.body.scrollTop = 1312; // For Safari
    document.documentElement.scrollTop = 1312;
  };

  return (
    <>
      <section className="home">
        <div className="context">
          <div className="text">
            Hello, I'm <span>Rajan Nishad.</span>
            <br />
            I'm a front-end web developer
          </div>
          <div className="home-btn" onClick={handleHomeButtonClicked}>
            <p> View my work</p>
            <i className="arrow-right-icon center-items">
              <Icon icon="mdi:arrow-right" color="white" width="20" />
            </i>
          </div>
        </div>

        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default Home;
