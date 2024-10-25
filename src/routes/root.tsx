import { createBrowserRouter, Navigate } from "react-router-dom";
import { MenPage } from "../pages/men/Men";
import { Homepage } from "../pages/homepage/Homepage";
import { ProductPage } from "../pages/product/Product";
import { ShoppingCartPage } from "../pages/shopping-cart/ShoppingCart";
import { Checkout } from "../pages/checkout/checkout";
import { FavoritesPage } from "../pages/favorites/favorites";

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Homepage />
      ),
    },
    {
      path: "hombre",
      element: <MenPage />,
    },
    {
      path: "product/:productId",
      element: <ProductPage />
    },
    {
      path: "shopping-cart",
      element: <ShoppingCartPage />
    },
    {
      path: "checkout",
      element: <Checkout />
    },
    {
      path: "favorites",
      element: <FavoritesPage />
    },
    {
      path: "*",
      element: (<Navigate to="/" replace={true} />) 
    }
]);

export { router };
