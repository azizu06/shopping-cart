import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Orbit, ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const cartCount = Object.values(cart).reduce((total, val) => total + val, 0);
  const navLinkStyle = ({ isActive }) =>
    [
      "rounded-xl px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",
      isActive
        ? "bg-cyan-400/20 text-cyan-200 shadow-[0_0_26px_rgba(34,211,238,0.25)]"
        : "text-slate-300 hover:bg-slate-100/10 hover:text-slate-100",
    ].join(" ");
  const cartLinkStyle = ({ isActive }) =>
    `${navLinkStyle({ isActive })} relative`;

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:px-6 lg:px-10">
      <nav className="glass-panel mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl px-4 shadow-[0_16px_50px_rgba(2,6,23,0.45)] sm:px-6">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-slate-100 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/40 bg-cyan-400/15 text-cyan-200 transition group-hover:scale-105">
            <Orbit size={18} />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="hidden text-xs uppercase tracking-[0.28em] text-slate-400 sm:block">
              Orbital Market
            </span>
            <span className="text-lg font-semibold tracking-wide text-gradient">
              SpaceShop
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/" end className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/shop" className={navLinkStyle}>
            Shop
          </NavLink>
          <NavLink to="/cart" className={cartLinkStyle}>
            <span className="relative inline-flex items-center gap-2">
              <ShoppingCart size={16} />
              Cart
            </span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-linear-to-r from-fuchsia-500 to-cyan-400 px-1 text-[10px] font-semibold text-slate-950 shadow-[0_0_20px_rgba(217,70,239,0.45)]">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
