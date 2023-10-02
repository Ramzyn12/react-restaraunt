import React from "react";
import Menu from "../../components/Menu/Menu";
import { Helmet } from "react-helmet";

const MenuPage = () => {
  return (
    <>
      <Helmet>
        <title>Gangnam Stevenage - Menu Page</title>
        <meta name="description" content="Find our authentic korean menu here" />
      </Helmet>
      <Menu />
    </>
  );
};

export default MenuPage;
