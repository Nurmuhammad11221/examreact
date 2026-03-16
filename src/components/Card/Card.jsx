import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
  const yol = useNavigate();


  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div 
        onClick={() => yol(`/about/${product.id}`)} 
        className="card h-100 border-0 position-relative" 
        style={{ 
          backgroundColor: '#FBFBFB', 
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
          e.currentTarget.querySelector('.card-body').style.borderTop = '2px solid #46A358';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#FBFBFB';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.querySelector('.card-body').style.borderTop = '2px solid transparent';
        }}
      >
        <div className="p-4 d-flex justify-content-center align-items-center" style={{ height: '250px' }}>
          <img src={product.thumbnail} alt={product.title} style={{ maxHeight: '100%', }}/> 
        </div>

        <div className="card-body bg-white pt-3" style={{ borderTop: '2px solid transparent', transition: '0.3s' }}>
          <p className="mb-1 text-dark" style={{ fontSize: '16px', fontWeight: '400' }}>
            {product.title}
          </p>
          <h6 className="fw-bold text-success" style={{ fontSize: '18px' }}>
            ${product.price}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Card;