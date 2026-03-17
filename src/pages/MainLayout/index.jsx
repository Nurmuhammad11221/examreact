import React from "react";
import { Outlet, useLocation } from "react-router-dom"; 
import Navbar from "../../components/Navbar/Navbar";
import TopFooter from "../../components/TopFooter/TopFooter";
import Footer from "../../components/Footer/Footer";
import MiniCard from "../../components/MiniCard/MiniCard"; 
import MiniCard2 from "../../components/MiniCard2/MiniCard"; 
import SecondCard from "../../components/SecondCard/SecondCard"; 

const MainLayout = () => {
  const location = useLocation();

  const isAboutPage = location.pathname.startsWith("/about");

  return (
    <div>
      <Navbar />
      
      <main>
        <Outlet />
      </main>
      
      {!isAboutPage && (
        <>
          <SecondCard /> 
          <MiniCard2 /> 
        </>
      )}
      <MiniCard />
      
      <TopFooter />
      <Footer />
    </div>
  );
};

export default MainLayout;