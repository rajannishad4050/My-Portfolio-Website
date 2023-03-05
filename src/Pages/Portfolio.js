import React, { useState, useEffect } from "react";

const Portfolio = ({ runProjectWheel, secondScroll }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (secondScroll) {
      setTimeout(() => {
        setAnimate(true);
      }, 900);
    }
  }, [secondScroll]);

  useEffect(() => {
    console.log(animate, "animate");
  }, [animate]);

  return (
    <>
      <section className="project" onWheel={runProjectWheel}>
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
          <a
            href="https://forex-trading-simulator.netlify.app/"
            className="project-container"
          >
            <h1 className="project-name">Forex Trading simulator</h1>
            <div
              className={
                animate
                  ? "project-skeleton"
                  : "project-skeleton project-skeleton-animate"
              }
            ></div>
            <img
              src="forex-trading-project.jpg"
              alt=""
              className="project-image-covering"
            />
            <button className="visit-btn">Visit</button>
          </a>
          <a
            href="https://zomato-homepage-clone.netlify.app/"
            className="project-container"
          >
            <h1 className="project-name">Zomato HomePage Clone</h1>
            <div
              style={{ background: "gray" }}
              className={
                animate
                  ? "project-skeleton"
                  : "project-skeleton project-skeleton-animate"
              }
            ></div>
            <img
              src="zomato-project.jpg"
              alt=""
              className="project-image-covering"
            />
            <button className="visit-btn">Visit</button>
          </a>
          <a
            href="https://fruit-basket-game.netlify.app/"
            className="project-container"
          >
            <h1 className="project-name">Fruit Basket Game</h1>
            <div
              className={
                animate
                  ? "project-skeleton"
                  : "project-skeleton project-skeleton-animate"
              }
            ></div>
            <img src="score.jpg" alt="" className="project-image-covering" />
            <button className="visit-btn">Visit</button>
          </a>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
