import Home from "./App.jsx";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";


const router = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/login",
        element: <Login/>
    }
]

export default router