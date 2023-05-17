import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'allToys',
            element: <AllToys></AllToys>
        },
        {
            path: 'blog',
            element: <Blog></Blog>
        }
      ]
    },
  ]);

export default router;