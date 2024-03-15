import React from "react";

const Basket = () => {
  return (
    <div className="cart-page">
      <div className="main-title">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="d-flex align-items-center">
                Cart
                <span className="count">(2 products)</span>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div className="delete">
                Delete all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M23.9997 8L22.9319 24.0171C22.8383 25.42 22.7916 26.1215 22.4886 26.6533C22.2218 27.1216 21.8194 27.498 21.3345 27.7331C20.7836 28 20.0806 28 18.6746 28H13.3247C11.9187 28 11.2157 28 10.6649 27.7331C10.1799 27.498 9.77753 27.1216 9.51077 26.6533C9.20777 26.1215 9.16101 25.42 9.06748 24.0171L7.99967 8M5.33301 8H26.6663M21.333 8L20.9721 6.91743C20.6225 5.86833 20.4476 5.34379 20.1233 4.95597C19.8369 4.61351 19.4691 4.34843 19.0537 4.18503C18.5832 4 18.0303 4 16.9244 4H15.0749C13.9691 4 13.4162 4 12.9457 4.18503C12.5302 4.34843 12.1624 4.61351 11.8761 4.95597C11.5517 5.34379 11.3769 5.86833 11.0272 6.91743L10.6663 8M18.6663 13.3333V22.6667M13.333 13.3333V22.6667"
                    stroke="#FF2C3A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-page-container">
        <div className="container">
          <div className="row mb-3">
            <div className="col-xl-9 col-lg-8">
              <div className="cart-items">
                <div className="cart-item-content">
                  <div className="cart-item-mobile-top">
                    <div className="check">
                      <label for="check">
                        <img src="./assets/images/Checkbox.svg" alt="" />
                        <img
                          className="hidden"
                          src="./assets/images/not-check.svg"
                          alt=""
                        />
                      </label>
                      <input type="checkbox" id="check" />
                    </div>
                    <div className="remove-cart-item">
                      <img src="./assets/images/xmark.svg" alt="" />
                    </div>
                  </div>
                  <div className="cart-item">
                    <div className="check">
                      <label for="check">
                        <img src="./assets/images/Checkbox.svg" alt="" />
                        <img
                          className="hidden"
                          src="./assets/images/not-check.svg"
                          alt=""
                        />
                      </label>
                      <input type="checkbox" id="check" />
                    </div>
                    <a href="product_details.html" className="cart-pr-img">
                      <img src="./assets/images/images (1).png" alt="pr-img" />
                    </a>
                    <div className="pr-info">
                      <div className="pr-name">book name</div>
                      <ul>
                        <li>author name:Fyodor</li>
                        <li>language:Azerbaijan</li>
                        <li>number:1</li>
                        <li>
                          <div className="price mobile-price">
                            <div className="new-price">12.10 m</div>
                            <div className="old-price">12.50 m</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="counter">
                      <button className="dec">-</button>
                      <span className="count">1</span>
                      <button className="inc">+</button>
                    </div>
                    <div className="price">
                      <div className="old-price">12.50 m</div>
                      <div className="new-price">12.10 m</div>
                    </div>

                    <div className="remove-cart-item">
                      <img src="./assets/images/xmark.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div className="cart-item-content">
                  <div className="cart-item-mobile-top">
                    <div className="check">
                      <label for="check">
                        <img src="./assets/images/Checkbox.svg" alt="" />
                        <img
                          className="hidden"
                          src="./assets/images/not-check.svg"
                          alt=""
                        />
                      </label>
                      <input type="checkbox" id="check" />
                    </div>
                    <div className="remove-cart-item">
                      <img src="./assets/images/xmark.svg" alt="" />
                    </div>
                  </div>
                  <div className="cart-item">
                    <div className="check">
                      <label for="check">
                        <img src="./assets/images/Checkbox.svg" alt="" />
                        <img
                          className="hidden"
                          src="./assets/images/not-check.svg"
                          alt=""
                        />
                      </label>
                      <input type="checkbox" id="check" />
                    </div>
                    <a href="product_details.html" className="cart-pr-img">
                      <img src="./assets/images/images (1).png" alt="pr-img" />
                    </a>
                    <div className="pr-info">
                      <div className="pr-name">book name</div>
                      <ul>
                        <li>author name:Fyodor</li>
                        <li>language:Azerbaijan</li>
                        <li>number:1</li>
                        <li>
                          <div className="price mobile-price">
                            <div className="new-price">12.10 m</div>
                            <div className="old-price">12.50 m</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="counter">
                      <button className="dec">-</button>
                      <span className="count">1</span>
                      <button className="inc">+</button>
                    </div>
                    <div className="price">
                      <div className="old-price">12.50 m</div>
                      <div className="new-price">12.10 m</div>
                    </div>

                    <div className="remove-cart-item">
                      <img src="./assets/images/xmark.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="cart-detail">
                <div className="sec">
                  <div className="sec-title">
                    <div className="title">mehsullar:</div>
                    <span className="pr-count">2 mehsul</span>
                  </div>
                  <ul className="pr-list">
                    <li>
                      <div className="left">
                        <div className="name">Book name</div>
                        <div className="author-name">Author name: M.Dos</div>
                      </div>
                      <div className="right">
                        <div className="price">
                          <div className="old-price">12.50 m</div>
                          <div className="new-price">12.10 m</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="total">
                  <li>
                    <div className="title">
                      Total payment:
                      <div className="total-price">12.50 m</div>
                    </div>
                    <div className="discount">
                      <div className="title">Discount:</div>
                      <span>-11 m</span>
                    </div>
                  </li>
                  <li>
                    <div className="title">
                      Total payment:
                      <div className="total-price">12.50 m</div>
                    </div>
                  </li>
                </ul>
              </div>
              <button className="check-btn">checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
