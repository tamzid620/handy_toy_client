import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import Home from "../Shared/Home";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllToys from "../Pages/AllToys";
import MyToys from "../Pages/MyToys";
import AddToys from "../Pages/AddToys";
import PrivateRoute from "./PrivateRoute";
import Cdetails from "../Pages/Cdetails";
import Atdetails from "../Pages/Atdetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element:<Home></Home> ,
        },
        {
          path: "/blog",
          element:<Blog></Blog> ,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element:<Register></Register> ,
        },
        {
          path: "/alltoys",
          element:<PrivateRoute><AllToys></AllToys></PrivateRoute> ,
        },
        {
          path: "/mytoys",
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute> ,
        },
        {
          path: "/addtoys",
          element:<PrivateRoute><AddToys></AddToys></PrivateRoute> ,
        },
        {
          path: "/cdetails/:id",
          element:<PrivateRoute><Cdetails></Cdetails></PrivateRoute> ,
        },
        {
          path: "/atdetails/:id",
          element:<PrivateRoute><Atdetails></Atdetails></PrivateRoute> ,
        },
      ],
    },
  ]);


export default router;