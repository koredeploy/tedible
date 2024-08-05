import "./App.css";
import HomeIndex from "./pages/Home/HomeIndex";
import AboutIndex from "./pages/About/AboutIndex";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Contact from "./pages/Contact";
import Error404 from "./pages/error404/Error404";
import Categories from "./pages/categories/Categories";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignUpIndex from "./pages/signUp/signUpIndex";
import Faq from "./pages/Faq/Faq";
import LayoutInternal from "./layout/LayoutInternal";
import VendorForm1 from "./pages/signUp/VendorForm1/VendorForm1";
import "leaflet/dist/leaflet.css";
import SignUp from "./pages/signUp/SignUp";
import StudentVendor from "./pages/StudentVendor";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import RouteGuard from "./utils/RouteGuard";
import ResetPassword from "./pages/ResetPassword";
import SetNewPassword from "./pages/SetNewPassword";

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomeIndex />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/about",
          element: <AboutIndex />,
        },
        {
          path: "/privacy",
          element: <PrivacyPolicy />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
        {
          path: "/signUp",
          element: <SignUpIndex />,
        },
        {
          path: "/signupstudent",
          element: <SignUp />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          element: <RouteGuard />,
          children: [
            {
              path: "/LayoutInternal",
              element: <LayoutInternal />,
            },
          ],
        },
        {
          path: "/signupvendor",
          element: <VendorForm1 />,
        },
        {
          path: "/studentvendor",
          element: <StudentVendor />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/forgotpassword",
          element: <ForgotPassword />,
        },
        {
          path: "/password-reset",
          element: <ResetPassword />,
        },
        {
          path: "/reset-password/:token",
          element: <SetNewPassword />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
