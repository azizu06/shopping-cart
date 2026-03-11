import { useState } from "react";
import { ShoppingCart, Sparkles } from "lucide-react";
import QtyStepper from "./QtyStepper";

const ShopItem = ({ item, cart, addToCart }) => {
  const [draft, setDraft] = useState(cart[item.id] ?? 1);
  const inCart = item.id in cart;

  return (
    <article className="surface-card group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.type}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-cyan-300/35 bg-cyan-300/15 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
          {item.type}
        </span>
      </div>

      <div className="space-y-4 p-4">
        <div className="space-y-2">
          <h3 className="line-clamp-2 text-lg font-semibold text-slate-100">
            {item.name}
          </h3>
          <p className="line-clamp-2 text-sm text-slate-400">
            {item.manufacturer}
          </p>
          <p className="text-xl font-semibold text-cyan-200">
            {item.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-700/60 pt-2">
          <QtyStepper setCount={setDraft} count={draft} min={0} />
          <button
            type="button"
            onClick={() => addToCart(item.id, draft)}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-300/15 px-4 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-200/70 hover:bg-cyan-300/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 active:scale-[0.98]"
          >
            <ShoppingCart size={18} />
            {inCart ? "Update" : "Add"}
          </button>
        </div>
        <p className="flex items-center gap-1 text-xs text-slate-400">
          <Sparkles size={12} className="text-fuchsia-300" />
          Mission-ready hardware with curated specs.
        </p>
      </div>
    </article>
  );
};

export default ShopItem;
