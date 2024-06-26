import React from "react";
import { Outlet } from "react-router";

import Header from "../components/Header/Header";
const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
