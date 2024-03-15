import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import SuggestSearch from "../suggestSearch";
import { useNavigate } from "react-router";

const Search = ({
  search,
  searchProduct,
  setShowSearchResult,
  showSearchResult,
}) => {
  const navigation=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigation("/all-products")
  };
  return (
    <div className="h-[75px] w-[825px] flex border-l border-r border-gray-300">
      <form className="w-full h-[75px] flex" action="" onSubmit={handleSubmit}>
          <input className="border-none outline-none bg-transparent w-full h-full px-4"
            onChange={searchProduct}
            value={search}
            type="text"
            placeholder="Axtar..."
          />{" "}
          <button className="w-20 h-[75px] border-l border-gray-300 flex items-center justify-center">
            <LuSearch size={30} />
          </button>
        {showSearchResult && (
          <SuggestSearch setShowSearchResult={setShowSearchResult} />
        )}
      </form>
    </div>
  );
};

export default Search;
