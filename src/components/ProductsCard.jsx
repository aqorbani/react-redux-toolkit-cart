import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { shortenText } from "../helpers/helper";
// import { useCart } from "../context/CartContext";

const ProductsCard = ({ data }) => {
  ProductsCard.propTypes = {
    data: PropTypes.any,
  };
  const { id, title, image, price } = data;

  // const [state, dispatch] = useCart();

  // const quantity = productQuantity(state, id);
  const quantity = 0;

  const clickHandler = (type) => {
    return type;
    // dispatch({ type, payload: data });
  };

  return (
    <div className="w-full md:w-1/5 md:mb-10 m-2 p-3 bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
      <img src={image} alt={title} className="w-full sm:48 md:h-52 lg:h-56" />
      <Link to={`/products/${id}`}>
        <h3 className="flex p-3 text-lime-700 font-bold">
          {shortenText(title)}
        </h3>
      </Link>
      <p className="p-2">${price}</p>
      <div className="flex justify-between p-3">
        {quantity === 1 && (
          <button className="btn" onClick={() => clickHandler("REMOVE_ITEM")}>
            <MdOutlineDeleteForever />
          </button>
        )}
        {quantity > 1 && (
          <button className="btn" onClick={() => clickHandler("DECREASE")}>
            <FaMinus />
          </button>
        )}
        {!!quantity && <span className="sign p-3">{quantity}</span>}
        {quantity === 0 ? (
          <button
            className="btn w-full flex justify-center"
            onClick={() => clickHandler("ADD_ITEM")}
          >
            <IoMdCart />
          </button>
        ) : (
          <button className="btn" onClick={() => clickHandler("INCREASE")}>
            <FaPlus />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsCard;
