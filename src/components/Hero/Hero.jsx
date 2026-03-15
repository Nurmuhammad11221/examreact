const Hero = () => {
  return (
    <section className="py-4">
      <div className="container">

        <div className="bg-light rounded-4 p-3 p-lg-5">
          <div className="row align-items-center g-3">

            {/* TEXT */}
            <div className="col-6">
              <p className="text-uppercase text-muted small mb-1">
                Welcome to Greenshop
              </p>

              <h1 className="fw-bold mb-2">
                LET'S MAKE A <br />
                BETTER <span className="text-success">PLANET</span>
              </h1>

              <p className="text-muted small">
               We are an online plant shop offering a wide range of cheap and trendy plants. <br /> Use our plants to create an unique Urban Jungle. Order your favorite plants!
              </p>

              <button className="btn btn-success mt-2 px-3 py-1">
                SHOP NOW
              </button>
            </div>

            {/* IMAGE */}
            <div className="col-6 text-center">
              <img
                src="Heroimg.png"
                className="img-fluid"
                style={{ maxHeight: "260px" }}
                alt="plant"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;