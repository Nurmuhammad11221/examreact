const Hero = () => {
  return (
    <section className="py-2 py-lg-4">
      <div className="container">
        <div className="bg-light rounded-4 p-3 p-lg-5 position-relative overflow-hidden">
          <div className="row align-items-center g-2 g-lg-3 flex-nowrap"> 

            <div className="col-7 col-md-6"> 
              <p className="text-uppercase text-muted mb-1">
                Welcome to Greenshop
              </p>

              <h1 className="fw-bold mb-2">
                LET'S MAKE A <br />
                BETTER <span className="text-success">PLANET</span>
              </h1>

              <p className="text-muted mb-2 d-none d-sm-block" style={{ fontSize: 'calc(0.7rem + 0.2vw)' }}>
                We are an online plant shop offering a wide range of cheap and trendy plants.
              </p>

              <button 
                className="btn btn-success mt-1 px-2 py-1 px-lg-4 py-lg-2 fw-bold" 
                style={{ fontSize: 'calc(0.6rem + 0.2vw)', borderRadius: '6px' }}>
                SHOP NOW
              </button>
            </div>

            <div className="col-5 col-md-6 text-center">
              <img src="/Heroimg.png"className="img-fluid"style={{ maxHeight: "clamp(120px, 25vw, 260px)", width: "auto" }}/>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;