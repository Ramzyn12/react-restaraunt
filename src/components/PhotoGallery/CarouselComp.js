import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import galleryOne from "../../assets/galleryOne.jpeg";
import galleryThree from "../../assets/galleryThree.jpeg";
import galleryFour from "../../assets/galleryFour.jpeg";
import "./Carousel.css";
import { useEffect, useState } from "react";

const CarouselComp = () => {
  const [centerPercentage, setCenterPercentage] = useState(50);

  useEffect(() => {
    const updateCenterPercentage = () => {
      const width = window.innerWidth;

      if (width <= 600) {
        setCenterPercentage(100);
      } else if (width <= 900) {
        setCenterPercentage(70);
      } else if (width <= 1200) {
        setCenterPercentage(50);
      } else {
        setCenterPercentage(40);
      }
    };

    updateCenterPercentage();

    window.addEventListener("resize", updateCenterPercentage);

    return () => {
      window.removeEventListener("resize", updateCenterPercentage);
    };
  }, []);

  

  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay
        showStatus={false}
        infiniteLoop
        swipeable
        preventMovementUntilSwipeScrollTolerance={true}
        centerMode
        centerSlidePercentage={centerPercentage}
      >
        <div>
          <img src={galleryOne} alt="Bibimbap" />
        </div>

        <div>
          <img src={galleryThree} alt="Bibimbap" />
        </div>
        <div>
          <img src={galleryFour} alt="Bibimbap" />
        </div>
  
      </Carousel>
    </>
  )
};

export default CarouselComp;
