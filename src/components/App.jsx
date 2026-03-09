import { useState } from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes";

const queryClient = new QueryClient();
const routers = createBrowserRouter(router);

const App = () => {
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routers} />
  </QueryClientProvider>;
};
export default App;
