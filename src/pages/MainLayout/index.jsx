import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import TopFooter from "../../components/TopFooter/TopFooter";
import MiniCard from "../../components/MiniCard/MiniCard";
import SecondCard from "../../components/SecondCard/SecondCard";
import MiniCard2 from "../../components/MiniCard2/MiniCard";
// import Card from "../../components/Card/Card";

const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        {/* <Card /> */}
        <Outlet />
        <MiniCard2 />
        <SecondCard />
        <MiniCard />
        <TopFooter />
        <Footer />
    </div>
  );
};    

export default MainLayout;