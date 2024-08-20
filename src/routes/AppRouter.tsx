import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "@components/feedback/Loading/Loading";
import PageSuspenseFallback from "@components/feedback/PageSuspenseFallback/PageSuspenseFallback";
import ErrorPage from "@pages/ErrorPage/ErrorPage";

const RootLayout = lazy(() => import("@layouts/RootLayout"));

const About = lazy(() => import("@pages/About/About"));
const Cart = lazy(() => import("@pages/Cart/Cart"));
const Categories = lazy(() => import("@pages/Categories/Categories"));
const Home = lazy(() => import("@pages/Home/Home"));
const Login = lazy(() => import("@pages/Login/Login"));
const Products = lazy(() => import("@pages/Products/Products"));
const Register = lazy(() => import("@pages/Register/Register"));
const WishList = lazy(() => import("@pages/WishList/WishList"));

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<PageSuspenseFallback />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "products/:cat_prefix",
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback={<Loading />}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "wish-list",
        element: (
          <Suspense fallback={<Loading />}>
            <WishList />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "register",
    element: (
      <Suspense fallback={<Loading />}>
        <Register />
      </Suspense>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
