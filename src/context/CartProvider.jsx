import { useState } from "react";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
