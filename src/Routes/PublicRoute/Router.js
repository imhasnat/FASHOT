import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
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
                loader: async () => fetch('http://localhost:5000/limitservices')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: async () => fetch('http://localhost:5000/limitservices')
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: async () => fetch('http://localhost:5000/services')
            },
            {
                path: '/detailservice/:id',
                element: <DetailService></DetailService>,
                loader: async ({ params }) => fetch(`http://localhost:5000/detailservice/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },

        ]
    }
])