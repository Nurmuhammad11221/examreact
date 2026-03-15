import React, { useEffect, useState } from "react";
import api from "../../config/axios";


const Home = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const res = await api.get("/products");
    //             console.log(res);
                

    //             setProducts(res.data    ); 
    //         } catch { }
    //     })();
    // }, []);

    return (
        <div>
            {/* {products.map((item) => (
                <Card products={item} />
            ))} */}
        </div>
    );
}

export default Home;
