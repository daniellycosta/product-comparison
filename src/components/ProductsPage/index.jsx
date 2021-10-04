import { Container, Content } from "./styles";

import { Header } from "src/components/Header";
import { ProductTable } from "src/components/ProductTable";
import { useSelectedProducts } from "src/hooks/useSelectedProducts";

export const ProductsPage = () => {
  const { selectedProducts } = useSelectedProducts();

  return (
    <>
      <Header />
      <Container>
        <Content noElements={!selectedProducts.length}>
          {selectedProducts.length ? (
            <ProductTable />
          ) : (
            <h1>Select one or more products</h1>
          )}
        </Content>
      </Container>
    </>
  );
};
