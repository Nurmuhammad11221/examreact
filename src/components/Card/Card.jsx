import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
  const yol = useNavigate();

  if (!product) return null;

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div 
        onClick={() => yol(`/about/${product._id}`)} 
        className="card h-100 border-0 position-relative" 
        style={{ 
          backgroundColor: '#FBFBFB', 
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
          const body = e.currentTarget.querySelector('.card-body');
          if (body) body.style.borderTop = '2px solid #46A358';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#FBFBFB';
          e.currentTarget.style.boxShadow = 'none';
          const body = e.currentTarget.querySelector('.card-body');
          if (body) body.style.borderTop = '2px solid transparent';
        }}
      >
        <div className="p-4 d-flex justify-content-center align-items-center" style={{ height: '250px' }}>
          <img 
            src={product.pictures?.[0]} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
          /> 
        </div>

        <div className="card-body bg-white pt-3" style={{ borderTop: '2px solid transparent', transition: '0.3s' }}>
          <p className="mb-1 text-dark text-truncate" style={{ fontSize: '16px', fontWeight: '400' }}>
            {product.name}
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