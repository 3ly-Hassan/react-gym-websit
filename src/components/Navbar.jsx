import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import "./navbar.css";
import { HiBars3BottomRight } from "react-icons/hi2";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Logo from "./../images/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>

        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  onClick={() => setIsNavShowing((prev) => !prev)}
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {!isNavShowing ? (
            <HiBars3BottomRight></HiBars3BottomRight>
          ) : (
            <AiOutlineCloseCircle></AiOutlineCloseCircle>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
