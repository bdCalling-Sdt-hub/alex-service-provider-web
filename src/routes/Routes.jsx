import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignIn from "../../pages/auth/SignIn";
import Home from "../../pages/home/Home";
import { HomeSlider } from "../components/home/HomeSlider";

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
      {
        path: "/homeSlider",
        element: <HomeSlider />,
      },
    ],
  },
]);

export default router;
