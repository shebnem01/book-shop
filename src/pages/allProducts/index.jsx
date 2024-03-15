import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronsDown } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { selProducts } from "../../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../../shared/components/product/singleProduct";
import useFetchProducts from "../../hooks/useFetchProducts";
import useToggle from "../../hooks/useToggle";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import {
  GET_FILTERED_PRODUCTS,
  PRICE_FILTER,
  selFilteredProduct,
  selSortType,
} from "../../redux/slices/filterProductSlice";
import Pagination from "../../shared/components/pagination";
import { ITEMS_PER_PAGE } from "../../shared/constant";
const AllProducts = () => {
  const filteredProduct = useSelector(selFilteredProduct);
  const totalItems = filteredProduct.length;
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || 1
  );
  const indexOfLastItem = ITEMS_PER_PAGE * currentPage;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProducts = filteredProduct?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / ITEMS_PER_PAGE); i++) {
    pageNumbers.push(i);
  }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      pagination(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      const nextPageNumber = currentPage + 1;
      setCurrentPage(nextPageNumber);
      pagination(currentPage + 1);
    }
  };
  const pagination = (paginate) => {
    setCurrentPage(paginate);
    localStorage.setItem("currentPage", currentPage);
  };
  const allProducts = useSelector(selProducts);
  const sortType = useSelector(selSortType);
  useFetchProducts();
  const [state, toggle] = useToggle();
  const dispatch = useDispatch();
  const sortPrice = (sortType) => {
    dispatch(PRICE_FILTER({ sortType, products: currentProducts }));
  };
  useEffect(() => {
    currentPage;
  }, []);
  useEffect(() => {
    dispatch(GET_FILTERED_PRODUCTS(allProducts));
  }, [allProducts, dispatch, sortType]);
 
  return (
    <>
      <div className="main-title">
        <div className="container">Products</div>
      </div>
      <div className="all-products-container">
        <div className="container-fluid px-2">
          <div className="row">
            <div className="col-xl-3 col-lg-4 d-lg-block d-none">
              <div className="filter-submenu">
                <div className="submenu-header">
                  <span>Filter</span>
                  <button className="reset">reset</button>
                </div>
                <div className="submenu-body">
                  <div className="submenu-accordion">
                    <div className="submenu-accordion-header">
                      <span>genre</span>
                      <div className="arrow-down">
                        <FiChevronDown />
                      </div>
                    </div>
                    <div className="submenu-accordion-body">
                      <ul>
                        <li>
                          <div className="check">
                            <label htmlFor="check">
                              <img src="./assets/images/Checkbox.svg" alt="" />
                              <img
                                className="hidden"
                                src="./assets/images/not-check.svg"
                                alt=""
                              />
                              Lorem
                            </label>
                            <input type="checkbox" id="check" />
                          </div>
                        </li>
                        <li>
                          <div className="check">
                            <label htmlFor="check">
                              <img src="./assets/images/Checkbox.svg" alt="" />
                              <img
                                className="hidden"
                                src="./assets/images/not-check.svg"
                                alt=""
                              />
                              Lorem
                            </label>
                            <input type="checkbox" id="check" />
                          </div>
                        </li>
                        <li>
                          <div className="check">
                            <label htmlFor="check">
                              <img src="./assets/images/Checkbox.svg" alt="" />
                              <img
                                className="hidden"
                                src="./assets/images/not-check.svg"
                                alt=""
                              />
                              Lorem
                            </label>
                            <input type="checkbox" id="check" />
                          </div>
                        </li>
                      </ul>
                      <div className="view-all">view all</div>
                    </div>
                  </div>
                  <div className="submenu-accordion">
                    <div className="submenu-accordion-header">
                      <span>Author</span>
                      <div className="arrow-down">
                        <FiChevronsDown />
                      </div>
                    </div>
                    <div className="submenu-accordion-body">
                      <ul>
                        <li>
                          <div className="check">
                            <label htmlFor="check">
                              <img src="./assets/images/Checkbox.svg" alt="" />
                              <img
                                className="hidden"
                                src="./assets/images/not-check.svg"
                                alt=""
                              />
                              Lorem
                            </label>
                            <input type="checkbox" id="check" />
                          </div>
                        </li>
                        <li>
                          <div className="check">
                            <label htmlFor="check">
                              <img src="./assets/images/Checkbox.svg" alt="" />
                              <img
                                className="hidden"
                                src="./assets/images/not-check.svg"
                                alt=""
                              />
                              Lorem
                            </label>
                            <input type="checkbox" id="check" />
                          </div>
                        </li>
                        <li>
                          <div className="check">
                            <label htmlFor="check">
                              <img src="./assets/images/Checkbox.svg" alt="" />
                              <img
                                className="hidden"
                                src="./assets/images/not-check.svg"
                                alt=""
                              />
                              Lorem
                            </label>
                            <input type="checkbox" id="check" />
                          </div>
                        </li>
                      </ul>
                      <div className="view-all">view all</div>
                    </div>
                  </div>
                  <div className="submenu-accordion">
                    <div className="submenu-accordion-header">
                      <span>Language</span>
                      <div className="arrow-down">
                        <FiChevronDown />
                      </div>
                    </div>
                    <div className="submenu-accordion-body">
                      <ul>
                        <li>
                          <div className="check">
                            <label htmlFor="check">
                              <img src="./assets/images/Checkbox.svg" alt="" />
                              <img
                                className="hidden"
                                src="./assets/images/not-check.svg"
                                alt=""
                              />
                              Lorem
                            </label>
                            <input type="checkbox" id="check" />
                          </div>
                        </li>
                        <li>
                          <div className="check">
                            <label htmlFor="check">
                              <img src="./assets/images/Checkbox.svg" alt="" />
                              <img
                                className="hidden"
                                src="./assets/images/not-check.svg"
                                alt=""
                              />
                              Lorem
                            </label>
                            <input type="checkbox" id="check" />
                          </div>
                        </li>
                        <li>
                          <div className="check">
                            <label htmlFor="check">
                              <img src="./assets/images/Checkbox.svg" alt="" />
                              <img
                                className="hidden"
                                src="./assets/images/not-check.svg"
                                alt=""
                              />
                              Lorem
                            </label>
                            <input type="checkbox" id="check" />
                          </div>
                        </li>
                      </ul>
                      <div className="view-all">view all</div>
                    </div>
                  </div>
                  <div className="submenu-accordion">
                    <div className="submenu-accordion-header">
                      <span>Publisher</span>
                      <div className="arrow-down">
                        <FiChevronDown />
                      </div>
                      <div className="submenu-accordion-body">
                        <ul>
                          <li>
                            <div className="check">
                              <label htmlFor="check">
                                <img
                                  src="./assets/images/Checkbox.svg"
                                  alt=""
                                />
                                <img
                                  className="hidden"
                                  src="./assets/images/not-check.svg"
                                  alt=""
                                />
                                Lorem
                              </label>
                              <input type="checkbox" id="check" />
                            </div>
                          </li>
                          <li>
                            <div className="check">
                              <label htmlFor="check">
                                <img
                                  src="./assets/images/Checkbox.svg"
                                  alt=""
                                />
                                <img
                                  className="hidden"
                                  src="./assets/images/not-check.svg"
                                  alt=""
                                />
                                Lorem
                              </label>
                              <input type="checkbox" id="check" />
                            </div>
                          </li>
                          <li>
                            <div className="check">
                              <label htmlFor="check">
                                <img
                                  src="./assets/images/Checkbox.svg"
                                  alt=""
                                />
                                <img
                                  className="hidden"
                                  src="./assets/images/not-check.svg"
                                  alt=""
                                />
                                Lorem
                              </label>
                              <input type="checkbox" id="check" />
                            </div>
                          </li>
                        </ul>
                        <div className="view-all">view all</div>
                      </div>
                    </div>
                    <div className="submenu-accordion">
                      <div className="submenu-accordion-header">
                        <span>Price</span>
                        <div className="arrow-down">
                          <FiChevronDown />
                        </div>
                      </div>
                      <div className="submenu-accordion-body">
                        <div className="range-slider">
                          <div className="result-container">
                            <div className="min-num">
                              <input
                                type="number"
                                min="0"
                                max="115"
                                id="result-min"
                                name="min"
                              />
                            </div>
                            <div className="max-num">
                              <input
                                type="number"
                                min="0"
                                max="115"
                                id="result-max"
                                name="max"
                              />
                            </div>
                          </div>
                          <div className="range-container">
                            <input max="115" type="range" />

                            <input type="range" min="0" max="115" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="filter-btn">Axtar</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="product-items">
                <div className="sort-products d-flex justify-content-end">
                  <div className="drop-down">
                    <div className="dropdown_header">
                      <div className="flex" onClick={toggle}>
                        Sıralama
                        <img src="./assets/images/chevron-down.svg" alt="" />
                      </div>
                      {state && (
                        <ul>
                          <li onClick={() => sortPrice("lowest")}>
                            Ucuzdan bahaya
                          </li>
                          <li onClick={() => sortPrice("highest")}>
                            Bahadan ucuza
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <div className="products-boxes">
                  <div className="row">
                    {currentProducts?.map((product) => (
                      <div key={product.id} className="col-xl-3 col-6">
                        <SingleProduct product={product} />
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="pagination">
                        <button className="prev" onClick={prevPage}>
                          {" "}
                          <MdOutlineKeyboardArrowLeft />
                        </button>
                        {pageNumbers?.map((num, index) => (
                          <button
                            className={currentPage === num ? "active" : ""}
                            onClick={() => pagination(num)}
                            key={index}
                          >
                            {num}
                          </button>
                        ))}

                        <button className="next" onClick={nextPage}>
                          <MdOutlineKeyboardArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="filter-submenu-modal">
          <div className="filter-submenu">
            <div className="submenu-header">
              <span>Filter</span>
              <div className="close-filter-modal">
                <img src="./assets/images/xmark.svg" alt="" />
              </div>
            </div>
            <div className="submenu-body">
              <div className="submenu-accordion">
                <div className="submenu-accordion-header">
                  <span>genre</span>
                  <div className="arrow-down">
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>
                <div className="submenu-accordion-body">
                  <ul>
                    <li>
                      <div className="check">
                        <label htmlFor="check">
                          <img src="./assets/images/Checkbox.svg" alt="" />
                          <img
                            className="hidden"
                            src="./assets/images/not-check.svg"
                            alt=""
                          />
                          Lorem
                        </label>
                        <input type="checkbox" id="check" />
                      </div>
                    </li>
                    <li>
                      <div className="check">
                        <label htmlFor="check">
                          <img src="./assets/images/Checkbox.svg" alt="" />
                          <img
                            className="hidden"
                            src="./assets/images/not-check.svg"
                            alt=""
                          />
                          Lorem
                        </label>
                        <input type="checkbox" id="check" />
                      </div>
                    </li>
                    <li>
                      <div className="check">
                        <label htmlFor="check">
                          <img src="./assets/images/Checkbox.svg" alt="" />
                          <img
                            className="hidden"
                            src="./assets/images/not-check.svg"
                            alt=""
                          />
                          Lorem
                        </label>
                        <input type="checkbox" id="check" />
                      </div>
                    </li>
                  </ul>
                  <div className="view-all">view all</div>
                </div>
              </div>
              <div className="submenu-accordion">
                <div className="submenu-accordion-header">
                  <span>Author</span>
                  <div className="arrow-down">
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>
                <div className="submenu-accordion-body">
                  <ul>
                    <li>
                      <div className="check">
                        <label htmlFor="check">
                          <img src="./assets/images/Checkbox.svg" alt="" />
                          <img
                            className="hidden"
                            src="./assets/images/not-check.svg"
                            alt=""
                          />
                          Lorem
                        </label>
                        <input type="checkbox" id="check" />
                      </div>
                    </li>
                    <li>
                      <div className="check">
                        <label htmlFor="check">
                          <img src="./assets/images/Checkbox.svg" alt="" />
                          <img
                            className="hidden"
                            src="./assets/images/not-check.svg"
                            alt=""
                          />
                          Lorem
                        </label>
                        <input type="checkbox" id="check" />
                      </div>
                    </li>
                    <li>
                      <div className="check">
                        <label htmlFor="check">
                          <img src="./assets/images/Checkbox.svg" alt="" />
                          <img
                            className="hidden"
                            src="./assets/images/not-check.svg"
                            alt=""
                          />
                          Lorem
                        </label>
                        <input type="checkbox" id="check" />
                      </div>
                    </li>
                  </ul>
                  <div className="view-all">view all</div>
                </div>
              </div>
              <div className="submenu-accordion">
                <div className="submenu-accordion-header">
                  <span>Language</span>
                  <div className="arrow-down">
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>
                <div className="submenu-accordion-body">
                  <ul>
                    <li>
                      <div className="check">
                        <label htmlFor="check">
                          <img src="./assets/images/Checkbox.svg" alt="" />
                          <img
                            className="hidden"
                            src="./assets/images/not-check.svg"
                            alt=""
                          />
                          Lorem
                        </label>
                        <input type="checkbox" id="check" />
                      </div>
                    </li>
                    <li>
                      <div className="check">
                        <label htmlFor="check">
                          <img src="./assets/images/Checkbox.svg" alt="" />
                          <img
                            className="hidden"
                            src="./assets/images/not-check.svg"
                            alt=""
                          />
                          Lorem
                        </label>
                        <input type="checkbox" id="check" />
                      </div>
                    </li>
                    <li>
                      <div className="check">
                        <label htmlFor="check">
                          <img src="./assets/images/Checkbox.svg" alt="" />
                          <img
                            className="hidden"
                            src="./assets/images/not-check.svg"
                            alt=""
                          />
                          Lorem
                        </label>
                        <input type="checkbox" id="check" />
                      </div>
                    </li>
                  </ul>
                  <div className="view-all">view all</div>
                </div>
              </div>
              <div className="submenu-accordion">
                <div className="submenu-accordion-header">
                  <span>Publisher</span>
                  <div className="arrow-down">
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>
                <div className="submenu-accordion-body">
                  <ul>
                    <li>
                      <div className="check">
                        <label htmlFor="check">
                          <img src="./assets/images/Checkbox.svg" alt="" />
                          <img
                            className="hidden"
                            src="./assets/images/not-check.svg"
                            alt=""
                          />
                          Lorem
                        </label>
                        <input type="checkbox" id="check" />
                      </div>
                    </li>
                    <li>
                      <div className="check">
                        <label htmlFor="check">
                          <img src="./assets/images/Checkbox.svg" alt="" />
                          <img
                            className="hidden"
                            src="./assets/images/not-check.svg"
                            alt=""
                          />
                          Lorem
                        </label>
                        <input type="checkbox" id="check" />
                      </div>
                    </li>
                    <li>
                      <div className="check">
                        <label htmlFor="check">
                          <img src="./assets/images/Checkbox.svg" alt="" />
                          <img
                            className="hidden"
                            src="./assets/images/not-check.svg"
                            alt=""
                          />
                          Lorem
                        </label>
                        <input type="checkbox" id="check" />
                      </div>
                    </li>
                  </ul>
                  <div className="view-all">view all</div>
                </div>
              </div>
              <div className="submenu-accordion">
                <div className="submenu-accordion-header">
                  <span>Price</span>
                  <div className="arrow-down">
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>
                <div className="submenu-accordion-body">
                  <div className="range-slider">
                    <div className="result-container">
                      <div className="min-num">
                        <input
                          type="number"
                          min="0"
                          max="115"
                          id="result-min"
                          name="min"
                        />
                      </div>
                      <div className="max-num">
                        <input
                          type="number"
                          min="0"
                          max="115"
                          id="result-max"
                          name="max"
                        />
                      </div>
                    </div>
                    <div className="range-container">
                      <input max="115" type="range" />

                      <input type="range" min="0" max="115" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="filter-btn">Axtar</button>
              <button className="filter-btn">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
