import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UCContextProvider from "./contexts/UCContextProvider.tsx";

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear());
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const clientQuery = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={clientQuery}>
      <UCContextProvider>
        <RouterProvider router={router} />
      </UCContextProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
