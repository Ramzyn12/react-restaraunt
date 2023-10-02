import React from "react";
import classes from "./Menu.module.css";
import Meal from "./Meal";
import { motion } from "framer-motion";

const Menu = () => {
  const mealSections = [
    {
      title: "Starters",
      meals: [
        {
          name: "Crab Kimbap",
          price: "£5.50",
          description:
            "Korean Style Sushi Crab Stick, Yellow Radish, and Cucumber.",
        },
        {
          name: "Avocado Kimbap",
          price: "£5.50",
          description:
            "Korean Style Sushi - Avocado, Yellow Radish, and Cucumber. (V)",
        },
        {
          name: "Salmon Kimbap",
          price: "£6.00",
          description: "Korean Style Sushi - Salmon and Cucumber.",
        },
        {
          name: "Veg Mandu (Dumplings)",
          price: "£5.50",
          description: "Leek and Tofu Dumplings. 8 pcs. (V)",
        },
        {
          name: "Meat Mandu (Dumplings)",
          price: "£6.00",
          description: "Duck and Beef Dumplings (Large) 4 pcs.",
        },
        {
          name: "Yachae Jeon (Veg. Pancake)",
          price: "£5.50",
          description:
            "Vegetarian Korean Pancake. Spring Onions, Carrots, Parsnips, and Courgettes. (V)",
        },
        {
          name: "Haemul Pajeon (Seafood Pancake)",
          price: "£6.50",
          description:
            "Korean Seafood Pancake - Spring Onions, Carrots, Parsnips, and Courgettes, Calamari, Mussels, and Prawns.",
        },
        {
          name: "Kimchi Pancake",
          price: "£6.00",
          description: "Spring Onions, Carrots, Parsnips, and Courgettes.",
        },
        {
          name: "Sweet Spicy Chicken",
          price: "£6.00",
          description:
            "Korean style bite sized fried chicken breast coated in a sweet chilli sauce. 8 pcs.",
        },
        {
          name: "Honey Garlic Chicken",
          price: "£6.00",
          description:
            "Korean style bite sized fried chicken breast coated in honey, garlic & soy sauce. 8 pcs.",
        },
        {
          name: "Gimmari - Seaweed Spring Rolls",
          price: "£5.50",
          description: "Fried Crispy Seaweed noodle with soy sauce. 4 pcs.",
        },

        {
          name: "Pumpkin Croquette",
          price: "£5.00",
          description: "Fried pumpkin with soy sauce. 2 pcs",
        },
      ],
    },
    {
      title: "Mains",
      meals: [
        {
          name: "Beef (So)",
          price: "£11.00",
          description:
            "Rice wine with soy, garlic, pear, sugar and sesame oil.",
        },
        {
          name: "Duck (Oh Ri)",
          price: "£12.00",
          description:
            "Rice wine with chilli, soy, garlic, pear, sugar and sesame oil.",
        },
        {
          name: "Pork (Dae Gi)",
          price: "£11.00",
          description:
            "Rice wine with chilli, soy, garlic, pear, sugar and sesame oil.",
        },
        {
          name: "Chicken (Dack)",
          price: "£11.00",
          description:
            "Rice wine with soy, garlic, pear, sugar and sesame oil.",
        },
        {
          name: "Seared Salmon",
          price: "£9.50",
          description:
            "Served with seasonal vegetables, asparagus and a slice of lemon",
        },
        {
          name: "Veg Bibimbap",
          price: "£9.50",
          description:
            "Rice topped with Carrots, Courgettes, kale, Red + white Cabbage with Soy and Chilli Sauce. (V)",
        },
        {
          name: "Beef Bibimbap",
          price: "£11.00",
          description:
            "Minced Beef & Rice topped with Carrots, Courgettes, kale, Red + white Cabbage with Soy and Chilli Sauce.",
        },
        {
          name: "Chicken Bibimbap",
          price: "£11.00",
          description:
            "Diced Chicken & Rice topped with Carrots, Courgettes, kale, Red + white Cabbage with Soy and Chilli Sauce.",
        },
        {
          name: "Duck Bibimbap",
          price: "£11.50",
          description:
            "Duck & Rice topped with Carrots, Courgettes, kale, Red + white Cabbage with Soy and Chilli Sauce.",
        },
        {
          name: "Spicy Pork Bibimbap",
          price: "£11.00",
          description:
            "Pork & Rice topped with Carrots, Courgettes, kale, Red + white Cabbage with Soy and Chilli Sauce.",
        },
        {
          name: "Seafood Bibimbap",
          price: "£11.00",
          description:
            "Chopped Prawns, Calamari, Mussel & Rice topped with Carrots, Courgettes, kale, Red + white Cabbage with Soy and Chilli Sauce.",
        },
        {
          name: "Salmon Bibimbap",
          price: "£11.00",
          description:
            "Salmon & rice topped with Carrots, Courgettes, kale, Red + white Cabbage with Soy and Chilli Sauce.",
        },
        {
          name: "Japchae (Veg.)",
          price: "£10.00",
          description:
            "Sweet Potato Noodles with Carrots, Spinach, Cabbage, Spring Onions and Soy. (V)",
        },
        {
          name: "Japchae (Beef)",
          price: "£11.50",
          description:
            "Sweet Potato Noodles Mixed with Beef, Carrots, Spinach, Cabbage, Spring Onions and Soy.",
        },
        {
          name: "Japchae (Chicken)",
          price: "£9.50",
          description:
            "Sweet Potato Noodles Mixed with Chicken, Carrots, Spinach, Cabbage, Spring Onions and Soy.",
        },
        {
          name: "Spicy Beef Stew (Sogoki Jjim)",
          price: "£11.00",
          description: "with Potato, Chilli, Carrots and Soy.",
        },
        {
          name: "Pork Stew (Dae Gi Jjim)",
          price: "£11.00",
          description:
            "with Apple, Chilli, Ginger, Soy, Garlic, Sugar and Sesame oil.",
        },
        {
          name: "Vegetarian Udon",
          price: "£10.00",
          description:
            "Thick wheat flour noodles mixed with carrots, bell peppers, cabbage, and spring onions.",
        },
        {
          name: "Beef Udon",
          price: "£11.50",
          description:
            "Beef Udon Noodles with Carrots, Bell Peppers, Cabbage and Spring Onions.",
        },
        {
          name: "Chicken Udon",
          price: "£11.50",
          description:
            "Chicken Udon Noodles with Carrots, Bell Peppers, Cabbage and Spring Onions.",
        },
        {
          name: "Beef Hot Stone Steak",
          price: "£14.00",
          description:
            "8 oz Steak served with Soy Sauce, Sesame Oil, Mustard, Onion Salad, Lettuce and a small portion of Rice.",
        },
        {
          name: "Beef Jeongol (hot pot)",
          price: "£11.50",
          description: "with Vegetables and Sweet Potato Noodles",
        },
        {
          name: "Vegetarian Jeongol (hot pot)",
          price: "£11.50",
          description:
            "with Vegetables, Vegan Dumpling and Sweet Potato Noodles. (V)",
        },
      ],
    },
    {
      title: "Sides",
      meals: [
        {
          name: "Kimchi (100g)",
          price: "£2.00",
          description:
            "Traditional Korean pickle. Fish sauce, garlic, ginger, sugar, rice powder and chilli powder.",
        },
        {
          name: "Kimchi (300g)",
          price: "£5.00",
          description:
            "Traditional Korean pickle. Fish sauce, garlic, ginger, sugar, rice powder and chilli powder.",
        },
        { name: "Steamed Rice", price: "£2.00", description: "Gluten free" },
      ],
    },
    {
      title: "Desserts",
      meals: [
        {
          name: "Chocolate Mochi",
          price: "£4.00",
          description: "Gluten Rice Cake with Ice Cream. 2 pcs.",
        },
        {
          name: "Orange Chiffon Cake with Ice Cream",
          price: "£4.00",
          description: "",
        },
        { name: "Chef's Special Dessert", price: "£5.00", description: "" },
      ],
    },
    {
      title: "Drinks",
      meals: [
        { name: "Korean Rice Green Tea", price: "£2.50", description: "" },
        { name: "Korean Red Ginseng Tea", price: "£3.00", description: "" },
        {
          name: "Korean Cinnamon Juice - cold",
          price: "£2.50",
          description: "",
        },
        { name: "Korean Orange Juice - cold", price: "£2.50", description: "" },
        { name: "Aloe Vera Juice", price: "£2.50", description: "" },
        { name: "Coffee - white or black", price: "£2.50", description: "" },
        { name: "English Tea", price: "£2.50", description: "" },
        { name: "Still/Sparkling Water", price: "£2.00", description: "" },
        { name: "Coca Cola Original/Diet", price: "£2.50", description: "" },
        {
          name: "Bubble Tea",
          price: "£3.50",
          description:
            "Naturally flavoured fruit powders mixed with semi skimmed milk. Bubble tea (Taro, Mango, Coconut, Honeydew Melon, Strawberry or Chocolate), with Pobbles (Strawberry, Lychee or Mango)",
        },
        { name: "Kids Drink", price: "£1.50", description: "" },
        {
          name: "Bek Se Ju - Korean traditional rice wine (13%)",
          price: "£13.50",
          description: "Made of 12 different herbs",
        },
        {
          name: "So Ju - Korean traditional rice wine (20%)",
          price: "£11.50",
          description: "People's wine",
        },
        {
          name: "Hite or Cass Beer - Korean pale lager (4.5%)",
          price: "£4.00",
          description: "",
        },
        { name: "Speckled Hen (5%)", price: "£4.00", description: "" },
        { name: "Kronenbourg (5%)", price: "£4.00", description: "" },
        {
          name: "House wine - Red 175ml (13%)",
          price: "£4.00",
          description: "",
        },
        { name: "House wine - Red 350ml ", price: "£7.70", description: "" },
        { name: "House wine - Red 700ml ", price: "£14.80", description: "" },
        {
          name: "House wine - White 175ml (13%)",
          price: "£4.00",
          description: "",
        },
        { name: "House wine - White 350ml ", price: "£7.70", description: "" },
        { name: "House wine - White 700ml ", price: "£14.80", description: "" },
        { name: "Prosecco 750ml (11%)", price: "£16.50", description: "" },
        { name: "Today's Champagne 750ml", price: "£25.00", description: "Please ask staff for details" },

      ],
    },
  ];

  // const sectionVariants = {
  //   hidden: { opacity: 0, y: -20 },
  //   visible: { opacity: 1, y: 0 },
  // };

  const mealVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        {mealSections.map((section, idx) => (
          <div
            key={section.title}
            className={classes["course-container"]}
            transition={{ delay: idx * 0.3 }}
          >
            <motion.div className={classes.course}>{section.title}</motion.div>
            <div className={classes.divider}></div>
            <div className={classes.divider}></div>
            {section.meals.map((meal) => (
              <motion.div
                key={meal.name}
                variants={mealVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: idx * 0.5 }}
              >
                <Meal
                  name={meal.name}
                  price={meal.price}
                  description={meal.description}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
