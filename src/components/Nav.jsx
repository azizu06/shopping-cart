import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { ShoppingCart } from "lucide-react";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const cartCount = Object.values(cart).reduce((total, val) => total + val, 0);
  const btnStyle =
    "cursor-pointer p-4 hover:bg-blue-300 gap-2 flex items-center";
  return (
    <div className="fixed inset-x-0 top h-16 z-50">
      <nav className="flex w-screen backdrop-blur justify-between gap-6 rounded-l border px-12 py-3">
        <Link to="/" className={btnStyle}>
          SpaceShop
        </Link>
        <div className="flex gap-5">
          <Link to="/" className={btnStyle}>
            Home
          </Link>
          <Link to="/shop" className={btnStyle}>
            Shop
          </Link>
          <Link to="/cart" className={`${btnStyle} relative`}>
            <ShoppingCart size={18} />
            Cart
            {cartCount > 0 && (
              <span className="absolute rounded-full flex items-center justify-center w-6.75 h-6.5 -top-0.5 -right-3 bg-red-500 text-xs">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
