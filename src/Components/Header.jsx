import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../Stateprovider";
import { auth } from "../firebase";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../assets/logo.png";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(true);
  };

  const hideMenu = () => {
    setActive(false);
  };

  const loginfunction = () => {
    hideMenu();
    handleAuthenticaton();
  };

  return (
    <div className={`header ${scrolling ? "scrolling" : ""}`}>
      <Link to="/">
        <img
          onClick={active ? hideMenu : null}
          className="header_logo"
          src={logo}
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className={active ? "active header_nav" : "header_nav"}>
        <div onClick={hideMenu} className="header_option">
          <span className="header_optionLineOne">
            Hey{" "}
            {!user ? (
              <span className="boldify">Guest</span>
            ) : (
              <span className="boldify">{user.email.split("@")[0]}</span>
            )}
          </span>
        </div>

        <Link to={!user && "/login"}>
          <div onClick={loginfunction} className="header_option">
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div onClick={hideMenu} className="header_option">
          <span className="header_optionLineTwo"> Orders</span>
        </div>

        <div onClick={hideMenu} className="header_option">
          <span className="header_optionLineTwo"> Your Prime </span>
        </div>

        <Link to="/checkout">
          <div onClick={hideMenu} className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {" "}
              {basket?.length}{" "}
            </span>
          </div>
        </Link>
      </div>

      <div onClick={showMenu} className="toggleIcon">
        <CgMenuGridO className="icon" />
      </div>
    </div>
  );
}

export default Header;
