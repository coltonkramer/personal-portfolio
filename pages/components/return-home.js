import React from "react";
import Link from "next/link";
import DarkMode from "./dark-mode";
import {
  NavContainer,
  GlobalNav,
  GlobalNavStyle,
  LinkStyle
} from "./style.module.css";

const ReturnHome = () => {
  return (
    <div className={GlobalNavStyle}>
      <div className={GlobalNav}>
        <div className={NavContainer}>
          <div className={LinkStyle}>
            <Link href="../">
              <a>Back Home</a>
            </Link>
          </div>
        </div>
        <DarkMode />
      </div>
    </div>
  );
};
export default ReturnHome;