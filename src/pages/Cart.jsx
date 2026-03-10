import { useContext } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { fetchProducts } from "../api/products";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const {
    data: products = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  });

  const productMap = Object.fromEntries(products.map((p) => [p.id, p]));

  const cartProducts = Object.keys(cart)
    .map((id) => productMap[id])
    .filter(Boolean);

  const subTotal = Object.keys(cart).reduce((total, id) => {
    const product = productMap[id];
    if (!product) return total;
    return total + product.price * cart[id];
  }, 0);

  const shipping = subTotal * 0.1;
  const tax = subTotal * 0.05;

  const orderSum = [
    { label: "Subtotal", value: subTotal },
    { label: "Shipping (10%)", value: shipping },
    { label: "Tax (5%)", value: tax },
  ];

  const orderTotal = orderSum.reduce((total, row) => total + row.value, 0);

  const removeItem = (id) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const updateCount = (id, count) => {
    setCart((prev) => ({
      ...prev,
      [id]: count,
    }));
  };

  if (isPending) {
    return (
      <section className="surface-card rounded-3xl p-8">
        <h1 className="text-3xl font-semibold text-slate-100">Loading Checkout Console</h1>
        <p className="mt-2 text-slate-300">Retrieving your selected mission hardware...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="surface-card rounded-3xl p-8">
        <h1 className="text-3xl font-semibold text-slate-100">Cart Feed Error</h1>
        <p className="mt-2 text-slate-300">Product pricing data could not be loaded. Please retry shortly.</p>
      </section>
    );
  }

  if (cartProducts.length === 0) {
    return (
      <section className="surface-card rounded-3xl p-8 text-center sm:p-12">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/35 bg-cyan-300/15 text-cyan-100">
          <ShoppingBag size={24} />
        </div>
        <h1 className="mt-5 text-3xl font-semibold text-slate-100">Your Cart Is in Orbit</h1>
        <p className="mx-auto mt-2 max-w-xl text-slate-300">
          No items are currently in your checkout queue. Browse the Space Arsenal and add mission gear to begin.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_32px_rgba(56,189,248,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(56,189,248,0.48)]"
        >
          Browse Products
          <ArrowRight size={16} />
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <header className="surface-card rounded-3xl p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl">Shopping Cart</h1>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">
          Review your mission inventory and confirm quantities before checkout.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {cartProducts.map((p) => (
            <CartItem
              key={p.id}
              item={p}
              removeItem={removeItem}
              updateCount={updateCount}
              cart={cart}
            />
          ))}
        </div>

        <aside className="surface-card h-fit rounded-2xl p-5 lg:sticky lg:top-28">
          <h2 className="border-b border-slate-600/45 pb-3 text-lg font-semibold text-slate-100">Order Summary</h2>
          <div className="mt-4 space-y-2">
            {orderSum.map((sum) => (
              <div
                key={sum.label}
                className="flex items-center justify-between rounded-xl border border-slate-600/40 bg-slate-900/45 px-3 py-2"
              >
                <p className="text-sm text-slate-300">{sum.label}</p>
                <p className="text-sm font-medium text-slate-100">${sum.value.toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 border-t border-slate-600/45 pt-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-300">Total</p>
              <p className="text-2xl font-semibold text-cyan-200">${orderTotal.toFixed(2)}</p>
            </div>
            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_34px_rgba(56,189,248,0.33)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_38px_rgba(56,189,248,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 active:scale-[0.99]"
            >
              Proceed to Checkout
              <ArrowRight size={16} />
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Cart;
