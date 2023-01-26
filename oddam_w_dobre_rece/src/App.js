import  './scss/main.scss';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/home/Home";
import Register2 from "./components/home/Register2";
import Login from "./components/home/Login";
import {AuthProvider} from "./components/home/Auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Home />
        ),
        children: [
            {
                path: "Login",
                element: <Login />,
            },
            {
                path: "Register2",
                element: <Register2 />,
            },
        ]
    },
]);

function App() {
  return (
      <RouterProvider router={router} />
    // <AuthProvider router={router} />


  );
}

export default App;
