import { useState } from "react";
import { Plus, Minus, ShoppingCart } from "lucide-react";
const ShopItem = ({ item, cart, addToCart }) => {
  const [draft, setDraft] = useState(cart[item.id] ?? 1);
  return (
    <div className="flex flex-col">
      <img src={item.image} alt={item.type} className="bg-cover" />
      <div className="flex felx-col gap-2">
        <div className="flex flex-col gap-2">
          <p>
            {item.name}-{item.manufacturer}
          </p>
          <p>{item.price}</p>
        </div>
        <div className="flex gap-2">
          <div className="flex border">
            <Minus onClick={() => setDraft((c) => c - 1)} />
            <input
              type="number"
              value={draft}
              onChange={(e) => setDraft(Number(e.target.value))}
              className="border"
            />
            <Plus onClick={() => setDraft((c) => c + 1)} />
          </div>
          <div className="flex justify center gap-2">
            <ShoppingCart />
            {item.id in cart ? (
              <button onClick={addToCart(item.id, draft)}>Update</button>
            ) : (
              <button onClick={addToCart(item.id, draft)}>Add</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
