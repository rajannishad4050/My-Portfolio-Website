import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="chevron-up-container center-items">
          <Icon icon="mdi:chevron-double-up" width={35} color="white" />
        </div>
        <div className="link-icons flex align-center justify-center">
          <div className="link-icon-container">
            <Icon icon="mdi:linkedin" width={35} color="white" />
          </div>
          <div className="link-icon-container">
            <Icon icon="mdi:github" width={35} color="white" />
          </div>
        </div>
        <div class="footnote text-center">
          RAJAN NISHAD <span class="highlight">©2022</span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
