import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignIn from "../../pages/auth/SignIn";
import Home from "../../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
          path: "/",
          element: <Home />,
        },
      
    ],
  },
]);

export default router;
