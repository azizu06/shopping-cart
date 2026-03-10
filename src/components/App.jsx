import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routes } from "../routes";
import { CartProvider } from "../context/CartProvider";

const queryClient = new QueryClient();
const router = createBrowserRouter(routes);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  );
};
export default App;
