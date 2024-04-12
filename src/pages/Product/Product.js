import React from "react";
import classes from "./Product.module.css";
import kimchi from "../../assets/KimchiHomemadeNews.jpg";
import info from "../../assets/KimchiInfo1.png";
import ingredients from "../../assets/KimchiIngredients1.png";
const Product = () => {


  return (
    <div className={classes.background}>
      <h1 className={classes.title}>Gangnam News</h1>
      <div className={classes.mainContainer}>
        {/* left */}
        <div className={classes.leftContainer}>
          <h3 className={classes.subtitle}>Younhae Kwon's Gangnam Kimchi</h3>
          <p className={classes.description}>
            Available now in 300g, 500g and 1kg
          </p>

          <div className={classes.mainImageContainer}>
            <img alt="kimchi" className={classes.mainImage} src={kimchi} />
          </div>
        </div>
        {/* Right */}
        <div className={classes.rightContainer}>
          {/* Main image */}
          {/* two images */}

          <div className={classes.backupImageContainer}>
            <img className={classes.backupImage} alt="ingredients" src={ingredients} />
            <img className={classes.backupImage} alt="info" src={info} />
          </div>
        </div>
      </div>
      <p className={classes.note}>
        (Can be ordered in advance or bought in store)
      </p>
    </div>
  );
};

export default Product;

//Title saying Gangnam news for customers
// Gangnam news

// kimchi 300g
//avaible as 300g 500g and 1kg
//can be ordereds in advance
