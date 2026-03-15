import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-white py-3 border-bottom sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src="/Navbarlogo.png" alt="logo" />
          </Link>

          <div className="d-lg-none w-50">
            <input className="form-control" type="search" placeholder="Search..." />
          </div>

          <ul className="navbar-nav flex-row gap-4 m-auto d-none d-lg-flex">
            <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Plant Care</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Blogs</Link></li>
          </ul>

          <div className="d-none d-lg-flex align-items-center gap-4">
            <img src="/Navbarimg2.png" alt="search" style={{ width: "20px" }} />
            <img src="/Navbarimg1.png" alt="cart" style={{ width: "20px" }} />
            <button className="btn btn-success px-4 text-white">Login</button>
          </div>
        </div>
      </nav>

      <div className="d-lg-none position-fixed bottom-0 start-0 w-100 bg-white border-top shadow-lg" style={{ zIndex: 2000 }}>
        <div className="d-flex justify-content-around align-items-center py-2">
          <Link to="/"><img src="/Navbarhome.png" alt="home" style={{ width: "24px" }} /></Link>
          <img src="/Navbarimg3.png" alt="heart" style={{ width: "24px" }} />
          <img src="/Navbarimg1.png" alt="cart" style={{ width: "24px" }} />
          <img src="/Navbarimg4.svg" alt="profile" style={{ width: "24px" }} />
        </div>
      </div>
    </>
  );
};

export default Navbar;