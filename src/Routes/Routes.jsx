import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Classes from "../Pages/Classes/Classes";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import MyClass from "../Pages/Dashboard/MyClass";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Secret from "../Pages/Shared/Secret";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        }, 
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
        {
          path: 'classes',
          element:<Classes></Classes>
        }
      ]
   
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'myclass',
          element: <MyClass></MyClass>
        },
        {
          path: 'manageUsers',
          element:<ManageUsers></ManageUsers>
        }
      ]
    }
  ]);