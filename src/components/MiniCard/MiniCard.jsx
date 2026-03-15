import React from "react";

const MiniCard = () => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4 border rounded text-center">
            <img
              src="./Minicard3.png"
              alt="Garden Care"
              className="mb-3"
              style={{ width: "60px", height: "60px" }}
            />
            <h5>Garden Care</h5>
            <p style={{ fontSize: "14px" }}>
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4 border rounded text-center">
            <img
              src="./MiniCard2.png"
              alt="Plant Renovation"
              className="mb-3"
              style={{ width: "60px", height: "60px" }}
            />
            <h5>Plant Renovation</h5>
            <p style={{ fontSize: "14px" }}>
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4 border rounded text-center">
            <img
              src="./Minicard3.png"
              alt="Watering Garden"
              className="mb-3"
              style={{ width: "60px", height: "60px" }}
            />
            <h5>Watering Garden</h5>
            <p style={{ fontSize: "14px" }}>
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center">
          <h5 className="mb-3">Would you like to join newsletters?</h5>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="enter your email address..."
            />
            <button className="btn btn-success">Join</button>
          </div>
          <p style={{ fontSize: "14px" }}>
            We usually post offers and challenges in newsletter. We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
          </p>
        </div>

      </div>
    </div>
  );
};

export default MiniCard;