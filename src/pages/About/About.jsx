import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../config/axios';

const About = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('S');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id || 1}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Ma'lumot olishda xato:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center py-5">Yuklanmoqda...</div>;

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#F9F9F9' }}>
      <div className="container py-md-5">
        {/* Breadcrumb - Faqat Desktopda qoladi */}
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/" className="text-decoration-none text-dark fw-bold">Home</a></li>
          </ol>
        </nav>

        <div className="row g-0 g-md-4 mt-md-4">
          {/* CHAP TOMON: RASM */}
          <div className="col-md-6 position-relative">
            {/* Mobil Tugmalar */}
            <div className="d-flex d-md-none justify-content-between position-absolute top-0 w-100 p-4" style={{ zIndex: 10 }}>
              <button onClick={() => navigate(-1)} className="btn bg-white rounded-circle shadow-sm border-0" style={{width: '40px', height: '40px'}}>‹</button>
              <button className="btn bg-white rounded-circle shadow-sm border-0" style={{width: '40px', height: '40px', color: '#46A358'}}>♡</button>
            </div>

            <div className="d-flex flex-column flex-md-row p-4 p-md-0 bg-white" style={{ 
                borderBottomLeftRadius: window.innerWidth < 768 ? '40px' : '0', 
                borderBottomRightRadius: window.innerWidth < 768 ? '40px' : '0' 
            }}>
              {/* Thumbnails - Desktopda qoladi */}
              <div className="d-none d-md-flex flex-column gap-3 me-3">
                {[1, 2, 3, 4].map((img) => (
                  <img key={img} src={product.thumbnail} className="border p-1" style={{ width: '80px', height: '80px', cursor: 'pointer', objectFit: 'contain' }} alt="thumb" />
                ))}
              </div>
              {/* Asosiy rasm */}
              <div className="flex-grow-1 text-center py-4">
                <img src={product.thumbnail} className="img-fluid" alt={product.title} style={{ maxHeight: '300px', objectFit: 'contain' }} />
                {/* Mobil Dots */}
                <div className="d-flex d-md-none justify-content-center gap-1 mt-3">
                  <div style={{width: '20px', height: '6px', backgroundColor: '#46A358', borderRadius: '10px'}}></div>
                  <div style={{width: '6px', height: '6px', backgroundColor: '#B2D8B1', borderRadius: '50%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* O'NG TOMON: MA'LUMOTLAR */}
          <div className="col-md-6 ps-md-5 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="fw-bold text-dark m-0 h4">{product.title}</h2>
              
            </div>

            <h4 className="text-success fw-bold d-none d-md-block mt-3 border-bottom pb-3">${product.price}.00</h4>

            <div className="mt-4">
              <h6 className="fw-bold small">Short Description:</h6>
              <p className="text-muted small" style={{ lineHeight: '22px' }}>{product.description}</p>
            </div>

            <div className="mt-4">
              <h6 className="fw-bold small">Size:</h6>
              <div className="d-flex gap-2">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button key={size} onClick={() => setSelectedSize(size)}
                    className={`btn rounded-circle border d-flex align-items-center justify-content-center ${selectedSize === size ? 'btn-success text-white' : 'bg-white text-dark'}`}
                    style={{ width: '38px', height: '38px', fontSize: '13px', fontWeight: 'bold' }}>{size}</button>
                ))}
              </div>
            </div>

            
        <div className="d-none d-md-flex flex-wrap align-items-center gap-3 mt-5">
              <div className="d-flex align-items-center border rounded-pill px-2 py-1 bg-white">
                <button className="btn btn-sm border-0 fw-bold" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span className="px-3 fw-bold">{quantity}</span>
                <button className="btn btn-sm border-0 fw-bold" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              
              <button className="btn btn-success px-4 py-2 fw-bold text-white shadow-sm">BUY NOW</button>
              <button className="btn btn-outline-success px-4 py-2 fw-bold">ADD TO CART</button>
              <button className="btn btn-outline-success py-2 px-3 rounded shadow-sm">
                  <span style={{fontSize: '20px'}}>♡</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex d-md-none bg-white p-3 shadow-lg fixed-bottom align-items-center justify-content-between" 
           style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}>
        <div>
          <div className="d-flex align-items-center gap-2 mb-1">
             <div className="d-flex align-items-center bg-light rounded-pill px-2">
               <button className="btn btn-sm border-0 fw-bold" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
               <span className="px-2 fw-bold">{quantity}</span>
               <button className="btn btn-sm border-0 fw-bold" onClick={() => setQuantity(quantity + 1)}>+</button>
             </div>
          </div>
          <h3 className="fw-bold mb-0 text-success" style={{ fontSize: '20px' }}>${product.price * quantity}.00</h3>
        </div>
        <div className="d-flex gap-2">
           <button className="btn btn-success rounded-pill px-4 fw-bold shadow-sm" style={{backgroundColor: '#46A358', border: 'none'}}>Buy Now</button>
           <button className="btn bg-light rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{width: '45px', height: '45px'}}>
              <img src="/Navbarimg1.png" alt="cart" style={{width: '18px'}} />
           </button>
        </div>
      </div>

      <div className="d-flex d-md-none bg-white p-3 shadow-lg fixed-bottom align-items-center justify-content-between" 
           style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px', zIndex: 1000 }}>
        <div>
          <div className="d-flex align-items-center bg-light rounded-pill px-2 mb-1">
             <button className="btn btn-sm border-0 fw-bold" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
             <span className="px-2 fw-bold">{quantity}</span>
             <button className="btn btn-sm border-0 fw-bold" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <h3 className="fw-bold mb-0 text-success" style={{ fontSize: '20px' }}>${(product.price * quantity).toFixed(2)}</h3>
        </div>
        <div className="d-flex gap-2">
           <button className="btn btn-success rounded-pill px-4 py-2 fw-bold shadow-sm" style={{backgroundColor: '#46A358', border: 'none'}}>BUY NOW</button>
           <button className="btn bg-light rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{width: '45px', height: '45px'}}>
              <img src="/Navbarimg1.png" alt="cart" style={{width: '18px'}} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default About;