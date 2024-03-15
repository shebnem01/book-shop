import { useSelector } from "react-redux";
import { selFilteredProduct } from "../../../../redux/slices/filterProductSlice";
import { useNavigate } from "react-router";

const SuggestSearch = ({ setShowSearchResult }) => {
  const filteredProduct = useSelector(selFilteredProduct);
  console.log(filteredProduct);
  const navigate = useNavigate();
  const handleProduct = (id) => {
    navigate(`product-details/${id}`);
    setShowSearchResult(false);
  };
  return (
    <div
      className="bg-[#FBFBFB] dark:bg-dark  dark:text-dark py-5 z-50 w-[825px] h-[600px] overflow-y-scroll scrollbar
     s absolute left-[446px] top-[115px]  px-2 shadow-sm"
    >
      <div className="container">
        <ul>
          {filteredProduct?.map((product) => (
            <li
              className="flex items-center gap-4 pb-4 border-b border-[#E6E6E6] mb-4 cursor-pointer"
              key={product.id}
              onClick={() => handleProduct(product.id)}
            >
              <div className="w-24 h-24 bg-white flex items-center justify-center border border-gray-300">
                <img
                  className="w-12 h-[72px]"
                  src={product.imgUrl}
                  alt={product.name}
                />
              </div>
              <div>
                <div className="text-black   dark:text-dark text-base font-medium leading-5">
                  {product.name}
                </div>
                <div className="text-gray-600 dark:text-dark text-sm font-normal leading-6">
                  {product.price}
                </div>
                <div className="text-gray-600 dark:text-dark text-sm font-normal leading-6">
                  author name
                </div>
              </div>
            </li>
          ))}
          {filteredProduct.length == 0 && (
            <div className="text-center">
              No information was found for your request.
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SuggestSearch;
