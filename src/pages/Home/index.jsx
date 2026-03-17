import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import Card from "../../components/Card/Card";  
import Hero from "../../components/Hero/Hero";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const limit = 9;
        const skip = (currentPage - 1) * limit;
        const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
        
        const data = res.data?.products || res.data || [];
        setProducts(Array.isArray(data) ? data : []);
        
      } catch (error) {
        console.error(error);
        setProducts([]); 
      } 
    };
    fetchProducts();
  }, [currentPage]);

  return (
    <>
      <Hero />
      <div className="container py-5">
        <div className="row g-4"> 
          {products.length > 0 ? (
            products.map((item) => (
              <Card key={item._id || item.id} product={item} />
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted">Mahsulotlar topilmadi.</p>
            </div>
          )}
        </div>

        <div className="d-flex justify-content-end mt-5 gap-2">
          {[1, 2, 3, 4].map((pNum) => (
            <button 
              key={pNum} 
              className={`btn btn-sm px-3 ${currentPage === pNum ? 'btn-success text-white' : 'btn-outline-success'}`} 
              onClick={() => {
                setCurrentPage(pNum);
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
              }}
            > 
              {pNum} 
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;