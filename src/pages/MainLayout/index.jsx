import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import TopFooter from "../../components/TopFooter/TopFooter";
import Footer from "../../components/Footer/Footer";
import MiniCard from "../../components/MiniCard/MiniCard"; // Import qilish

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Home yoki About sahifasi shu yerga tushadi */}
      </main>
      
      {/* MiniCard barcha sahifalar uchun pastda chiqadi */}
      <MiniCard /> 
      
      <TopFooter />
      <Footer />
    </div>
  );
};

export default MainLayout;