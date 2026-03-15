import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
// import Card from "../../components/Card/Card";

const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        {/* <Card /> */}
        <Outlet />

        <Footer />
    </div>
  );
};

export default MainLayout;