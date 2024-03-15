import React, { useState } from "react";

import { GoHeart } from "react-icons/go";
import { TbMenu } from "react-icons/tb";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_FILTER } from "../../../redux/slices/filterProductSlice";
import { selProducts } from "../../../redux/slices/productSlice";
import Search from "../../../features/components/header/search";
import { selCart } from "../../../redux/slices/cartSlice";
import { headerLinks, headerTopInfo } from "../../constant/headerLinks";
import Lang from "../../../features/components/header/lang";
import LoginMenu from "../../../features/components/header/loginMenu";
import Theme from "../../../features/components/header/theme";

const Header = () => {
  const products = useSelector(selProducts);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);
  const searchProduct = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
    setShowSearchResult(true);
    dispatch(SEARCH_FILTER({ search: searchText, products }));
  };
  const cartList = useSelector(selCart);
  return (
    <header>
      <div className="py-3 bg-gray-100  dark:bg-dark  dark:text-dark font-normal text-xs lg:block hidden">
        <div className="max-w-[95%] mx-auto dark:border-b dark:border-[#eee] pb-1">
          <div className="flex justify-end items-center gap-8">
          <Theme/>
            {headerTopInfo?.map((item,i) => (
              <span key={i}>{item.title}</span>
            ))}
            <Lang />
          </div>
        </div>
      </div>
      <div className="h-[75px] px-24 dark:bg-dark  dark:text-dark">
        <div className="flex lg:justify-center justify-between items-center gap-6">
          <Link to="/" className="font-bold text-2xl">
           <span className="text-main">BOOK</span> SHOP
          </Link>
          <Search
            showSearchResult={showSearchResult}
            setShowSearchResult={setShowSearchResult}
            searchProduct={searchProduct}
            search={search}
          />

          <div className="flex items-center gap-6">
            <div className="relative">
              <Link to="/cart">
                <PiShoppingCartLight size={30} />
                <span
                  className="w-4 h-4 flex items-center justify-center bg-main
                 text-white rounded-full text-xs absolute right-0 top-0"
                >
                  {cartList.length}
                </span>
              </Link>
            </div>
            <div className="cursor-pointer lg:hidden block">
              <TbMenu size={40} />
            </div>
            <div className="wishlist">
              <Link to="/wishlist">
                <GoHeart size={26} />
              </Link>
            </div>
            <LoginMenu />
          </div>
        </div>
      </div>
      <div className="bg-main py-5 px-10">
        <nav>
          <ul className="flex items-center justify-center gap-4">
            {headerLinks?.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.url}
                  className="text-light-orange-500 font-medium text-base leading-5 text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* <Search /> */}
    </header>
  );
};

export default Header;
