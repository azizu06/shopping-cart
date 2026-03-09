import { Link } from "react-router-dom";

const NavBar = () => {
  const btnStyle = "cursor-pointer p-4 hover:bg-blue-300";
  return (
    <div className="flex justify-between fixed top-0">
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
    </div>
  );
};

export default NavBar;
