import React from "react";
import HomeHeader from "../../components/Header/HomeHeader";
import About from "../../components/About/About";
import Reviews from "../../components/Reviews/Reviews";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
// import { Element } from "react-scroll";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Product from "../Product/Product";
const Home = () => {
  useEffect(() => {
    if (window.location.hash === "#about-section") {
      window.scrollTo(0, 0);

      setTimeout(() => {
        const element = document.getElementById("about-section");
        if (element) {
          const offset = 60;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Gangnam Stevenage - Home</title>
        <meta
          name="description"
          content="Experience authentic korean at gangnam in stevenage"
        />
      </Helmet>
      <HomeHeader />

      <About />
      <Reviews />
      <PhotoGallery />
    </>
  );
};

export default Home;
