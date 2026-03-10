import { useState } from "react";
import { Plus, Minus, ShoppingCart } from "lucide-react";

const ShopItem = ({ item, cart, addToCart }) => {
  const [draft, setDraft] = useState(cart[item.id] ?? 1);

  return (
    <div className="flex flex-col gap-2 border">
      <img
        src={item.image}
        alt={item.type}
        className="w-full aspect-4/3 rounded-md overflow-hidden"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 p-4">
          <p>{item.name}</p>
          <p>{item.manufacturer}</p>
          <p>${item.price}</p>
        </div>
        <div className="flex justify-center gap-6 border p-4">
          <div className="flex items-center border">
            <button
              type="button"
              className="flex h-8 w-8 shrink-0 items-center justify-center"
              onClick={() => setDraft((c) => Math.max(1, c - 1))}
            >
              <Minus size={16} />
            </button>
            <input
              type="number"
              value={draft}
              onChange={(e) => setDraft(Number(e.target.value))}
              className="no-spinner w-16 flex-none border-x text-center"
              min="1"
            />
            <button
              type="button"
              className="flex h-8 w-8 shrink-0 items-center justify-center"
              onClick={() => setDraft((c) => c + 1)}
            >
              <Plus size={16} />
            </button>
          </div>
          <div
            className="flex items-center justify-center gap-2 border w-40"
            onClick={() => addToCart(item.id, draft)}
          >
            <ShoppingCart size={18} />
            {item.id in cart ? <button>Update</button> : <button>Add</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
