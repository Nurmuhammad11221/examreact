import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import api from '../../config/axios';

const AboutReklama = () => {
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchRelated = async () => {
            try {
                const res = await api.get('/products');
                const data = res.data.products || (Array.isArray(res.data) ? res.data : []);
                setRelatedProducts(data.sort(() => 0.5 - Math.random()).slice(0, 5));
            } catch (err) {
                console.error(err);
            } 
        };
        fetchRelated();
    }, []);

    return (
        <div className="container mt-5 mb-5">
            <div className="border-bottom mb-4">
                <h5 className="text-success fw-bold pb-2 mb-0" style={{ borderBottom: '3px solid #46A358', display: 'inline-block' }}>
                    Related Products
                </h5>
            </div>

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
                {relatedProducts.map((item) => {
                    // Rasm yo'lini tozalash
                    const productImg = item.pictures && item.pictures.length > 0 
                        ? item.pictures[0].replace(/([^:]\/)\/+/g, "$1") 
                        : "https://via.placeholder.com/200";

                    return (
                        <div key={item._id} className="col">
                            <Link to={`/about/${item._id}`} onClick={() => window.scrollTo(0,0)} className="text-decoration-none text-dark">
                                <div className="card h-100 border-0 shadow-sm bg-light">
                                    <div className="d-flex align-items-center justify-content-center p-3" style={{ height: '200px' }}>
                                        <img src={productImg} alt={item.name} className="img-fluid" style={{ maxHeight: '100%' }} />
                                    </div>
                                    <div className="card-body bg-white text-start">
                                        <h6 className="text-truncate mb-1">{item.name}</h6>
                                        <p className="text-success fw-bold mb-0">${item.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AboutReklama;