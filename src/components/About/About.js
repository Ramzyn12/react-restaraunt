import React from "react";
import classes from "./About.module.css";
import aboutImage from "../../assets/aboutUs.jpeg";
import kimchiImage from "../../assets/kimchi.jpeg";
import bibimbapImage from "../../assets/bibimbap.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: "-80px",
  });

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    if (inView1) controls1.start("visible");
    if (inView2) controls2.start("visible");
    if (inView3) controls3.start("visible");
  }, [controls1, inView1, controls2, inView2, controls3, inView3]);

  return (
    <section id="about-section" className={classes.background}>
      <h1 className={classes.title}>About healthy korean dishes</h1>

      <article className={classes.container} ref={ref1}>
        <motion.div
          className={classes["text-section"]}
          initial="hidden"
          animate={controls1}
          variants={textVariants}
          transition={{ duration: 0.5 }}
        >
          <h3 className={classes.subtitle}>Basics</h3>
          <p className={classes.description}>
            When eating Korean cuisine, everything's cut into bite size
            portions. Therefore, it is tradition to use chopsticks and a spoon
            for the rice. Meat has already been sliced when cooked, vegetables
            are also steamed and then quickly stir fried. The main ingredients
            used to make the sauces are soy sauce, garlic, ginger, sesame oil,
            pear and plum juice.
          </p>
        </motion.div>
        <motion.div
          className={classes["image-section"]}
          initial="hidden"
          animate={controls1}
          variants={imageVariants}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <img src={aboutImage} className={classes.gyoza} alt="gyoza" />
        </motion.div>
      </article>
      <article className={classes.containerTwo} ref={ref2}>
        <motion.div
          className={classes["text-section"]}
          initial="hidden"
          animate={controls2}
          variants={textVariants}
          transition={{ duration: 0.5 }}
        >
          <h3 className={classes.subtitle}>Kimchi</h3>
          <p className={classes.description}>
            A traditional fermented Korean side dish made of vegetables with a
            variety of seasonings. In traditional preparation Kimchi was often
            allowed to ferment underground in jars for months during winter
            time. It is Korea's national dish, and there are hundreds of
            varieties made with a main vegetable ingredient such as Napa
            cabbage, radish, scallion, or cucumber.
          </p>
        </motion.div>
        <motion.div
          className={classes["image-section"]}
          initial="hidden"
          animate={controls2}
          variants={imageVariants}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <img src={kimchiImage} alt="kimchi" />
        </motion.div>
      </article>
      <article className={classes.container} ref={ref3}>
        <motion.div
          className={classes["text-section"]}
          initial="hidden"
          animate={controls3}
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <h3 className={classes.subtitle}>How to eat Bi Bim Bap</h3>
          <p className={classes.description}>
            It is rice served in a bowl, along with various vegetables and stir
            fried beef, pork or chicken + seafood as toppings, and a Korean hot
            bean paste called gochujang (sweet chilli sauce). It is supposed to
            be a royal court dish, embodying a balance of colours and flavours
            that is supposed to represent a healthy, balanced meal. The
            traditional way to eat bi bim bap is to mix it very well with
            chopsticks, and then you can use a spoon to eat it. In Korea, they
            make it very clear that mixing is the secret to better tasting bi
            bim bap, and that chopsticks are the only way to get it mixed
            properly. You can eat it with either a spoon or chopsticks,
            whichever you're more comfortable with.
          </p>
        </motion.div>
        <motion.div
          className={classes["image-section"]}
          initial="hidden"
          animate={controls3}
          variants={imageVariants}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <img
            src={bibimbapImage}
            className={classes.bibimbap}
            alt="bibimbap"
          />
        </motion.div>
      </article>
    </section>
  );
};

export default About;
