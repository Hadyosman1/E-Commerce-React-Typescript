import RootLayout from "@layouts/RootLayout";
import About from "@pages/About/About";
import Cart from "@pages/Cart/Cart";
import Categories from "@pages/Categories/Categories";
import ErrorPage from "@pages/ErrorPage/ErrorPage";
import Home from "@pages/Home/Home";
import Login from "@pages/Login/Login";
import Products from "@pages/Products/Products";
import Register from "@pages/Register/Register";
import WishList from "@pages/WishList/WishList";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products/:cat_prefix",
        element: <Products />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wish-list",
        element: <WishList />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
