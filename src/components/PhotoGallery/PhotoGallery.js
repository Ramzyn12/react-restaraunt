import React from "react";
import classes from "./PhotoGallery.module.css";
import CarouselComp from "./CarouselComp";
import { Link } from "react-router-dom";

const PhotoGallery = () => {
  return (
    <div className={classes.background}>
      <h1 className={classes.title}>A Glimpse of Our Menu</h1>
      <div className={classes.container}>
        <div className={classes["carousel-container"]}>
          <CarouselComp />
        </div>
      </div>
      <div className={classes.controls}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ubereats.com/gb/store/gangnam-restaurant/KJFRpwc5QoKrI65vQ4v9-g?diningMode=PICKUP&utm_campaign=place-action-link&utm_medium=organic&utm_source=google"
        >
          <button>Order Now</button>
        </a>
        <Link to={"/gallery"}>
          <button>Full Gallery</button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoGallery;
