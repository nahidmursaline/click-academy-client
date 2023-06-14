import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Classes from "../Pages/Classes/Classes";
import AddClass from "../Pages/Dashboard/AddClass";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import MyClass from "../Pages/Dashboard/MyClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Home/Instructor/Instructor";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Secret from "../Pages/Shared/Secret";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
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
          path: 'classes',
          element:<Classes></Classes>
        },
        {
          path: 'instructors',
          element: <Instructor></Instructor>
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
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'addClass',
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        }
      ]
    },
    {
      path: '/*',
      element: <NotFound></NotFound>
    }
  ]);