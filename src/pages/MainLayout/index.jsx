import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import TopFooter from "../../components/TopFooter/TopFooter";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Mana shu yerga yuqoridagi Home kodi kelib tushadi */}
      </main>
      <TopFooter />
      <Footer />
    </div>
  );
};

export default MainLayout;