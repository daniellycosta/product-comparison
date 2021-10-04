import { useState, createContext, useContext } from "react";

const SelectedProductsContext = createContext({});

export const SelectedProductsProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const selectNewProduct = (product) => {
    if (selectedProducts.some(({ sku }) => sku === product.sku)) return;
    setSelectedProducts([...selectedProducts, product]);
  };

  const deleteProduct = (productName) => {
    const filteredProducts = selectedProducts.filter(
      (item) => item.name !== productName
    );
    setSelectedProducts(filteredProducts);
  };

  return (
    <SelectedProductsContext.Provider
      value={{ selectedProducts, deleteProduct, selectNewProduct }}
    >
      {children}
    </SelectedProductsContext.Provider>
  );
};

export const useSelectedProducts = () => {
  const context = useContext(SelectedProductsContext);
  return context;
};
