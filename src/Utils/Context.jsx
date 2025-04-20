
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const getProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      localStorage.setItem("products", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("products")) {
      getProducts();
    }
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
