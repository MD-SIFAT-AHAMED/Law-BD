import {createBrowserRouter} from "react-router";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import MyBooking from "../Pages/MyBooking";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Layout,
        children:[
            {
                path:'/',
                Component:Home           
            },
            {
                path:'/booking',
                Component:MyBooking
            },
            {
                path:'/blogs',
                Component:Blogs
            },
            {
                path:'contact',
                Component:ContactUs
            }
        ]
    }
])

export default router;