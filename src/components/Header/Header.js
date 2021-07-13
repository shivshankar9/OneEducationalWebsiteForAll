import React, { useState } from "react";
import "./Header.css";
import ImgSrc from "./../../shared/ImgSrc";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link, withRouter } from "react-router-dom";
import Nav from "./../Nav/Nav";

const Header = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const handleThemeBtn = () => {
    let currentTheme = isDarkMode;
    if (currentTheme === true) {
      document.documentElement.dataset.theme = "light";
    } else {
      document.documentElement.dataset.theme = "dark";
    }
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div>
      <header className="header">
        <div onClick={() => props.history.push("/")}>
          <img
            src={ImgSrc.Logo}
            alt="LearnZania Logo"
            className="header__logo"
          />
          <h1 className="header__h1">
            LEARN
            <label className="header__h1--label">Zania</label>
          </h1>
        </div>

        <div onClick={props.toggleSD} className="header_toggle--btn">
          {/* for responsiveness in small screen  */}
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Nav />

        <div className="header__btn--container">
          <ul className="header__btn--ul">
            <li className="header__btn--login header__btn--a">
              <Link to="/login" className="scroll_color_change">
                Login
              </Link>
            </li>
            <li className="header__btn--get header__btn--a">
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
        <DarkModeToggle
          className="dark_mode_toogle"
          onChange={handleThemeBtn}
          checked={isDarkMode}
          size={55}
        />
      </header>
    </div>
  );
};

export default withRouter(Header);
