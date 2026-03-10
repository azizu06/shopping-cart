import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import QtyStepper from "./QtyStepper";

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
          <QtyStepper setCount={setDraft} count={draft} min={0} />
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
