import { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";
// import { useProducts } from "../context/ProductsContext";
import Loading from "../components/Loading";
import {
  filterProductsByCategory,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);

  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //Defualt useEffect
  useEffect(() => {
    setDisplayed(products);

    setQuery(getInitialQuery(searchParams));
  }, [products]);

  //Search and Filter useEffect
  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);

    finalProducts = filterProductsByCategory(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);

  return (
    <div className="items-col bg-white">
      <div className="flex-col lg:flex lg:flex-row-reverse w-full">
        <div className="w-full lg:w-1/6 p-2">
          <SideBar
            query={query}
            setQuery={setQuery}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div className="flex flex-wrap justify-between items-center w-full lg:w-5/6">
          {loading && <Loading wh={80} />}
          {displayed.map((item) => (
            <ProductsCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
