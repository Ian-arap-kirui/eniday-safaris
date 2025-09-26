import React, { useState } from "react";
import Navibar from "../components/Navibar/Navibar";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import InquiryPopup from "../components/OrderPopup/InquiryPopup";

const Layout = () => {
  const [inquiryPopup, setInquiryPopup] = useState(false);

const handleInquiryPopup = () => {
  setInquiryPopup(true);
};
  return (
    <>
     <Navibar handleInquiryPopup={handleInquiryPopup} />
      <Outlet />
      <Footer />
      <InquiryPopup inquiryPopup={inquiryPopup} setInquiryPopup={setInquiryPopup} />
    </>
  );
};

export default Layout;
