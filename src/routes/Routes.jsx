import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignIn from "../../pages/auth/SignIn";
import Home from "../../pages/home/Home";
import { HomeSlider } from "../components/home/HomeSlider";
import HomeWithSearch from "../../pages/home/HomeWithSearch";
import Care from "../components/home/Care";
import SearchPage from "../components/home/SearchPage";
import Frequency from "../components/home/Frequency";

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
      {
        path: "/homeWithSearch",
        element: <HomeWithSearch />,
      },
      {
        path: "/care",
        element: <Care />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/frequency",
        element: <Frequency />,
      },
    ],
  },
]);

export default router;
