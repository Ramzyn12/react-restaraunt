import React, { useEffect } from "react";
import classes from "./CollageGallery.module.css";
import collageOne from "../../assets/collageOne.jpeg";
import collageTwo from "../../assets/collageTwo.jpeg";
import collageThree from "../../assets/collageThree.jpeg";
import collageFour from "../../assets/collageFour.jpeg";
import collageFive from "../../assets/collageFive.jpeg";
import collageSix from "../../assets/collageSix.jpeg";
import collageSeven from "../../assets/collageSeven.jpeg";
import collageEight from "../../assets/collageEight.jpeg";
import collageNine from "../../assets/galleryOne.jpeg";
import collageTen from "../../assets/galleryFive.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const CollageGallery = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.25,
      },
    }),
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={classes.background}>
      <h1 className={classes.title}>Photo Gallery</h1>
      <motion.div className={classes.container} ref={ref} >
        {[
          collageOne,
          collageThree,
          collageTwo,
          collageFour,
          collageSix,
          collageNine,
          collageSeven,
          collageEight,
          collageFive,
          collageTen,
        ].map((image, index) => (
          <motion.div
            key={index}
            className={classes.imgWrapper}
            variants={fadeInVariants}
            custom={index}
            initial="hidden"
            animate={controls}
          >
            <img alt="Collage" src={image} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CollageGallery;
