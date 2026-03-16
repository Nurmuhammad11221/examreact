import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import SecondCard from "../../components/SecondCard/SecondCard";
import MiniCard from "../../components/MiniCard/MiniCard";
import MiniCard2 from "../../components/MiniCard2/MiniCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const limit = 9;
        const skip = (currentPage - 1) * limit;
        const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
        setProducts(res.data.products);
        setLoading(false);
      } catch (error) {
        console.error("API xatosi:", error);
        setLoading(false);
      } 
    };
    fetchProducts();
  }, [currentPage]);

  return (
    <>
      <Hero /> {/* Faqat Home'da */}
      
      <div className="container py-5">
        <div className="row g-4"> 
          {loading ? (
            <div className="text-center py-5 w-100">
              <div className="spinner-border text-success" role="status"></div>
            </div>
          ) : (
            products.map((item) => (
              <Card key={item.id} product={item} />
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-end mt-5 gap-2">
          {[1, 2, 3, 4].map((pNum) => (
            <button 
              key={pNum} 
              className={`btn btn-sm px-3 ${currentPage === pNum ? 'btn-success text-white' : 'btn-outline-success'}`} 
              onClick={() => setCurrentPage(pNum)}
            > 
              {pNum} 
            </button>
          ))}
        </div>
      </div>

      <SecondCard /> {/* Faqat Home'da */}
      <MiniCard2 />  {/* Faqat Home'da */}
    </>
  );
};

export default Home;