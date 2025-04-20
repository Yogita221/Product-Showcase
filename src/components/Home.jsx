

import React, { useEffect, useState, useContext } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category === "undefined" || !category) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) => p.category === category);
      setFilteredProducts(filtered);
    }
  }, [category, products]);

  return Array.isArray(products) && products.length > 0 ? (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-400">{p.title}</h1>
            </Link>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
