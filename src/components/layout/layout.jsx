import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../navbar/navbar";

import Footer from "../footer/footer";
const Layout = () => {
  return (
    <>
      <NavbarComponent />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
