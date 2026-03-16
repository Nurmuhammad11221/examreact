import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../config/axios';
import AboutHero from './AboutHero';
import Aboutdes from './Aboutdes';
import AboutRiewes from './AboutRiewes';
import AboutReklama from './AboutReklama'; // <-- 1. Import qilish

const About = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await api.get(`/products/${id || 1}`);
                setProduct(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div className="text-center py-5">Yuklanmoqda...</div>;

    return (
        <div className="about-page-wrapper">
            <AboutHero product={product} />

            <div className="container" style={{ marginTop: '80px', marginBottom: '20px' }}>
                <div className="d-flex align-items-center gap-4 border-bottom">
                    <button
                        onClick={() => setActiveTab('description')}
                        className={`btn p-0 pb-2 border-0 fw-bold rounded-0 ${activeTab === 'description' ? 'text-success border-bottom border-success' : 'text-muted'}`}
                        style={{ borderBottomWidth: '3px !important', marginBottom: '-1px' }}
                    >
                        Product Description
                    </button>

                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`btn p-0 pb-2 border-0 fw-bold rounded-0 ${activeTab === 'reviews' ? 'text-success border-bottom border-success' : 'text-muted'}`}
                        style={{ borderBottomWidth: '3px !important', marginBottom: '-1px' }}
                    >
                        Reviews
                    </button>
                </div>

                <div className="mt-4">
                    {activeTab === 'description' ? (
                        <Aboutdes product={product} />
                    ) : (
                        <AboutRiewes
                            productId={product.id || product._id}
                            product={product}
                        />
                    )}
                </div>
            </div>

            {/* --- 2. Related Products qismini shu yerga qo'yamiz --- */}
            <AboutReklama />
        </div>
    );
};

export default About;