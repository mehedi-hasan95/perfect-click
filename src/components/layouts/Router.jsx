import { createBrowserRouter } from "react-router-dom";
import ServiceDetails from "../Pages/Common/ServiceDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import Main from "./Main";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>,
    children: [
        {path: '/', element: <Home></Home>},
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>},
        {path: 'services', element: <Services></Services>},
        {path: 'services/:id', element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {path: 'my-reviews', element: <MyReviews></MyReviews>},
    ]
}
])