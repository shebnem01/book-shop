
import ProductList from "./productList";
import useFetchProducts from "../../../hooks/useFetchProducts";
const Product = () => {
   useFetchProducts();
   
  return <ProductList />;
};

export default Product;
