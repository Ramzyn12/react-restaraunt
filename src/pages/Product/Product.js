import React from "react";
import classes from "./Product.module.css";
import kimchi from "../../assets/KimchiHomemadeNews.jpg";

const Product = () => {
  return (
    <div className={classes.background}>
      <h1 className={classes.title}>Gangnam News</h1>
      <div className={classes.mainContainer}>
        {/* left */}
        <h3 className={classes.subtitle}>Younhae Kwon's Gangnam Kimchi</h3>
        <p className={classes.description}>
          Available now in 300g, 500g and 1kg
        </p>

        <div className={classes.mainImageContainer}>
          <img alt="kimchi" className={classes.mainImage} src={kimchi} />
        </div>
        {/* Right */}
        {/* <div className={classes.rightContainer}> */}
        {/* Main image */}
        {/* two images */}

        {/* <div className={classes.backupImageContainer}>
            <img className={classes.backupImage} alt="ingredients" src={ingredients} />
            <img className={classes.backupImage} alt="info" src={info} />
          </div>
        </div> */}
      </div>
      <p className={classes.subtitle}>
        VEGAN KIMCHI NOW ALSO AVAILABLE FROM GANGNAM RESTAURANT!
      </p>
      <p className={classes.subtitle}>
        HALAL CHICKEN AND BEEF AS MAIN DISHES ARE AVAILABLE NOW AT GANGNAM!
        (HALAL MEAT DISHES MUST BE BOOKED THREE DAYS IN ADVANCE)
      </p>
       <p className={classes.subtitle}>
        HALAL CHICKEN MENU IS NOW AVAILABLE AT GANGNAM!
      </p>
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
