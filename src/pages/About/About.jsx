import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../config/axios';
import AboutHero from './AboutHero';
import Aboutdes from './Aboutdes';
import AboutRiewes from './AboutRiewes';
import AboutReklama from './AboutReklama'; 

const About = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await api.get(`/products/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.error(err);
            } 
        };
        if (id) fetchProduct();
    }, [id]);

    return (
        <div className="about-page-wrapper">
            <AboutHero product={product} />
            <div className="container mt-5">
                <div className="d-flex gap-4 border-bottom">
                    <button 
                      onClick={() => setActiveTab('description')} 
                      className={`btn pb-2 rounded-0 border-0 ${activeTab === 'description' ? 'text-success border-bottom border-success fw-bold' : 'text-muted'}`}
                      style={{ borderBottomWidth: '3px' }}
                    >
                      Product Description
                    </button>
                    <button 
                      onClick={() => setActiveTab('reviews')} 
                      className={`btn pb-2 rounded-0 border-0 ${activeTab === 'reviews' ? 'text-success border-bottom border-success fw-bold' : 'text-muted'}`}
                      style={{ borderBottomWidth: '3px' }}
                    >
                      Reviews
                    </button>
                </div>
                <div className="mt-4">
                    {activeTab === 'description' ? (
                        <Aboutdes product={product} />
                    ) : (
                        <AboutRiewes productId={id} product={product} />
                    )}
                </div>
            </div>
            <AboutReklama />
        </div>
    );
};

export default About;