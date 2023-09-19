import React, { useState, useEffect } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleScrolling = (value) => {
    if (window.innerWidth < 800 || window.innerHeight < 480) {
      document.body.scrollTop = value;
      document.documentElement.scrollTop = value;
    }
  };

  return (
    <>
      <header>
        <div className="header-top-section">
          <div
            onClick={() => {
              setActive(!active);
              console.log("hello");
            }}
            className="bar-icon"
          >
            <div className="bar-line"></div>
            <div className={active ? "bar-line shift" : "bar-line"}></div>
            <div className="bar-line"></div>
          </div>
        </div>
        <div className={active ? "header-links active" : "header-links"}>
          <ul>
            <li
              className="header-link"
              onClick={() => {
                handleScrolling(0);
                setActive(false);
              }}
            >
              HOME
            </li>
            <li
              className="header-link"
              onClick={() => {
                handleScrolling(605);
                setActive(false);
              }}
            >
              ABOUT
            </li>
            <li
              className="header-link"
              onClick={() => {
                handleScrolling(1470);
                setActive(false);
              }}
            >
              PORTFOLIO
            </li>
            <li
              className="header-link"
              onClick={() => {
                handleScrolling(2544.6);
                setActive(false);
              }}
            >
              CONTACTS
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
