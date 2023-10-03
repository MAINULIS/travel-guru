import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import App from "../App";
import Home from "../components/Home/Home/Home";
import Cards from "../components/Home/Cards/Cards";


const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />,
                loader: ()=>fetch('http://localhost:5000/cards')
                
            },
              
            {
                path:'login',
                element:<Login />
            }
        ]
    }
]);

export default router;