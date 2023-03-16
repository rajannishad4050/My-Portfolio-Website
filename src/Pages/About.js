import React, { useRef, useState, useEffect } from "react";

const About = ({ runAboutWheel, firstScroll }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (firstScroll) {
      setTimeout(() => {
        setAnimate(true);
      }, 1000);
    }
  }, [firstScroll]);

  return (
    <>
      <section className="about" onWheel={runAboutWheel}>
        <div className="about-main">
          <div className="about-text">
            <h1>About</h1>
            <div
              className={
                animate
                  ? "about-underline"
                  : "about-underline about-underline-animate"
              }
            ></div>
          </div>
          <div className="about-flex-container">
            <div className="about-section-a">
              <div className="about-section-a-wrapper">
                <div className="img-container">
                  <img src="rajan_img.jpg" alt="" className="photo" />
                </div>
                <h1 className="question">Who's this guy?</h1>
                <p className="about-me">
                  I'm a Front-End Developer. I have serious passion for coding,
                  animations and creating intuitive, dynamic user experience.
                </p>
                <div className="contact-link">
                  Let's make something special.
                </div>
              </div>
            </div>
            <div className="about-section-b">
              <div className="bar flex">
                <div className="tag">HTML</div>
                <div
                  className={
                    animate
                      ? "bar-fill html-percentage"
                      : "fill-zero bar-fill html-percentage"
                  }
                ></div>
              </div>
              <div className="bar flex">
                <div className="tag">CSS</div>
                <div
                  className={
                    animate
                      ? "bar-fill css-percentage"
                      : "fill-zero bar-fill css-percentage"
                  }
                ></div>
              </div>
              <div className="bar flex">
                <div className="tag">JAVASCRIPT</div>
                <div
                  className={
                    animate
                      ? "bar-fill javascript-percentage"
                      : "fill-zero bar-fill javascript-percentage"
                  }
                ></div>
              </div>
              <div className="bar flex">
                <div className="tag">REACT</div>
                <div
                  className={
                    animate
                      ? "bar-fill react-percentage"
                      : "fill-zero bar-fill react-percentage"
                  }
                ></div>
              </div>
              <div className="bar flex">
                <div className="tag">REDUX</div>
                <div
                  className={
                    animate
                      ? "bar-fill redux-percentage"
                      : "fill-zero bar-fill redux-percentage"
                  }
                ></div>
              </div>
              <div className="bar flex">
                <div className="tag">SASS</div>
                <div
                  className={
                    animate
                      ? "bar-fill sass-percentage"
                      : "fill-zero bar-fill sass-percentage"
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
