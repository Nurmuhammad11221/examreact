import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Link komponenti router uchun shart
import api from '../../config/axios';

const AboutReklama = () => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRelated = async () => {
            try {
                const res = await api.get('/products');
                let data = [];
                if (Array.isArray(res.data)) {
                    data = res.data;
                } else if (res.data && res.data.products) {
                    data = res.data.products;
                }
                // Tasodifiy 5 ta mahsulot
                setRelatedProducts(data.sort(() => 0.5 - Math.random()).slice(0, 5));
            } catch (err) {
                console.error("Related products xatosi:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchRelated();
    }, []);

    // Sahifa o'zgarganda foydalanuvchini tepaga chiqarib qo'yish
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) return null;

    return (
        <div className="container mt-5 mb-5">
            <div className="border-bottom mb-4">
                <h5 className="text-success fw-bold pb-2 mb-0" style={{ borderBottom: '3px solid #46A358', display: 'inline-block', fontSize: '17px' }}>
                    Releted Products
                </h5>
            </div>

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
                {relatedProducts.map((item) => {
                    // ID'ni tekshiramiz: backendda id yoki _id bo'lishi mumkin
                    const currentId = item.id || item._id;

                    return (
                        <div key={currentId} className="col">
                            {/* YO'LNI TEKSHIRING: Agar sizda route /about/:id bo'lsa, shuni yozing */}
                            <Link 
                                to={`/about/${currentId}`} 
                                onClick={handleScrollTop}
                                className="text-decoration-none text-dark"
                            >
                                <div className="card h-100 border-0 shadow-sm" style={{ background: '#fbfbfb', cursor: 'pointer' }}>
                                    <div className="d-flex align-items-center justify-content-center p-3" style={{ height: '220px' }}>
                                        <img 
                                            src={item.image || (item.images && item.images[0])} 
                                            alt={item.name} 
                                            className="img-fluid" 
                                            style={{ maxHeight: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="card-body px-0 pt-2 text-start">
                                        <h6 className="mb-1 text-truncate px-2" style={{ fontSize: '14px', fontWeight: '400' }}>
                                            {item.name}
                                        </h6>
                                        <p className="text-success fw-bold mb-0 px-2">${item.price}.00</p>
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