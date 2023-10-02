import React from "react";
import classes from "./Contact.module.css";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Contact = () => {
  const leftSlideInVariants = {
    hidden: { x: "-100", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const rightSlideInVariants = {
    hidden: { x: "100", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className={classes.background}>
      <Helmet>
        <title>Gangnam Stevenage - Contact Page</title>
        <meta
          name="description"
          content="Reach out to Gangnam Stevenage for reservations, queries, or feedback. Find our address, phone, and email details here."
        />
      </Helmet>
      <div className={classes.container}>
        <motion.div
          className={classes.left}
          initial="hidden"
          animate="visible"
          variants={leftSlideInVariants}
        >
          <div>
            <h3>Where to find us</h3>
            <div className={classes.address}>
              <div>22-24 chells way</div>
              <div>stevenage</div>
              <div>SG2 0DJ</div>
              <div>Located in: the Glebe</div>
            </div>
          </div>

          <div>
            <h3>get in touch</h3>
            <div className={classes.info}>
              <a href="tel:+441438747215"><FontAwesomeIcon icon={faPhone}/> 01438 747215</a>
              <a href="mailto:gangnamstevenage@gmail.com">
                <FontAwesomeIcon icon={faEnvelope}/>
                gangnamstevenage@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={classes.right}
          initial="hidden"
          animate="visible"
          variants={rightSlideInVariants}
        >
          <iframe
            className={classes.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.3805794664554!2d-0.1752509098478029!3d51.908767208877414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487631d0508abc6d%3A0x4538a2973a297eb7!2sGangnam%20Restaurant!5e0!3m2!1sen!2suk!4v1691498617347!5m2!1sen!2suk"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowFullScreen
            title="map showing gangnam location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
