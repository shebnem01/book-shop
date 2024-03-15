import { useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { SET_PRODUCTS } from "../redux/slices/productSlice";
import { db } from "../firebase/config";

const useFetchProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const q = query(productsRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
          const allProduct = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          dispatch(SET_PRODUCTS({ products: allProduct }));
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();

  }, [dispatch]);


};

export default useFetchProducts;
