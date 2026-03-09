import { createBrowserRouter, Route, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "../routes";
import { CartProvider } from "../context/CartProvider";

const queryClient = new QueryClient();
const routers = createBrowserRouter(router);

const App = () => {
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <RouterProvider router={routers} />
    </CartProvider>
  </QueryClientProvider>;
};
export default App;
