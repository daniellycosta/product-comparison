import { GlobalStyle } from "./styles/global";
import { ProductsPage } from "./components/ProductsPage";

import { ProductsProvider } from "src/hooks/useProducts";
import { SelectedProductsProvider } from "src/hooks/useSelectedProducts";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ProductsProvider>
        <SelectedProductsProvider>
          <ProductsPage />
        </SelectedProductsProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
