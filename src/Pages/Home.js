import React from "react";
import { Icon } from "@iconify/react";
import Header from "../Component/Header";

const Home = ({ runHomeWheel, setFirstBack, setHomeButtonClick }) => {
  return (
    <>
      <section className="home" onWheel={runHomeWheel}>
        <div className="context">
          <div className="text">
            Hello, I'm <span>Rajan Nishad.</span>
            <br />
            I'm a front-end web developer
          </div>
          <div
            className="home-btn"
            onClick={() => {
              setFirstBack(false);
              setHomeButtonClick(true);
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
