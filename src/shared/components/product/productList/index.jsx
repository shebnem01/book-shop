import { useSelector } from "react-redux";
import { selProducts } from "../../../../redux/slices/productSlice";
import SingleProduct from "../singleProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ProductList = () => {
  const products = useSelector(selProducts);

  return (
    <Swiper
      modules={[Navigation, A11y]}
      slidesPerView={6}
      pagination={{ clickable: true }}

      onSlideChange={() => console.log("slide change")}
    >
      {products?.map((product) => (
        <SwiperSlide key={product.id}>
          <SingleProduct product={product} />
        </SwiperSlide>
      ))}
 
    </Swiper>
  );
};

export default ProductList;
