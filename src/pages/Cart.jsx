import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useQuery } from "@tanstack/react-query";
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
  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error on fetching products</p>;
  const subTotal = Object.keys(cart).reduce(
    (total, key) => total + products[key].price * cart[key],
    0,
  );

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

  const orderSum = [
    {
      label: "Subtotal",
      value: subTotal,
    },
    {
      label: "Shipping(10%)",
      value: subTotal * 0.1,
    },
    {
      label: "Tax(5%)",
      value: subTotal * 0.05,
    },
  ];

  const orderTotal = Object.values(orderSum).reduce(
    (total, val) => total + val,
    0,
  );

  const cartProducts = Object.keys(cart).map((key) =>
    products.find((p) => p.id === key),
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <h1>Shopping Cart</h1>
        <p>Review your items below before proceeding to checkout.</p>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col">
          {cartProducts.map((p) => (
            <CartItem
              item={p}
              removeItem={removeItem}
              updateCount={updateCount}
              cart={cart}
            />
          ))}
        </div>
        <div className="flex flex-col">
          <h2 className="border-b-2">Order Summary</h2>
          <div className="flex flex-col gap-3 border-b-2">
            {orderSum.map((sum) => (
              <div key={sum.value} className="flex justify-between">
                <p>{sum.label}</p>
                <p>{sum.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p>Total</p>
              <p>{orderTotal}</p>
            </div>
            <button className="flex justify-center items-center">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
