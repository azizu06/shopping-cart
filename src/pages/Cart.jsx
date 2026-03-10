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
  const subTotal = Object.keys(cart).reduce((total, key) => {
    const product = products.find((p) => p.id === key);
    if (product) return total + product.price * cart[key];
    return total;
  }, 0);

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
    (total, cur) => total + cur.value,
    0,
  );

  const cartProducts = Object.keys(cart)
    .map((key) => products.find((p) => p.id === key))
    .filter(Boolean);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2 border justify-center items-center">
        <h1>Shopping Cart</h1>
        <p>Review your items below before proceeding to checkout.</p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
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
        <div className="flex flex-col border w-80 rounded-md p-4 gap-4 max-h-90">
          <h2 className="border-b-4 p-2">Order Summary</h2>
          <div className="flex flex-col gap-3 border-b-2">
            {orderSum.map((sum) => (
              <div key={sum.label} className="flex justify-between border p-2">
                <p>{sum.label}</p>
                <p>${sum.value.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between p-2">
              <p>Total</p>
              <p>${orderTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-center">
              <button className="flex justify-center items-center border py-2 w-50 rounded-md">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
