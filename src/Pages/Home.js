import React from "react";
import { Icon } from "@iconify/react";
import Header from "../Component/Header";

const Home = ({
  runHomeWheel,
  setFirstBack,
  setFirstScroll,
  setHomeButtonClick,
}) => {
  return (
    <>
      <section className="home" onWheel={runHomeWheel}>
        {/* <p className="github">
          <a className="github-link" href="https://github.com/rajannishad4050">
            GitHub
          </a>
        </p> */}
        <div className="context">
          <div className="text">
            Hello, I'm <span>Rajan Nishad.</span>
            <br />
            I'm a front-end web developer
          </div>
          <div
            className="home-btn"
            onClick={() => {
              if (window.innerWidth >= 800 && window.innerHeight >= 480) {
                setFirstBack(false);
                setFirstScroll(true);
                setHomeButtonClick(true);
              }
            }}
          >
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
