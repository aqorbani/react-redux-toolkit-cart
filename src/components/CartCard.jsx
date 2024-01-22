import PropTypes from "prop-types";
import { productQuantity, shortenText } from "../helpers/helper";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

const CartCard = ({ data }) => {
  CartCard.propTypes = {
    data: PropTypes.object,
  };
  const state = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const quantity = productQuantity(state, data.id);

  return (
    <div className="flex justify-between w-full p-2 m-2 bg-white border border-gray-200 rounded-lg shadow">
      <img src={data.image} alt={data.title} width={25} height={25} />
      <p>{shortenText(data.title)}</p>
      <div>
        {quantity === 1 && (
          <button className="btn" onClick={() => dispatch(removeItem(data))}>
            <MdOutlineDeleteForever />
          </button>
        )}
        {quantity > 1 && (
          <button className="btn" onClick={() => dispatch(decrease(data))}>
            <FaMinus />
          </button>
        )}
        {!!quantity && <span className="sign p-3">{quantity}</span>}
        {quantity !== 0 && (
          <button className="btn" onClick={() => dispatch(increase(data))}>
            <FaPlus />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartCard;
