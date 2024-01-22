import PropTypes from "prop-types";
import { productQuantity, shortenText } from "../helpers/helper";
import { useCart } from "../context/CartContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";

const CartCard = ({ data }) => {
  CartCard.propTypes = {
    data: PropTypes.object,
  };
  const [state, dispatch] = useCart();
  const quantity = productQuantity(state, data.id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className="flex justify-between w-full p-2 m-2 bg-white border border-gray-200 rounded-lg shadow">
      <img src={data.image} alt={data.title} width={25} height={25} />
      <p>{shortenText(data.title)}</p>
      <div>
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
        {quantity !== 0 && (
          <button className="btn" onClick={() => clickHandler("INCREASE")}>
            <FaPlus />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartCard;
