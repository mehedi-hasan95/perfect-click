import { createBrowserRouter } from "react-router-dom";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import ServiceDetails from "../Pages/Common/ServiceDetails";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import UpdateReview from "../Pages/MyReviews/MyAllReviews/UpdateReview";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import Main from "./Main";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>,
    children: [
        {path: '/', element: <Home></Home>},
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>},
        {path: 'services', element: <Services></Services>},
        {path: 'services/:id', element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`https://service-review-server-seven.vercel.app/services/${params.id}`)
        },
        {path: 'reviews', element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>},
        {path: 'reviews/:id', element: <UpdateReview></UpdateReview>,
        loader: ({params}) => fetch(`https://service-review-server-seven.vercel.app/reviews/${params.id}`)
        },
        {path: 'add-service', element: <PrivetRoute><AddService></AddService></PrivetRoute>},
        {path: 'blog', element: <Blog></Blog>},
        {path: '*', element: <Error></Error>}
        
    ]
}
])