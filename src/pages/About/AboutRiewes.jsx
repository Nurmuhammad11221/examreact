import React, { useState, useEffect } from 'react';
import api from '../../config/axios';

const AboutRiewes = ({ productId, product }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (product && product.reviews) {
      setReviews(product.reviews);
    } else if (productId) {
      const otzivReviews = async () => {
        try {
          const res = await api.get(`/reviews/product/${productId}`);
          setReviews(res.data);
        } catch (err) {
          setReviews([]);
        } finally {
          setLoading(false);
        }
      };
      otzivReviews();
    }
  }, [productId, product]);


  return (
    <div className="container mt-2 animate__animated animate__fadeIn">
      {reviews && reviews.length > 0 ? (
        reviews.map((rev, index) => (
          <div key={index} className="mb-4 pb-3 border-bottom">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="fw-bold mb-1" style={{ fontSize: '14px' }}>
                {rev.reviewerName || "Mijoz"}
              </h6>
              
            </div>
            <div className="text-warning mb-2" style={{ fontSize: '12px' }}>
              {'★'.repeat(rev.rating || rev.stars || 5)}{'☆'.repeat(5 - (rev.rating || rev.stars || 5))}
            </div>
            <p className="text-muted small mb-0">"{rev.comment}"</p>
          </div>
        ))
      ) : (
        <p className="text-muted text-center py-5 small">Ushbu mahsulotga hali sharh qoldirilmagan</p>
      )}
    </div>
  );
};

export default AboutRiewes;