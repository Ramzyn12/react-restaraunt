import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const location = useLocation();

  const openingTimes = [
    { day: "Monday", hours: "6pm - 10:30pm" },
    { day: "Tuesday", hours: "6pm - 10:30pm" },
    { day: "Wednesday", hours: "6pm - 10:30pm" },
    { day: "Thursday", hours: "6pm - 10:30pm" },
    { day: "Friday", hours: "6pm - 10:30pm" },
    { day: "Saturday", hours: "6pm - 10:30pm" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <footer className={classes.background}>
      <div className={classes.container}>
        <div className={classes["opening-times-section"]}>
          <h4>OPENING HOURS</h4>
          {openingTimes.map((time) => (
            <span className={classes.dayTime} key={time.day}>
              <strong>{time.day}:</strong> {time.hours}
            </span>
          ))}
        </div>
        <nav className={classes["navigation-section"]}>
          <h4>NAVIGATION</h4>
          <Link to={"/"}>Home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/contact"}>Contact us</Link>
          <Link to={"/gallery"}>Gallery</Link>
          {location.pathname === "/" ? (
            <ScrollLink
              className={classes.scrollLink}
              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </ScrollLink>
          ) : (
            <Link to="/#about-section">About</Link>
          )}
        </nav>

        <div className={classes["social-media-section"]}>
          <h4>FOLLOW FOR UPDATES</h4>
          <div className={classes.icons}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/gangnamstevenage/"
            >
              <FontAwesomeIcon size="2x" icon={faFacebook} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/gangnamstevenage/?hl=en"
            >
              <FontAwesomeIcon size="2x" icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        &copy; {new Date().getFullYear()} Gangnam Restaurant. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
