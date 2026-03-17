import React, { useState, useEffect } from 'react';
import api from '../../config/axios';

const AboutRiewes = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
  const fetchAllReviews = async () => {
    if (!productId) return;
    try {
      const res = await api.get('/reviews');
      const allReviews = Array.isArray(res.data) ? res.data : (res.data.reviews);
      
      setReviews(allReviews); 

    } catch (err) {
    } 
  };
  fetchAllReviews();
}, [productId]);


  return (
    <div className="container mt-2">
      {reviews.length > 0 ? (
        reviews.map((rev, index) => (
          <div key={rev._id || index} className="mb-4 pb-3 border-bottom animate__animated animate__fadeIn">
            <div className="d-flex justify-content-between">
              <h6 className="fw-bold mb-1" style={{ fontSize: '14px' }}>
                {rev.user?.name || rev.name || "Mijoz"}
              </h6>
            </div>
            <div className="text-warning mb-2" style={{ fontSize: '12px' }}>
              {'★'.repeat(rev.rating || 5)}{'☆'.repeat(5 - (rev.rating))}
            </div>
            <p className="text-muted small mb-0">"{rev.comment || "Izoh yo'q"}"</p>
          </div>
        ))
      ) : (
        <div className="text-center py-5 bg-light rounded border">
          <p className="text-secondary" style={{ fontSize: '10px' }}>
            riewes
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutRiewes;