import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import api from "../services/config";
import PropTypes from "prop-types";

const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  ProductsProvider.propTypes = {
    children: PropTypes.array,
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

const useProductDetails = (id) => {
  const products = useContext(ProductContext);
  const result = products.find((product) => product.id === id);
  return result;
};

export default ProductsProvider;
export { useProducts, useProductDetails };
