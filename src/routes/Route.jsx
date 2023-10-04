import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import App from "../App";
import Home from "../components/Home/Home/Home";
import Cards from "../components/Home/Cards/Cards";
import CardDetails from "../components/Home/Cards/CardDetails";
import LoginLayout from "../components/layout/LoginLayout";
import Register from "./Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/cards')

            },
            {
                path: '/card/:id',
                element: <CardDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/cards/${params.id}`)
            },
            
            

        ]
    },
    {
        path:'/',
        element:<LoginLayout />,
        children:[
            {
                path:'login',
                element:<Login />
            },
            {
                path:'register',
                element:<Register />
            }
        ]
    },
]);

export default router;