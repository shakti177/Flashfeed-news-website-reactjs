import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section id="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className={showMenu ? "mobile-menu-items" : "menu-items"}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/home">Entertainment</a>
          </li>
          <li>
            <a href="/home">Sports</a>
          </li>
          <li>
            <a href="/home">World</a>
          </li>
          <li>
            <a href="/home">Technology</a>
          </li>
        </ul>
      </div>
      <div className="headerButton">
        <button className="desktop-button">
          <a href="https://github.com/shakti177/FlashFeed-News-App-React_Native/releases/download/untagged-4c16cd6f11117e7aaafa/app-release.apk">
            Download App
          </a>{" "}
        </button>

        <button
          className="mobile-menu-icons"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <IoClose size="30px" /> : <IoMenu size="30px" />}
        </button>
      </div>
    </section>
  );
};

export default Header;
