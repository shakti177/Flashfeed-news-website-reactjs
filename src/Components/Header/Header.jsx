import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuItemClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (window.innerWidth <= 1136) {
      setShowMenu(false);
    }
  };

  return (
    <section id="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={showMenu ? "mobile-menu-items" : "menu-items"}>
        <ul>
          <li>
            <Link to="/" onClick={handleMenuItemClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/breakingNews" onClick={handleMenuItemClick}>
              Breaking News
            </Link>
          </li>
          <li>
            <Link to="/sports" onClick={handleMenuItemClick}>
              Sports
            </Link>
          </li>
          <li>
            <Link to="/entertainment" onClick={handleMenuItemClick}>
              Entertainment
            </Link>
          </li>
          <li>
            <Link to="/technology" onClick={handleMenuItemClick}>
              Technology
            </Link>
          </li>
          <li>
            <Link to="/world" onClick={handleMenuItemClick}>
              World
            </Link>
          </li>
          <li>
            <Link to="/business" onClick={handleMenuItemClick}>
              Business
            </Link>
          </li>
        </ul>
      </div>
      <div className="headerButton">
        <a href="https://github.com/shakti177/FlashFeed-News-App-React_Native/releases/download/untagged-4c16cd6f11117e7aaafa/app-release.apk">
          <button className="desktop-button">Download App</button>
        </a>
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
