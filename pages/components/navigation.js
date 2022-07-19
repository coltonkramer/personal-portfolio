import React from "react";
import Link from "next/link";
import DarkMode from "./dark-mode";
import {
  NavContainer,
  GlobalNav,
  GlobalNavStyle,
  LinkStyle,
} from "./style.module.css";

const Navigation = () => {
  return (
    <div className={GlobalNavStyle}>
      <div className={GlobalNav}>
        <div className={NavContainer}>
          <div className={LinkStyle}>
            <Link href="#experience-container" >
              <a >Experience</a>
            </Link>
          </div>
          <div className={LinkStyle}>
            <Link href="#projects-container" >
              <a>Projects</a>
            </Link>
          </div>
          <div className={LinkStyle}>
            <Link href="./components/contact" >
              <a>Contact</a>
            </Link>
          </div>
        </div>

        <DarkMode />
      </div>
    </div>
  );
};
export default Navigation;
