import React from "react";

import { Outlet } from "react-router-dom";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import NavBar from "../components/Navbar/NavBar";
import MainFooter from "../components/Footer/MainFooter";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <NavBar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <MainFooter />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Layout;
