import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { FaStar } from "react-icons/fa6";
// import { useCart } from "../context/CartContext";
// import { productQuantity } from "../helpers/helper";
import { IoMdCart } from "react-icons/io";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/product/productSlice";
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productDetails = useSelector((store) =>
    store.product.products.find((item) => item.id === +id)
  );

  const { loading } = useSelector((store) => store.product);
  const { cart } = useSelector((store) => store.cart);
  console.log(cart)

  // const [state, dispatch] = useCart();

  // const quantity = productQuantity(state, +id);
  const quantity = 0;



  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="m-2.5 p-2 bg-white border border-gray-200 rounded-lg shadow md:pb-20">
        <div className="mt-6 sm:mt-10">
          {productDetails && (
            <div>
              <div className="flex flex-col md:flex-row w-full gap-6 h-max">
                <div className="w-full md:w-1/3  lg:w-1/4 overflow-hidden rounded-xl">
                  <img
                    src={productDetails.image}
                    alt={productDetails.title}
                    className="w-full"
                  />
                </div>
                <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col justify-between">
                  <div>
                    <h1 className="text-3xl text-lime-900 font-semibold sm:text-4xl">
                      {productDetails.title}
                    </h1>
                    <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                      {productDetails.description}
                    </p>
                    <span className="my-3 text-xl text-yellow-400 flex items-center gap-1 sm:my-6">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </span>
                    <span className="text-xl text-lime-700 font-semibold sm:text-2xl">
                      ${productDetails.price}
                    </span>
                  </div>
                  <div className=" ">
                    <div className="w-full text-left my-4">
                      <div className="flex p-3">
                        {quantity === 1 && (
                          <button
                            className="btn"
                            onClick={() => dispatch(removeItem(productDetails))}
                          >
                            <MdOutlineDeleteForever />
                          </button>
                        )}
                        {quantity > 1 && (
                          <button
                            className="btn"
                            onClick={() => dispatch(decrease(productDetails))}
                          >
                            <FaMinus />
                          </button>
                        )}
                        {!!quantity && (
                          <span className="sign p-3">{quantity}</span>
                        )}
                        {quantity === 0 ? (
                          <button
                            className="btn w-full flex justify-center"
                            onClick={() => dispatch(addItem(productDetails))}
                          >
                            <IoMdCart />
                          </button>
                        ) : (
                          <button
                            className="btn"
                            onClick={() => dispatch(increase(productDetails))}
                          >
                            <FaPlus />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
