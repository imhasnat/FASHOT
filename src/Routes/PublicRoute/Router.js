import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import AllServices from "../../Pages/Service/AllServices";
import DetailService from "../../Pages/Service/DetailService";

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
                path: '/services',
                element: <AllServices></AllServices>,
                loader: async () => fetch('http://localhost:5000/services')
            },
            {
                path: '//detailservice/:id',
                element: <DetailService></DetailService>,
                loader: async ({ params }) => fetch(`http://localhost:5000/detailservice/${params.id}`)
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