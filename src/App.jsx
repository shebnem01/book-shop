import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./shared/components/footer";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Reset from "./pages/auth/reset";
import Header from "./shared/components/header";
import "./main.css";
import Basket from "./pages/basket";
import AllProducts from "./pages/allProducts";
import CatalogSearch from "./pages/catalogSearch";
import ProductDetails from "./pages/productDetails";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import Checkout from "./pages/checkout";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
        <Route path="/all-products" element={<AllProducts/>}/>
        <Route path="/catalogsearch" element={<CatalogSearch/>}/>
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
