import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/gangnam-high-resolution-logo-color-on-transparent-background.png";
import { NavLink, Link as RouterLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
// import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = (props) => {
  const location = useLocation();

  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slideIn = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses =
    location.pathname !== "/" || isScrolled
      ? `${classes.navbar} ${classes.blackBackground}`
      : classes.navbar;

  return (
    <nav className={navClasses}>
      <RouterLink to={"/"} className={classes["logo__container"]}>
        <img
          className={classes.logo}
          src={logo}
          alt="Gangnam Restaurant Logo"
        />
      </RouterLink>
      <ul className={classes["nav__links"]}>
        <li className={classes["nav__link"]}>
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive ? classes.active : "";
            }}
          >
            Home
          </NavLink>
        </li>
        <li className={classes["nav__link"]}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? classes.active : "";
            }}
            to={"/menu"}
          >
            Menu
          </NavLink>
        </li>
        <li className={classes["nav__link"]}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? classes.active : "";
            }}
            to={"/gallery"}
          >
            Gallery
          </NavLink>
        </li>
        <li className={classes["nav__link"]}>
          {location.pathname === "/" ? (
            <ScrollLink
              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </ScrollLink>
          ) : (
            <RouterLink to="/#about-section">About</RouterLink>
          )}
        </li>
        <li className={classes["nav__link"]}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? classes.active : "";
            }}
            to={"/contact"}
          >
            Contact us
          </NavLink>
        </li>
      </ul>
      <div className={classes.controls}>
        <button
          className={classes.hamburger}
          onClick={() => setIsMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <a
          href="https://www.ubereats.com/gb/store/gangnam-restaurant/KJFRpwc5QoKrI65vQ4v9-g?diningMode=PICKUP&utm_campaign=place-action-link&utm_medium=organic&utm_source=google"
          className={classes["order__link-container"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classes["order__link"]}>Order</div>
        </a>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideIn}
            className={classes["small-screen-overlay"]}
          >
            <ul className={classes["small-screen-links"]}>
              <li className={classes["nav__link"]}>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  to={"/"}
                  className={({ isActive }) => {
                    return isActive ? classes.active : "";
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className={classes["nav__link"]}>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => {
                    return isActive ? classes.active : "";
                  }}
                  to={"/menu"}
                >
                  Menu
                </NavLink>
              </li>
              <li className={classes["nav__link"]}>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => {
                    return isActive ? classes.active : "";
                  }}
                  to={"/gallery"}
                >
                  Gallery
                </NavLink>
              </li>
              <li className={classes["nav__link"]}>
                {location.pathname === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="about-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </ScrollLink>
                ) : (
                  <RouterLink
                    onClick={() => setIsMenuOpen(false)}
                    to="/#about-section"
                  >
                    About
                  </RouterLink>
                )}
              </li>
              <li className={classes["nav__link"]}>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => {
                    return isActive ? classes.active : "";
                  }}
                  to={"/contact"}
                >
                  Contact us
                </NavLink>
              </li>

              <a
                href="https://www.ubereats.com/gb/store/gangnam-restaurant/KJFRpwc5QoKrI65vQ4v9-g?diningMode=PICKUP&utm_campaign=place-action-link&utm_medium=organic&utm_source=google"
                className={classes["order__link-small-screen"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={classes["order__link"]}>Order</div>
              </a>
              {/* <li className={classes.iconsContainer}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/gangnamstevenage/"
                >
                  <FontAwesomeIcon className={classes.iconEl} icon={faFacebook} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/gangnamstevenage/?hl=en"
                >
                  <FontAwesomeIcon className={classes.iconEl} icon={faInstagram} />
                </a>
              </li> */}
            </ul>
            <button
              onClick={() => setIsMenuOpen(false)}
              className={classes.exit}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
