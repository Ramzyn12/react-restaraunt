import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ScrollRestoration } from "react-router-dom";

const Root = (props) => {
  return (
    <>
      <Navbar  />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
