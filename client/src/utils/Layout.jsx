import React from "react";
import NavBar from "../components/Navbar/NavBar";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import MainFooter from "../components/Footer/MainFooter";
import { Outlet } from "react-router-dom";

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
