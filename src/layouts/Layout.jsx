import { Link } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import PropTypes from "prop-types";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
// import { useCart } from "../context/CartContext";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.object,
  };

  // const [state] = useCart();

  return (
    <>
      <header className="flex justify-between p-2 m-2 bg-white border border-gray-200 rounded-lg shadow">
        <Link to="/products" className="sign">
          <div className="flex">
            <div className="flex p-2 pt-3">
              <FaReact />
              +
              <SiTailwindcss />
            </div>
            <p className="p-2">Online Shop</p>
          </div>
        </Link>
        <Link
          to="/checkout"
          className="relative inline-flex items-center rounded-md bg-lime-900 px-2 py-1 text-xs font-bold text-white"
        >
          {/* {!!state.itemsCounter && (
            <>
              <span className="p-1 animate-bounce duration-[2000ms]">{state.itemsCounter}</span>
            </>
          )} */}
          <HiMiniShoppingCart className="p-1 text-2xl" />
        </Link>
      </header>
      {children}
      <footer className="flex justify-center p-2 m-2 bg-white border border-gray-200 rounded-lg shadow">
        © 2024 A.Qorbani . All rights reserved.
      </footer>
    </>
  );
};

export default Layout;
