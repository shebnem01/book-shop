import { BsTrash3Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_QUANTITY,
  CALCULATE_SUB_QUANTITY,
  CALCULATE_TOTAL_PRICE,
  REDUCE_QUANTITY,
  REMOVE_ALL,
  REMOVE_FROM_CART,
  selCart,
  selTotal,
  selTotalQuantity,
} from "../../redux/slices/cartSlice";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import EmptyComponent from "../../shared/components/emptyComponent";
import { useEffect } from "react";
const Cart = () => {
  const cart = useSelector(selCart);
  const total = useSelector(selTotal);
  const totalQuantity = useSelector(selTotalQuantity);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CALCULATE_TOTAL_PRICE(cart));
    dispatch(CALCULATE_SUB_QUANTITY(cart));
  }, [dispatch, cart]);

  return (
    <div className="dark:bg-dark">
      <div className="w-[90%] mx-auto mb-3">
        {cart.length ? (
          <div className="text-lg flex items-center justify-between  font-medium leading-9 border-t border-gray-200 border-b py-5">
            <div className="flex items-center dark:text-dark ">
              Cart
              <span className="text-gray-600 dark:text-dark  text-base font-normal block ml-1">
                {cart.length ? `(${cart?.length} products)` : ""}
              </span>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div
                className="text-red-500 dark:text-dark  font-medium text-base leading-5 gap-x-4 flex items-center cursor-pointer"
                onClick={() => dispatch(REMOVE_ALL())}
              >
                Delete all
                <BsTrash3Fill size={30} />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      
        <div className="w-[90%] mx-auto dark:text-dark dark:bg-dark">
          {cart.length ? (
            <div className="flex mb-3 gap-12">
              <div className="w-[70%]">
                <div className="cart-items">
                  {cart?.map((item) => (
                    <div className="cart-item-content" key={item.id}>
                      <div className="cart-item-mobile-top hidden">
                        <div className="remove-cart-item">
                          <LiaTimesSolid />
                        </div>
                      </div>
                      <div className="flex mb-4 items-center justify-between py-5 border-b border-gray-200">
                        <Link
                          to={`/product-details/${item.id}`}
                          className="flex items-center justify-center"
                        >
                          <img
                            className="w-[90px] h-[120px] object-cover"
                            src={item.imgUrl}
                            alt={item.name}
                          />
                        </Link>
                        <div className="pr-info dark:text-dark ">
                          <div className="text-base font-medium capitalize leading-5 mb-2">
                            {item.name}
                          </div>
                          <ul>
                            {/* <li className="text-xs font-normal text-gray-600 leading-4 mb-1">
                              author name:Fyodor
                            </li>
                            <li className="text-xs font-normal text-gray-600 leading-4 mb-1">
                              language:Azerbaijan
                            </li>
                            <li className="text-xs font-normal text-gray-600 leading-4 mb-1">
                              number:1
                            </li> */}
                            <li className="text-xs font-normal text-gray-600 dark:text-dark leading-4 mb-1">
                              <div className="price mobile-price">
                                <div className="new-price">${item.price} </div>
                                {/* <div className="old-price">12.50 m</div> */}
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="flex">
                          <button
                            className="flex items-center justify-center w-5 h-5 bg-gray-300 shadow  text-white text-base"
                            onClick={() => dispatch(REDUCE_QUANTITY(item.id))}
                          >
                            -
                          </button>
                          <span className="flex items-center justify-center w-10 h-5 dark:text-dark dark:bg-dark">
                            {item.quantity}
                          </span>
                          <button
                            className="flex items-center justify-center w-5 h-5 bg-gray-300 text-white shado text-base"
                            onClick={() => dispatch(ADD_QUANTITY(item.id))}
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-medium leading-6 dark:text-dark dark:bg-dark">
                           $ {item.quantity * item.price} 
                          </div>
                        </div>

                        <div
                          className="cursor-pointer dark:text-dark dark:bg-dark"
                          onClick={() => dispatch(REMOVE_FROM_CART(item.id))}
                        >
                          <LiaTimesSolid size={30} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {cart.length ? (
                <div className="w-[25%]">
                  <div className="border border-[#E6E6E6]">
                    <div className="p-6">
                      <div className="border-b border-gray-200 flex items-center pb-4 justify-between">
                        <div className="text-gray-600 dark:text-dark dark:bg-dark text-xs font-normal capitalize leading-4">
                          Products:
                        </div>
                        <span className="text-gray-600 dark:text-dark dark:bg-dark text-xs font-normal leading-4">
                          {totalQuantity} products
                        </span>
                      </div>
                      <ul className="pr-list">
                        {cart?.map((cartItem) => (
                          <li
                            className="flex justify-between pb-4 border-b border-gray-200 py-5"
                            key={cartItem.id}
                          >
                            <div>
                              <div className="text-gray-800 dark:text-dark dark:bg-dark text-base font-medium leading-5 mb-1">
                                {cartItem.name}
                              </div>
                              <div className="text-gray-500 dark:text-dark dark:bg-dark text-xs font-normal leading-4">
                                {/* {cartItem.authorName} */}
                              </div>
                            </div>
                            <div className="right">
                              <div className="price">
                                <div className="text-base font-medium text-black dark:text-dark dark:bg-dark leading-5">
                                  ${cartItem.quantity * cartItem.price}
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ul className="bg-[FBFBFB]">
                      <li className="py-3 px-6 border-b border-[#E6E6E6]">
                        <div className="text-xs font-normal flex justify-between text-gray-500 dark:text-dark dark:bg-dark leading-4">
                          Total payment:
                          <div className="total-price">${total}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Link
                    className="bg-main text-white py-4 px-8 w-full flex items-center justify-center mt-5"
                    to="/checkout"
                  >
                    checkout{" "}
                  </Link>
                </div>
              ) : null}
            </div>
          ) : (
            <EmptyComponent name="Cart" />
          )}
        </div>
      
    </div>
  );
};

export default Cart;
