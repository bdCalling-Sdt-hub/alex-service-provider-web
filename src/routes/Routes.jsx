import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../pages/auth/SignIn";
import Favourites from "../../pages/favourites/Favourites";
import Home from "../../pages/home/Home";
import HomeWithSearch from "../../pages/home/HomeWithSearch";
import AboutUs from "../../pages/profile/AboutUs";
import Language from "../../pages/profile/Language";
import MyAddresses from "../../pages/profile/MyAddress";
import MyBooking from "../../pages/profile/MyBookings";
import MyCards from "../../pages/profile/MyCards";
import PasswordChange from "../../pages/profile/Password";
import PaymentRefunds from "../../pages/profile/PaymentRefunds";
import Privacy from "../../pages/profile/Privacypolicy";
import Profile from "../../pages/profile/Profile";
import ProfileDetails from "../../pages/profile/ProfileDetails";
import TermsCondition from "../../pages/profile/TermsCondition";
import Service from "../../pages/service/Service";
import Care from "../components/home/Care";
import FindingProfessionalsLoader from "../components/home/FindingProfessionalsLoader";
import Frequency from "../components/home/Frequency";
import { HomeSlider } from "../components/home/HomeSlider";
import PalliativeCareFilter from "../components/home/PalliativeCareFilter";
import ProfessionalProfile from "../components/home/professionalProfile";
import SearchPage from "../components/home/SearchPage";
import ServiceSearch from "../components/home/ServiceSearch";
import MainLayout from "../layouts/MainLayout";
import Inbox from "../../pages/inbox/Inbox";
import Chat from "../components/inbox/Chat";
import CallScreen from "../components/inbox/CallScreen";
import CallingScreen from "../components/inbox/CallingScreen";
import VideoCallScreen from "../components/inbox/VideoCallScreen";
import VideoCallingScreen from "../components/inbox/VideoCallingScreen";
import MessageProfessionals from "../components/home/MessageProfessionals";
import ProviderHome from "../../pages/Provider/home/ProviderHome";
import ProviderRequest from "../../pages/Provider/request/ProviderRequest";

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
        path: "/service",
        element: <Service />,
      },
      {
        path: "/favourite",
        element: <Favourites />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/details",
        element: <ProfileDetails />,
      },
      {
        path: "/profile/privacy",
        element: <Privacy />,
      },
      {
        path: "/profile/about",
        element: <AboutUs />,
      },
      {
        path: "/profile/terms",
        element: <TermsCondition />,
      },
      {
        path: "/profile/language",
        element: <Language />,
      },
      {
        path: "/profile/password",
        element: <PasswordChange />,
      },
      {
        path: "/profile/addresses",
        element: <MyAddresses />,
      },
      {
        path: "/profile/payments",
        element: <PaymentRefunds />,
      },
      {
        path: "/profile/payments/payment-methods",
        element: <MyCards />,
      },
      {
        path: "/profile/payments/my-booking",
        element: <MyBooking />,
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
      {
        path: "/findingProfessionals",
        element: <FindingProfessionalsLoader />,
      },
      {
        path: "/serviceSearch",
        element: <ServiceSearch />,
      },
      {
        path: "/palliativeCareFilter",
        element: <PalliativeCareFilter />,
      },
      {
        path: "/professionalProfile",
        element: <ProfessionalProfile />,
      },
      {
        path: "/messageProfessionals",
        element: <MessageProfessionals />,
      },
      // inbox routes here...
      {
        path: "/inbox",
        element: <Inbox />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/callScreen",
        element: <CallScreen />,
      },
      {
        path: "/callingScreen",
        element: <CallingScreen />,
      },
      {
        path: "/videoCallScreen",
        element: <VideoCallScreen />,
      },
      {
        path: "/videoCallingScreen",
        element: <VideoCallingScreen />,
      },
      //...add provider routes here...
      {
        path: "/providerHome",
        element: <ProviderHome />,
      },
      {
        path: "/providerRequest",
        element: <ProviderRequest />,
      },
    ],
  },
]);

export default router;
