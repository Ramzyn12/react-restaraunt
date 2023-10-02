import React from "react";
import classes from './Meal.module.css'
const Meal = (props) => {
  return (
    <div className={classes["meal-info-container"]}>
      <div className={classes["dish-name-container"]}>
        <span className={classes["dish-name"]}>{props.name}</span>
        <span className={classes["dish-price"]}>{props.price}</span>
      </div>
      <p className={classes.description}>
        {props.description}
      </p>
    </div>
  );
};

export default Meal;
