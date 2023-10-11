import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Loader } from "../components/Loader/Loader";
import { Outlet } from "react-router-dom";

const View = () => {
  return (
    <div>
      <Navbar />
      <Loader>
        <Outlet />
      </Loader>
      <Footer />
    </div>
  );
};

export default View;
