const Footer = () => {
  return (
    <footer style={{background: "#FBFBFB"}} className="mt-5 pt-5 border-top">
      <div className="container">
        <div className="row gy-4">

          {/* My Account */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold">My Account</h6>
            <ul className="list-unstyled text-muted small">
              <li>My Account</li>
              <li>Our stores</li>
              <li>Contact us</li>
              <li>Career</li>
              <li>Specials</li>
            </ul>
          </div>

          {/* Help & Guide */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Help & Guide</h6>
            <ul className="list-unstyled text-muted small">
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Shipping & Delivery</li>
              <li>Product Policy</li>
              <li>How to Return</li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Categories</h6>
            <ul className="list-unstyled text-muted small">
              <li>House Plants</li>
              <li>Potter Plants</li>
              <li>Seeds</li>
              <li>Small Plants</li>
              <li>Accessories</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Social Media</h6> 

            <div className="d-flex gap-2 mb-3 social-icons">
              <a href="https://www.facebook.com" className="rounded">
                <img src="./Facebook.png" alt="" />
              </a>
              <a href="https://www.instagram.com" className="rounded">
                <img src="./Instagram.png" alt="" />
              </a>
              <a href="https://x.com" className="rounded">
                <img src="twitter.png" alt="" />
              </a>
              <a href="https://www.linkedin.com" className="rounded">
                <img src="in.png" alt="" />
              </a>
              <a href="https://www.youtube.com" className="rounded">
                <img src="youtube.png" alt="" />
              </a>
            </div>

            <h6 className="fw-bold">We accept</h6> <br/>
            <div className="d-flex gap-2 align-items-center">
              <img src="allpaymet.png" height="22" />
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center border-top mt-4 pt-3 pb-2 small text-muted">
          © 2021 GreenShop. All Rights Reserved.
        </div>
      </div>

      <style jsx>{`
        .social-icons img {
          width: 30px;
          height: 30px;
          transition: transform 0.3s ease;
        }
        .social-icons a:hover img {
          transform: scale(1.2);
        }
      `}</style>
    </footer>
  );
};

export default Footer;