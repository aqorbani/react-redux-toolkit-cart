import { useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductsContext";
import Loading from "../components/Loading";
import { FaStar } from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import { productQuantity } from "../helpers/helper";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";

const ProductDetail = () => {
  const { id } = useParams();

  const productDetails = useProductDetails(+id);

  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, +id);
  console.log(quantity);
  console.log(state);

  const clickHandler = (type) => {
    dispatch({ type, payload: productDetails });
  };

  return (
    <>
      {!productDetails && <Loading />}
      <div className="m-2.5 p-2 bg-white border border-gray-200 rounded-lg shadow md:pb-20">
        <div className="mt-6 sm:mt-10">
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
                          onClick={() => clickHandler("REMOVE_ITEM")}
                        >
                          <MdOutlineDeleteForever />
                        </button>
                      )}
                      {quantity > 1 && (
                        <button
                          className="btn"
                          onClick={() => clickHandler("DECREASE")}
                        >
                          <FaMinus />
                        </button>
                      )}
                      {!!quantity && (
                        <span className="sign p-3">{quantity}</span>
                      )}
                      {quantity === 0 ? (
                        <button
                          className="btn"
                          onClick={() => clickHandler("ADD_ITEM")}
                        >
                          <IoBagCheckOutline />
                        </button>
                      ) : (
                        <button
                          className="btn"
                          onClick={() => clickHandler("INCREASE")}
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
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
