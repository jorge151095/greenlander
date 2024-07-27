import { createBrowserRouter, Navigate } from "react-router-dom";
import { MenPage } from "../pages/men/Men";
import { Homepage } from "../pages/homepage/Homepage";

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
      path: "*",
      element: (<Navigate to="/" replace={true} />) 
    }
]);

export { router };
