import { Trash } from "lucide-react";
import QtyStepper from "./QtyStepper";

const CartItem = ({ item, removeItem, updateCount, cart }) => {
  const itemTotal = item.price * cart[item.id];
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <img src={item.image} alt={item.name} className="aspect-4/3" />
        <div className="flex flex-col gap-1">
          <p>{item.name}</p>
          <p>
            ${item.price} each (Subtotal: ${itemTotal})
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <QtyStepper setCount={updateCount} count={cart[item.id]} id={item.id} />
        <Trash size={18} onClick={removeItem} />
      </div>
    </div>
  );
};

export default CartItem;
