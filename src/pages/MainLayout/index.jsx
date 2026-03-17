import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // 1. useLocation qo'shildi
import Navbar from "../../components/Navbar/Navbar";
import TopFooter from "../../components/TopFooter/TopFooter";
import Footer from "../../components/Footer/Footer";
import MiniCard from "../../components/MiniCard/MiniCard"; 
import MiniCard2 from "../../components/MiniCard2/MiniCard"; 
import SecondCard from "../../components/SecondCard/SecondCard"; 

const MainLayout = () => {
  const location = useLocation(); // 2. Manzilni aniqlaymiz

  // 3. Agar manzil "/about" bilan boshlansa, true bo'ladi
  const isAboutPage = location.pathname.startsWith("/about");

  return (
    <div>
      <Navbar />
      
      <main>
        <Outlet />
      </main>
      
      {/* 4. Faqat About sahifasi BO'LMAGANDAGINA ko'rsatamiz */}
      {!isAboutPage && (
        <>
          <SecondCard /> 
          <MiniCard2 />
          <MiniCard /> 
        </>
      )}
      
      <TopFooter />
      <Footer />
    </div>
  );
};

export default MainLayout;