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
          name: "So Bulgogi (Beef)",
          price: "£11.00",
          description:
            "Stir fried lean beef mixed in with vegetables. Served in a sizzling plate.",
        },
        {
          name: "Oh Ri Bulgogi (Duck)",
          price: "£12.00",
          description:
            "Stir fried duck mixed in with vegetables. Served in a sizzling plate.",
        },
        {
          name: "Dae Gi Bulgogi (Pork)",
          price: "£11.00",
          description:
            "Stir fried pork mixed in with sweet chilli sauce and vegetables, served in a sizzling plate.",
        },
        {
          name: "Dack Bulgogi (Chicken)",
          price: "£11.00",
          description:
            "Stir fried chicken mixed in with vegetables, served in a sizzling plate.",
        },
        {
          name: "Seared Salmon",
          price: "£12.00",
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
          price: "£11.50",
          description:
            "Salmon & rice topped with Carrots, Courgettes, kale, Red + white Cabbage with Soy and Chilli Sauce.",
        },
        {
          name: "Tofu Bibimbap",
          price: "£10.50",
          description:
            "A rice bowl topped with crispy tofu, carrot, courgette, kale, and red & white cabbage, finished with a sprinkle of sesame, spring onion, gochujang and soy sauce.",
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
          name: "Ice Cream Mochi - 2pcs",
          price: "£4.00",
          description: "Chocolate, Vanilla or Green Tea",
        },
        {
          name: "Orange Chiffon Cake with Ice Cream",
          price: "£4.00",
          description: "",
        },
        { name: "Chef's Special Cake", price: "£5.00", description: "" },
      ],
    },
    {
      title: "Drinks",
      meals: [
        { name: "Korean Rice Green Tea", price: "£2.75", description: "" },
        { name: "Korean Ginseng Tea", price: "£3.00", description: "" },
        {
          name: "Korean Cinnamon Juice",
          price: "£2.75",
          description: "",
        },
        { name: "Korean Orange Juice", price: "£2.75", description: "" },
        { name: "Korean Pear Juice", price: "£2.75", description: "" },
        { name: "Aloe Vera Juice", price: "£2.75", description: "" },
        { name: "Coffee - white or black", price: "£2.75", description: "" },
        { name: "English Breakfast Tea", price: "£2.75", description: "" },
        { name: "Still / Sparkling Water", price: "£2.50", description: "" },
        { name: "Coke - Original or Diet", price: "£2.75", description: "" },
        { name: "Lemonade (7-up)", price: "£2.75", description: "" },
        {
          name: "Bubble Tea",
          price: "£3.50",
          description:
            "Naturally flavoured fruit powders mixed with semi skimmed milk. Bubble tea (Taro, Mango, Coconut, Honeydew Melon, Strawberry or Chocolate), with Pebbles (Strawberry, Lychee or Mango)",
        },
        { name: "Fruity Strawberry (330ml)", price: "£2.00", description: "" },
        { name: "Fruity Orange (200ml)", price: "£1.50", description: "" },
        {
          name: "Bek Se Ju - Korean Herbal Wine 13% (375ml)",
          price: "£13.50",
          description: "",
        },
        {
          name: "Chamosul So Ju (Classic) - Korean Spirit (Vodka) 20.1% (350ml)",
          price: "£11.50",
          description: "",
        },
        {
          name: "Chamosul So Ju (Fresh) - Korean Spirit (Vodka) 16.9% (350ml)",
          price: "£11.50",
          description: "",
        },
        {
          name: "Chamosul So Ju (Flavoured) - Korean Spirit (Vodka) 13% (350ml)",
          price: "£11.50",
          description:
            "Choice of flavours: Grapefruit, Green Grape, Plum, Strawberry, Peach",
        },
        {
          name: "Cass - Korean Pale Lager 4.5% (330ml)",
          price: "£4.00",
          description: "",
        },
        { name: "Speckled Hen 4.8% (500ml)", price: "£4.50", description: "" },
        { name: "Doom Bar 4.3% (500ml)", price: "£4.50", description: "" },
        { name: "London Pride 4.7% (500ml)", price: "£4.50", description: "" },
        { name: "Kronenbourg 5.0% (500ml)", price: "£4.50", description: "" },
        {
          name: "Adnams Ghost Ship Pale Ale Alcohol Free 0.5% (330ml)",
          price: "£3.50",
          description: "",
        },
        {
          name: "White House Wine 13% (175ml) - Glass",
          price: "£4.50",
          description: "",
        },
        {
          name: "White House Wine 13% (350ml) - Glass",
          price: "£8.00",
          description: "",
        },
        {
          name: "Mud House, Chile, Suavignon Blanc 12.5% (750ml) - Bottle",
          price: "£19.00",
          description: "",
        },
        {
          name: "Oyster Bay, New Zealand, Sauvignon Blanc 13% (750ml) - Bottle",
          price: "£22.00",
          description: "",
        },
        {
          name: "Red House Wine 13% (175ml) - Glass",
          price: "£4.50",
          description: "",
        },
        {
          name: "Red House Wine 13% (350ml) - Glass",
          price: "£8.00",
          description: "",
        },
        {
          name: "Casillero Del Diablo, Cabernet Sauvingon 13.5% (750ml) - Bottle",
          price: "£19.00",
          description: "",
        },
        {
          name: "Campo Viejo, Rioja Tempranillo 13.5% (750ml) - Bottle",
          price: "£19.00",
          description: "",
        },
        {
          name: "Yellow Tail, Australia, Shiraz 13.5% (750ml) - Bottle",
          price: "£22.00",
          description: "",
        },
        {
          name: "Fiora Rosa, Italy, Pinot Grigio Rose 11.5% (750ml) - Bottle",
          price: "£22.00",
          description: "",
        },
        {
          name: "Prosecco Spumante Extra Dry 10.5% (750ml) - Bottle",
          price: "£19.00",
          description: "",
        },
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
