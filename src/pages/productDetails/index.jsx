import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { useParams } from "react-router";
import { GoHeart } from "react-icons/go";
import { db } from "../../firebase/config";
import {
  ADD_QUANTITY,
  ADD_TO_CART,
  REDUCE_QUANTITY,
  selCart,
} from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../shared/common/CustomButton";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const cart = useSelector(selCart);
  const currentItem = cart.filter((item) => item.id === id);
  const cartItemQuantity = currentItem.map((item) => item.quantity);
  const addCartHandler = (productDetail, id) => {
    dispatch(
      ADD_TO_CART({
        product: productDetail,
        id: id,
      })
    );
    setIsAdded(true);
  };

  const getProductDetail = async () => {
    try {
      const productRef = doc(db, "products", id);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        const obj = {
          id,
          ...productSnap.data(),
        };
        setProductDetail(obj);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);
  return (
    <>
      <div className="px-14 mt-12">
        <div className="flex">
          <div className="w-[40%] flex items-center justify-center">
            <div className="relative py-5 px-[70px] border border-gray-200 bg-white flex items-center justify-center">
              <img
                className="w-[320px] h-[490px]"
                src={productDetail?.imgUrl}
                alt={productDetail?.name}
              />
            </div>
          </div>

          <div className="w-[50%]">
            <div className="flex items-center justify-between py-3 border-t border-b border-[#dee2e6]">
              <div className="text-base font-medium leading-6 uppercase">
                {productDetail?.name}
              </div>

              <div className="flex gap-3 items-center">
                <div className="text-base font-medium leading-6 uppercase">
                  {productDetail?.price} ₼
                </div>

                <div className="add-wishlist">
                  <button>
                    <GoHeart size={24} />
                  </button>
                  <button className="hidden bg-red">
                    <GoHeart size={24} />
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6">
              <div className="text-gray-700 text-base font-medium leading-6 capitalize mb-3">
                features
              </div>
              <ul className="f-list">
                <li>Author: Fyodor M. Dostoyevski</li>
                <li>Genre: Psychological</li>
                <li>Language: English</li>
                <li>Number of page: 456</li>
                <li>Publication date: xx xx xx</li>
              </ul>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div className="flex">
                {cartItemQuantity.length ? (
                  <>
                    <button
                      className="flex items-center justify-center w-12 h-12 bg-gray-400 text-white text-2xl"
                      onClick={() =>
                        dispatch(REDUCE_QUANTITY(productDetail.id))
                      }
                    >
                      -
                    </button>
                    <span className="flex items-center justify-center w-[50px] h-12">
                      {cartItemQuantity}
                    </span>
                    <button
                      className="flex items-center justify-center w-12 h-12 bg-gray-400 text-white text-2xl"
                      onClick={() => dispatch(ADD_QUANTITY(productDetail.id))}
                    >
                      +
                    </button>
                  </>
                ) : null}
              </div>
              <CustomButton
                className={!isAdded ? `add-to-cart` : `add-to-cart added`}
                handleClick={() =>
                  addCartHandler(productDetail, productDetail.id)
                }
                title={isAdded ? ` added to bag` : ` add to bag`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FBFBFB] py-10 px-[140px] my-10">
        <Tab.Group>
          <Tab.List className="flex  items-center justify-center mb-6 border-b-2 border-[#E6E6E6]">
            <Tab className="text-xl font-medium border-b-2 border-[#E6E6E6] capitalize py-3 px-13 cursor-pointer mb-6">
              description
            </Tab>
            <Tab className="text-xl ps-5 font-medium border-b-2 border-[#E6E6E6] capitalize py-3 px-13 cursor-pointer mb-6">
              rewievs(10)
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {" "}
              <div className="text-gray-600 font-poppins text-base font-light leading-5">
                {productDetail?.desc}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-gray-600 font-poppins text-base font-light leading-5"></div>
            </Tab.Panel>
            
          </Tab.Panels>
        </Tab.Group>
      </div>
  
    </>
  );
};

export default ProductDetails;
