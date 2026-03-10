import { Trash } from "lucide-react";
import QtyStepper from "./QtyStepper";

const CartItem = ({ item, removeItem, updateCount, cart }) => {
  if (!item) return null;
  const itemTotal = item.price * cart[item.id];
  return (
    <div className="flex gap-4 w-full border p-4">
      <img src={item.image} alt={item.name} className="w-30 h-30" />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <p>{item.name}</p>
          <p>
            ${item.price} each (Subtotal: ${itemTotal})
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <QtyStepper
            setCount={(newCount) => updateCount(item.id, newCount)}
            count={cart[item.id]}
            id={item.id}
            min={1}
          />
          <Trash size={24} onClick={() => removeItem(item.id)} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
