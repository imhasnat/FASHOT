import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import MyReview from "../../Pages/My Review/MyReview";
import AddService from "../../Pages/Service/AddService";
import AllServices from "../../Pages/Service/AllServices";
import DetailService from "../../Pages/Service/DetailService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
            },
            {
                path: '/detailservice/:id',
                element: <DetailService></DetailService>,
                loader: async ({ params }) => fetch(`https://service-review-server-tawny.vercel.app/detailservice/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]
    }
])