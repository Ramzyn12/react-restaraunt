import React, { useState, useEffect } from "react";
import classes from "./HomeHeader.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";  
import { motion } from "framer-motion";

const HomeHeader = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const buttonVariants = {
    hidden: (custom) => ({ opacity: 0, x: custom }),
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes["overlay__content"]}>
          <motion.h1
            className={classes.title}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            Experience authentic korean cuisine
          </motion.h1>
          <div className={classes.controls}>
            <Link to={"./menu"}>
              <motion.button
                variants={buttonVariants}
                custom={-100}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                View Menu
              </motion.button>
            </Link>
            {/* <a
              href="https://www.ubereats.com/gb/store/gangnam-restaurant/KJFRpwc5QoKrI65vQ4v9-g?diningMode=PICKUP&utm_campaign=place-action-link&utm_medium=organic&utm_source=google"
              target="_blank"
              rel="noopener noreferrer"
            > */}
            <Link to={"./news"}>
              <motion.button
                variants={buttonVariants}
                custom={100}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
                >
                Gangnam News
              </motion.button>
                </Link>
            {/* </a> */}
          </div>
        </div>
        {showArrow && (
          <ScrollLink
            to="about-section"
            smooth={true}
            duration={500}
            offset={-60}
          >
            <FontAwesomeIcon
              className={classes.icon}
              icon={faArrowDown}
              size="xl"
              color="white"
            />
          </ScrollLink>
        )}
      </header>
    </>
  );
};

export default HomeHeader;
