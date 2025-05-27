import React from "react";
import Places from "../components/Places/Places";
import { useLocation } from "react-router-dom";
import Packages from "../components/Packages/Packages";

const PackagesRoute = () => {
  return (
    <>
      <div className="pt-14">
        {location.pathname === "/packages" ? <Packages /> : <Places />}
      </div>
    </>
  );
};

export default PackagesRoute;
