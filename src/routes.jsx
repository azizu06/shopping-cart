import Home from "./pages/Home";
import Products from "./pages/Shop";
import Cart from "./pages/Cart";

export const router = () => {
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shop",
      element: <Products />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ];
};
