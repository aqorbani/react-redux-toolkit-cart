import { useDispatch, useSelector } from "react-redux";
import { MdPayment } from "react-icons/md";
import { checkout } from "../features/cart/cartSlice";

const CartInfo = () => {
  // const [state, dispatch] = useCart();
  const state = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    <div className="relative h-64">
      <div className="w-full text-lime-600 text-lg font-bold border-b-2 border-dashed border-lime-300">
        info
      </div>
      <div>Total : $ {state.total}</div>
      <div>Items count : {state.itemsCounter}</div>
      <div>Status : {state.checkout === false ? "Pending" : ""}</div>
      <button
        className="absolute bottom-0 w-full inline-flex flex-grow justify-center items-center rounded-md bg-lime-900 px-2 py-1 text-xs font-bold text-white"
        onClick={() => dispatch(checkout())}
      >
        <span>Order</span>
        <MdPayment className="p-1 text-2xl" />
      </button>
    </div>
  );
};

export default CartInfo;
