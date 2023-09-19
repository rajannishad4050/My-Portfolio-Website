import { useState, useEffect } from "react";
import Header from "./Component/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [firstScroll, setFirstScroll] = useState(false);
  const [firstBack, setFirstBack] = useState(false);
  const [secondScroll, setSecondScroll] = useState(false);
  const [thirdScroll, setThirdScroll] = useState(false);
  const [scrollerHeight, setScrollerHeight] = useState("0 0");
  const [homeButtonClick, setHomeButtonClick] = useState(false);

  const scrollerStyle = {
    translate: `${scrollerHeight}`,
  };

  // Page scrolling Management //

  useEffect(() => {
    // first page scroll

    if (firstScroll) {
      document.body.classList.add("translateX-300vw");
      setScrollerHeight("400vw 25vh");
    }

    if (homeButtonClick) {
      document.body.classList.add("translateX-300vw");
      setScrollerHeight("400vw 25vh");
    }

    if (firstBack) {
      document.body.classList.add("translateX-0vw");
      setScrollerHeight("0 0");
    }

    // second page scroll
    if (secondScroll) {
      document.body.classList.add("translateY-400vh");
      setScrollerHeight("400vw 460vh");
    } else {
      const check = document.body.classList.contains("translateX-800vw");
      if (check) document.body.classList.remove("translateY-400vh");
    }

    // third page scroll
    if (thirdScroll) {
      document.body.classList.add("translateX-800vw");
      setScrollerHeight("800vw calc(500vh - 40px)");
    } else {
      const check = document.body.classList.contains("translateX-800vw");
      if (check) document.body.classList.remove("translateX-800vw");
    }

    return () => {
      document.body.classList.remove("translateX-300vw");
      document.body.classList.remove("translateX-0vw");
      document.body.classList.remove("translateY-400vh");
      document.body.classList.remove("translateX-800vw");
    };
  }, [
    firstScroll,
    firstBack,
    secondScroll,
    thirdScroll,
    homeButtonClick,
    windowWidth,
    windowHeight,
  ]);

  // wheel Functions //

  const homeWheel = (e) => {
    if (window.innerWidth >= 800 && window.innerHeight >= 480) {
      if (e.deltaY > 0) {
        //scrolling down
        setFirstBack(false);
        setFirstScroll(true);
      }
    }
  };

  const aboutWheel = (e) => {
    if (window.innerWidth >= 800 && window.innerHeight >= 480) {
      if (e.deltaY < 0) {
        // scrolling up
        setFirstBack(true);
      } else if (e.deltaY > 0) {
        //scrolling down
        setSecondScroll(true);
      }
    }
  };

  const projectWheel = (e) => {
    if (window.innerWidth >= 800 && window.innerHeight >= 480) {
      if (e.deltaY < 0) {
        setSecondScroll(false);
      } else if (e.deltaY > 0) {
        setThirdScroll(true);
      }
    }
  };

  const contactWheel = (e) => {
    if (window.innerWidth >= 800 && window.innerHeight >= 480) {
      if (e.deltaY < 0) {
        setThirdScroll(false);
      }
    }
  };

  const windowResizeFunc = () => {
    if (window.innerWidth <= 800 || window.innerHeight <= 480) {
      if (document.body.classList.contains("translateX-300vw")) {
        document.body.classList.remove("translateX-300vw");
        setScrollerHeight("0 0");
        setFirstScroll(false);
      }

      if (document.body.classList.contains("translateX-0vw")) {
        document.body.classList.remove("translateX-0vw");
        setScrollerHeight("0 0");
        setFirstBack(false);
      }

      if (document.body.classList.contains("translateY-400vh")) {
        document.body.classList.remove("translateY-400vh");
        setScrollerHeight("0 0");
        setSecondScroll(false);
      }

      if (document.body.classList.contains("translateX-800vw")) {
        document.body.classList.remove("translateX-800vw");
        setScrollerHeight("0 0");
        setThirdScroll(false);
      }

      if (firstScroll) {
      }
      if (firstBack) {
      }
      if (secondScroll) {
      }
      if (thirdScroll) {
      }
    }

    if (window.innerWidth > 800 && window.innerHeight > 480) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  };

  const throttler = (callBack, delay) => {
    let runFunction = true;
    return (...arg) => {
      if (runFunction) {
        callBack(...arg);
        runFunction = false;
        setTimeout(() => {
          runFunction = true;
        }, delay);
      }
    };
  };

  const debouncing = (callBack, delay) => {
    let timer;
    return (...arg) => {
      clearTimeout(timer);
      setTimeout(() => {
        callBack(...arg);
      }, delay);
    };
  };

  const runHomeWheel = throttler(homeWheel, 2000);
  const runAboutWheel = throttler(aboutWheel, 2000);
  const runProjectWheel = throttler(projectWheel, 2000);
  const runContactWheel = throttler(contactWheel, 2000);
  const runWindowResizeFunc = debouncing(windowResizeFunc, 500);

  useEffect(() => {
    window.addEventListener("resize", runWindowResizeFunc);
  }, []);

  return (
    <>
      <div className="main">
        <div className="scroller" style={scrollerStyle}></div>
        <Header />
        <Home
          runHomeWheel={runHomeWheel}
          setFirstBack={setFirstBack}
          setFirstScroll={setFirstScroll}
          setHomeButtonClick={setHomeButtonClick}
        />

        <div className="sliding-pages-1 left-first bg-blue"></div>
        <div className="sliding-pages-1 left-second bg-green"></div>
        <div className="sliding-pages-1 left-third bg-blue"></div>
        <About runAboutWheel={runAboutWheel} firstScroll={firstScroll} />
        <div className="sliding-pages-2 top-first bg-blue"></div>
        <div className="sliding-pages-2 top-second bg-green"></div>
        <div className="sliding-pages-2 top-third bg-blue"></div>
        <Portfolio
          runProjectWheel={runProjectWheel}
          secondScroll={secondScroll}
        />
        <div className="sliding-pages-3 left-fourth bg-blue"></div>
        <div className="sliding-pages-3 left-fifth bg-green"></div>
        <div className="sliding-pages-3 left-sixth bg-blue"></div>
        <Contact runContactWheel={runContactWheel} thirdScroll={thirdScroll} />
      </div>
    </>
  );
};

export default App;
