import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./app"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



const client = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    {/* keep comments <ReactQueryDevtools /> */}
      <App />
    </QueryClientProvider>

  </React.StrictMode>
);
