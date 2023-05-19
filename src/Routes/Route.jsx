import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";
import Error from "../Componets/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import DetailsToys from "../Pages/DetailsToys/DetailsToys";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'addToys',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: '/myToys/:email',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/toysByEmail/${params.email}`)
      },
      {
        path: 'detailsToys/:id',
        element: <PrivateRoute> <DetailsToys></DetailsToys> </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/toysById/${params.id}`)
      },
      {
        path:'updateToys/:id',
        element: <UpdateToys></UpdateToys>,
        loader: ({params}) => fetch(`http://localhost:5000/toysById/${params.id}`)
      }
    ]
  },
]);

export default router;