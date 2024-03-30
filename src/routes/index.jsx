import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import ProductDetails from "../pages/productDetails";
import AllProducts from "../pages/allProducts";
import CatalogSearch from "../pages/catalogSearch";
import Checkout from "../pages/checkout";
import Wishlist from "../pages/wishlist";
import Reset from "../pages/auth/reset";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import Basket from "../pages/basket";
export const routes=[
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"product-details/:id",
        element:<ProductDetails/>,
    },
    {
        path:"/all-products",
        element:<AllProducts/>,
    },
    {
        path:"/catalogsearch",
        element:<CatalogSearch/>,
    },
    {
        path:"/basket",
        element:<Basket/>,
    },
    {
        path:"/login",
        element:<Login/>,
    },
    {
        path:"/register",
        element:<Register/>,
    },
    {
        path:"/reset",
        element:<Reset/>,
    },
    {
        path:"/wishlist",
        element:<Wishlist/>,
    },
    {
        path:"/checkout",
        element:<Checkout/>,
    },
]