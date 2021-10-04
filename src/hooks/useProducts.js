import { useState, useEffect, createContext, useContext } from "react";
import { api } from "src/api";

const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    api.get("/products/all").then((response) => {
      const { data } = response;

      setProducts(data.products);
    });
  };

  useEffect(fetchProducts, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};
