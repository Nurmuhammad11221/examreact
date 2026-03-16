import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// QAVS ICHIDA { product } YOZILISHI SHART!
const AboutHero = ({ product }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('S');

  // Himoya: Agar product hali kelmagan bo'lsa, xato bermasligi uchun
  if (!product) {
    return <div className="text-center p-5">Yuklanmoqda...</div>;
  }

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#F9F9F9' }}>
      <div className="container py-md-5">
        <div className="row g-0 g-md-4 mt-md-4">
          
          {/* CHAP TOMON: RASM */}
          <div className="col-md-6 bg-white p-4 text-center rounded">
            <img 
              src={product.thumbnail} 
              className="img-fluid" 
              alt={product.title} 
              style={{ maxHeight: '350px', objectFit: 'contain' }} 
            />
          </div>

          {/* O'NG TOMON: MA'LUMOTLAR */}
          <div className="col-md-6 ps-md-5 p-4">
            <h2 className="fw-bold text-dark">{product.title}</h2>
            <h4 className="text-success fw-bold mt-3 border-bottom pb-3">
              ${product.price}.00
            </h4>

            <div className="mt-4">
              <h6 className="fw-bold">Short Description:</h6>
              <p className="text-muted">{product.description}</p>
            </div>

            {/* SIZES */}
            <div className="mt-4">
              <h6 className="fw-bold">Size:</h6>
              <div className="d-flex gap-2">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    className={`btn rounded-circle border ${selectedSize === size ? 'btn-success text-white' : 'bg-white'}`}
                    style={{ width: '40px', height: '40px' }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY & BUY NOW */}
            <div className="d-flex align-items-center gap-3 mt-5">
              <div className="d-flex align-items-center border rounded-pill px-2 py-1 bg-white">
                <button className="btn btn-sm border-0 fw-bold" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span className="px-3 fw-bold">{quantity}</span>
                <button className="btn btn-sm border-0 fw-bold" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="btn btn-success px-4 py-2 fw-bold shadow-sm">BUY NOW</button>
              <button className="btn btn-outline-success px-4 py-2 fw-bold">ADD TO CART</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutHero;