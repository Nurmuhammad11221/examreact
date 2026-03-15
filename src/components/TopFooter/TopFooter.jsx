import React from "react";
import './TopFooter.css';

const TopFooter = () => {
  return (
    <div className="topfooter-container">
      <div className="topfooter-logo">
        <img src="/Navbarlogo.png" alt="Logo" />
      </div>

      <div className="topfooter-contacts">
        <div className="topfooter-contact-item gap-5">
          <i className="bi bi-geo-alt"></i>
          <span> <img src="./loc.png" alt="" />70 West Buckingham Ave., Farmingdale, NY 11735</span>
        </div>
        <div className="topfooter-contact-item gap-5">
          <i className="bi bi-envelope"></i>
          <span><img src="./Mes.png" alt="" />contact@greenshop.com</span>
        </div>
        <div className="topfooter-contact-item gap-5">
          <i className="bi bi-telephone"></i>
          <span> <img src="./Calling.png" alt="" />+88 01911 717 490</span>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;