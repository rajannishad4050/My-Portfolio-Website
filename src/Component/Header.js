import React, { useState, useEffect } from "react";
import "../Styles/header.css";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleHomeButtonClicked = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    setActive(false);
  };

  const handleAboutButtonClicked = () => {
    document.body.scrollTop = 650; // For Safari
    document.documentElement.scrollTop = 650;
    setActive(false);
  };

  const handleProjectButtonClicked = () => {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (windowWidth >= 800) {
      document.body.scrollTop = 1312; // For Safari
      document.documentElement.scrollTop = 1312;
    } else {
      document.body.scrollTop = 1580; // For Safari
      document.documentElement.scrollTop = 1580;
    }

    setActive(false);
  };

  const handleContactButtonClicked = () => {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (windowWidth >= 800) {
      document.body.scrollTop = 2822; // For Safari
      document.documentElement.scrollTop = 2822;
    } else {
      document.body.scrollTop = 3535; // For Safari
      document.documentElement.scrollTop = 3535;
    }

    setActive(false);
  };

  //a = 653 p = 1312 c= 2822
  //a = 1580 b= 3535
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(document.documentElement.scrollTop, document.body.scrollTop);
    });
  }, []);

  return (
    <>
      <header className={active ? "bg-black" : ""}>
        <div className="header-top-section">
          <div
            className="bar-icon cursor-pointer"
            onClick={() => setActive(!active)}
          >
            <div className="bar-line"></div>
            <div className={active ? "bar-line shift" : "bar-line"}></div>
            <div className="bar-line"></div>
          </div>
        </div>
        <div className={active ? "header-links active" : "header-links"}>
          <ul>
            <li className="header-link" onClick={handleHomeButtonClicked}>
              HOME
            </li>
            <li className="header-link" onClick={handleAboutButtonClicked}>
              ABOUT
            </li>
            <li className="header-link" onClick={handleProjectButtonClicked}>
              PORTFOLIO
            </li>
            <li className="header-link" onClick={handleContactButtonClicked}>
              CONTACTS
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
