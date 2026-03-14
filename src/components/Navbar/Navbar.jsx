import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary py-3">
        <div className="container d-flex justify-content-between align-items-center">

          <a className="navbar-brand" href="#">
            <img src="Navbarlogo.png" alt="logo" />
          </a>

          <div className="d-lg-none w-50">
            <input
              className="form-control"
              type="search"
              placeholder="Search..."
            />
          </div>

          <ul className="navbar-nav flex-row gap-5 m-auto d-none d-lg-flex">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Shop</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Plant Care</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Blogs</a>
            </li>
          </ul>

          <div className="d-none d-lg-flex align-items-center gap-4">
            <a href="#">
              <img src="Navbarimg2.png" alt="search" style={{ width: "20px" }} />
            </a>

            <a href="#">
              <img src="Navbarimg1.png" alt="cart" style={{ width: "20px" }} />
            </a>

            <button className="btn btn-success px-4">
              Login
            </button>
          </div>

        </div>
      </nav>

      <div className="d-lg-none position-fixed bottom-0 start-0 w-100 bg-white border-top">

        <div className="d-flex justify-content-around py-2">

          <a href="#" className="text-center text-decoration-none text-dark">
            <small><img src="Navbarhome.png" alt="" /></small>
          </a>

          <a href="#" className="text-center text-decoration-none text-dark">
            <small><img src="Navbarimg3.png" alt="" /></small>
          </a>

          <a href="#" className="text-center text-decoration-none text-dark">
            <small><img src="Navbarimg1.png" alt="" /></small>
          </a>

          <a href="#" className="text-center text-decoration-none text-dark">
            <small><img src="Navbarimg4.svg" alt="" /></small>
          </a>

        </div>

      </div>
    </>
  );
};

export default Navbar;