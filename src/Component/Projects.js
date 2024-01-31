import React, { useState, useEffect } from "react";
import "../Styles/projects.css";

const Portfolio = () => {
  const [animate, setAnimate] = useState(true);

  return (
    <>
      <section className="project">
        <div className="project-title">
          <h1
            className={
              animate
                ? "project-title-text"
                : "project-title-text project-title-text-animate"
            }
          >
            Projects
          </h1>
          <div className="project-underline"></div>
        </div>
        <div className="project-grid">
          <div className="project-container">
            <img
              src="forex-trading-project.jpg"
              alt="trading-image"
              className="project-image"
            />
            <div className="project-info">
              <h1 className="project-name">Forex Trading simulator</h1>
              <div className="project-description">
                This is a Virtual Trading Website in which you can buy and sale
                currency of other countries and make profit. This is a
                simualation website through which you can learn Forex Trading
              </div>
              <button className="project-btn">see</button>
            </div>
          </div>
          <div className="project-container">
            <img
              src="zomato-project.jpg"
              alt="project-image"
              className="project-image"
            />
            <div className="project-info">
              <h1 className="project-name">Zomato HomePage Clone</h1>
              <div className="project-description">
                This is a clone website in which i have cloned the zomato
                website homepage and i have used tailwind css in this project.
              </div>
              <button className="project-btn">see</button>
            </div>
          </div>
          <div className="project-container">
            <img
              src="score.jpg"
              alt="website-image"
              className="project-image"
            />
            <div className="project-info">
              <h1 className="project-name">Fruit Basket Game</h1>
              <div className="project-description">
                This is Game which is made using Javscript language the game is
                supported in pc only.
              </div>
              <button className="project-btn">see</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
