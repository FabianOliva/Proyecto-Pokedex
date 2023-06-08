import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PokemonCard } from "./pages/pokemon-card/index.jsx";
import ErrorPage from "./pages/ErrorPage/index.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pokemon/:pokemonId",
    element: <PokemonCard />,
  },
  {
    path: "/pokemon/error",
    element: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <RouterProvider router={router} />
  </LanguageProvider>
);
