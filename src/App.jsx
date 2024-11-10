/* eslint-disable react/prop-types */
// import React from 'react'

import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Order from "./pages/order/Order";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllProducts from "./pages/allproducts/AllProducts";

// import AllProducts from "../pages/allproducts/AllProducts";

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export const ProtectedRoutesForAdmin = ({ children }) => {
  const adminEMail = import.meta.env.VITE_ADMIN_ID;
  const admin = JSON.parse(localStorage.getItem("user"));
  // console.log(admin.user.email);
  if (admin.user.email === adminEMail) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};


const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoutesForAdmin>
            <Dashboard />
          </ProtectedRoutesForAdmin>
        ),
      },
      {
        path: "/order",
        element: (
          <ProtectedRoutes>
            <Order />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/productinfo/:id",
        element: <ProductInfo />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/updateproduct",
        element: <UpdateProduct />,
      },
      {
        path: "/*",
        element: <NoPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <MyState>
      <RouterProvider router={router} />
      <ToastContainer />
    </MyState>
  );
};

export default App;

