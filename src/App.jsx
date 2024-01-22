import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFound";
// import ProductsProvider from "./context/ProductsContext";
// import CartProvider from "./context/CartContext";
import Layout from "./layouts/layout";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    // <CartProvider>
    //   <ProductsProvider>
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Provider>
    // </ProductsProvider>
    // </CartProvider>
  );
}

export default App;
