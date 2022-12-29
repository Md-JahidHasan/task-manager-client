import { createBrowserRouter } from "react-router-dom";
import Login from "../ManageUser/Login";
import Signup from "../ManageUser/Signup";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Home from "../Pages/Home/Home";
import MyTask from "../Pages/MyTask/MyTask";
import Main from "../Shared/Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addTask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path:'/myTask',
                element:<MyTask></MyTask>
            },
            {
                path: '/completedTask',
                element:<CompletedTask></CompletedTask>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<Signup></Signup>
            }
        ]
    }
])