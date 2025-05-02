import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./lib/context/authContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2, // Will retry failed queries 2 times before displaying an error
      refetchOnWindowFocus: false, // Disable automatic refetch on window focus
      // Global error handling for queries
      onError: (error) => {
        console.error("Query error:", error);
        // You could add a toast notification here
      },
    },
    mutations: {
      // Global error handling for mutations
      onError: (error) => {
        console.error("Mutation error:", error);
        // You could add a toast notification here
      },
    },
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
