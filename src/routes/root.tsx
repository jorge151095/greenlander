import { createBrowserRouter, Navigate } from "react-router-dom";
import { MenPage } from "../pages/men/Men";
import { Homepage } from "../pages/homepage/Homepage";
import { ProductPage } from "../pages/product/Product";

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
      path: "*",
      element: (<Navigate to="/" replace={true} />) 
    }
]);

export { router };
