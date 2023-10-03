import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "./Login";
import App from "../App";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'login',
                element:<Login />
            }
        ]
    }
]);

export default router;