import { useEffect, useState } from "react";

import { Container, Content, SearchContainer } from "./styles";
import { AutoCompleteInput } from "src/components/AutoCompleteInput";

import { useProducts } from "src/hooks/useProducts";
import { useSelectedProducts } from "src/hooks/useSelectedProducts";

export const Header = () => {
  const [formattedProducts, setFormattedProducts] = useState([]);
  const { selectedProducts, selectNewProduct } = useSelectedProducts();
  const products = useProducts();

  useEffect(() => {
    if (products) {
      const nameArrays = products.reduce((array, product) => {
        if (selectedProducts.some(({ sku }) => sku === product.sku))
          return array;

        return [...array, product.name];
      }, []);

      setFormattedProducts(nameArrays);
    }
  }, [products, selectedProducts]);

  const handleClickOption = (optionValue) => {
    const productSelect = products.find(({ name }) => name === optionValue);
    if (!productSelect) return;

    selectNewProduct(productSelect);
  };

  return (
    <Container>
      <Content>
        <h1>Product Comparison</h1>
        <SearchContainer>
          <div>
            <AutoCompleteInput
              options={formattedProducts}
              onClickOption={handleClickOption}
            />
          </div>
        </SearchContainer>
      </Content>
    </Container>
  );
};
