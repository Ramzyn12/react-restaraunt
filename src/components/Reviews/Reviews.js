import React, { useEffect } from "react";
import classes from "./Reviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import googleLogo from "../../assets/googleLogo.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Reviews = () => {
  const controls = useAnimation();
  const buttonControls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
    threshold: 0.3,
  });

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const reviewVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      setTimeout(() => {
        buttonControls.start("visible");
      }, 600);
    }
  }, [controls, buttonControls, inView]);
  return (
    <motion.div className={classes.background} ref={ref}>
      <motion.h1
        className={classes.title}
        variants={titleVariants}
        initial="hidden"
        animate={controls}
      >
        What our customers have to say
      </motion.h1>
      <div className={classes.container}>
        <motion.article
          className={classes.review}
          variants={reviewVariants}
          custom={0}
          initial="hidden"
          animate={controls}
        >
          <div className={classes.names}>
            <span className={classes.name}>Kevdolf</span>
            <img src={googleLogo} className={classes.logo} alt="Google Logo" />
          </div>
          <div className={classes.stars} aria-label="5 out of 5 stars">
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
          </div>
          <div className={classes.writing}>
            "My favorite restaurant, Real healthy well cooked food. Friendly
            staff and our families go to place to eat. Keep up the good work
            guys!"
          </div>
        </motion.article>
        <motion.article
          className={classes.review}
          variants={reviewVariants}
          custom={1}
          initial="hidden"
          animate={controls}
        >
          <div className={classes.names}>
            <span className={classes.name}>Jaleel Hudson</span>
            <img src={googleLogo} className={classes.logo} alt="Google Logo" />
          </div>
          <div className={classes.stars} aria-label="5 out of 5 stars">
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
          </div>
          <div className={classes.writing}>
            "Gangnam has become one of my favourite Korean restaurants to eat
            at. I'm always trying to find a new Korean eatery in whatever city I
            am in, and whenever I'm visiting my partner it's a delight for us to
            dine at this place. The service is kind and compassionate, and the
            food is always delicious and wanting me to order more! This is a
            hidden gem in Stevenage for sure."
          </div>
        </motion.article>
        <motion.article
          className={classes.review}
          variants={reviewVariants}
          custom={2}
          initial="hidden"
          animate={controls}
        >
          <div className={classes.names}>
            <span className={classes.name}>Cris.E. Manic</span>
            <img src={googleLogo} className={classes.logo} alt="Google Logo" />
          </div>
          <div className={classes.stars} aria-label="5 out of 5 stars">
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
            <FontAwesomeIcon color="rgb(251,188,4)" icon={faStar} />
          </div>
          <div className={classes.writing}>
            "I absolutely love this restaurant. The food is delicious, the
            bubble tea is fabulous and the staff are lovely. It's no frills in
            terms of decor which makes it even better. Love love love."
          </div>
        </motion.article>
      </div>
      <div className={classes.controls}>
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJbbyKUNAxdkgRt34pOpeiOEU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Write a review</button>
        </a>

        <a
          href="https://www.google.com/search?q=gangnam+restaurant+stevenage&hl=en-GB&gl=uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Read More</button>
        </a>
      </div>
    </motion.div>
  );
};

export default Reviews;
