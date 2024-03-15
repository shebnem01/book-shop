import { GoHeart } from "react-icons/go";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "../../../../redux/slices/cartSlice";
import CustomButton from "../../../common/CustomButton";
const SingleProduct = ({ product }) => {
  const { id,price, name, imgUrl } = product;
  const dispatch=useDispatch();
  return (
    <div className="pb-5 w-[260px] border border-[#E6E6E6] mx-auto my-5">
      <div className="pt-5">
        <div className="absolute top-0 right-0 bg-main w-8 h-8 flex items-center 
        justify-center opacity-0 invisible transform -translate-y-10 transition duration-300 ease-in-out">
          <button className="cursor-pointer">
            <GoHeart size={18} />
          </button>
          <button className="hidden cursor-pointer">
            <GoHeart size={18} />
          </button>
        </div>
        <img src={imgUrl} className="mb-4 w-[155px] h-[230px] mx-auto" alt="product-image" />
      </div>

      <div className="flex justify-between px-4">
        <div>
          <Link to={`/product-details/${id}`} className="text-base font-medium leading-6 mb-1 transition duration-300 ease-in-out">
            {name}
          </Link>
          <div className="text-gray-600 text-xs leading-4 mb-4 lowercase">Author name</div>
        </div>

        <div className="text-sm">${price}</div>
      </div>
    <div className=" px-4">  <CustomButton handleClick={()=>dispatch(ADD_TO_CART({product,id}))} title="Add to bag" /></div>
    </div>
  );
};

export default SingleProduct;
