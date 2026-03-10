import { Link } from "react-router-dom";

const NavBar = () => {
  const btnStyle = "cursor-pointer p-4 hover:bg-blue-300";
  return (
    <div className="fixed inset-x-0 top h-16 z-50">
      <nav className="flex w-screen backdrop-blur justify-between gap-6 rounded-l border px-10 py-2">
        <button className="cursor-pointer">SpaceShop</button>
        <div className="flex gap-5">
          <Link to="/" className={btnStyle}>
            Home
          </Link>
          <Link to="/shop" className={btnStyle}>
            Shop
          </Link>
          <Link to="/cart" className={btnStyle}>
            Cart
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
