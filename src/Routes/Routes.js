import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main/Main";
import Allproduct from "../component/Pages/Home/Allproduct/Allproduct";
import Home from "../component/Pages/Home/Home/Home";
import DetailsProduct from "../component/Pages/Home/Product/DetailsProduct/DetailsProduct";
// import AllProducts from "../component/Pages/Home/Product/AllProducts";
import Products from "../component/Pages/Home/Product/Products";
import Login from "../component/Pages/Login/Login";
import Registration from "../component/Pages/Login/Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/products')
            },
           
            {
                path: '/category/:id',
                element: <Products></Products>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/allProducts',
                element: <Allproduct></Allproduct>,
                loader: () => fetch('http://localhost:5000/allProducts/')
            },
            {
                path: '/detailsProduct/:id',
                element: <DetailsProduct></DetailsProduct>,
               loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
])
export default router;