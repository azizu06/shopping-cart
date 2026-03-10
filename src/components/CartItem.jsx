import { Trash } from "lucide-react";
import QtyStepper from "./QtyStepper";

const CartItem = ({ item, removeItem, updateCount, cart }) => {
  if (!item) return null;
  const itemTotal = item.price * cart[item.id];

  return (
    <article className="surface-card flex w-full flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 gap-4">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-slate-600/40 sm:h-28 sm:w-28">
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0 space-y-1">
          <p className="line-clamp-2 text-base font-semibold text-slate-100">{item.name}</p>
          <p className="line-clamp-1 text-sm text-slate-400">{item.manufacturer}</p>
          <p>
            <span className="text-sm text-slate-300">${item.price.toLocaleString()} each</span>
            <span className="ml-2 text-sm font-medium text-cyan-200">
              Subtotal: ${itemTotal.toLocaleString()}
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <QtyStepper
          setCount={(newCount) => updateCount(item.id, newCount)}
          count={cart[item.id]}
          min={1}
        />
        <button
          type="button"
          onClick={() => removeItem(item.id)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/40 bg-rose-400/10 text-rose-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-400/20 hover:text-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/70"
          aria-label={`Remove ${item.name}`}
        >
          <Trash size={18} />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
