import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import TopFooter from "../../components/TopFooter/TopFooter";
import MiniCard from "../../components/MiniCard/MiniCard";
// import Card from "../../components/Card/Card";

const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        {/* <Card /> */}
        <Outlet />
        <MiniCard />
        <TopFooter />
        <Footer />
    </div>
  );
};

export default MainLayout;