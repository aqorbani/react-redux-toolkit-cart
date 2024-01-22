import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import CartInfo from "../components/CartInfo";
// import { useCart } from "../context/CartContext";

const Checkout = () => {
  // const [state] = useCart();
  const state = useSelector(store=>store.cart)
  // console.log(state.selectedItems);
  if (state.selectedItems.length == 0) {
    return (
      <p className="flex justify-center py-32 m-2 bg-white border border-gray-200 rounded-lg shadow">
        Cart is empty.
      </p>
    );
  }
  return (
    <div className="flex flex-col md:flex-row p-2 m-2 py-12 bg-white border border-gray-200 rounded-lg shadow">
      <div className="w-full md:w-3/5 lg:w-3/4 flex justify-center items-center flex-col p-2 m-2">
        {state.selectedItems.map((item) => (
          <CartCard key={item.id} data={item} />
        ))}
      </div>
      <div className="w-full md:w-2/5 lg:w-1/4 p-2 m-2 bg-white border border-gray-200 rounded-lg shadow">
        <CartInfo />
      </div>
    </div>
  );
};

export default Checkout;
