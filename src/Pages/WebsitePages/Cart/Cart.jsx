"use client";
import React, { useContext, useEffect } from "react";
import { CartContext } from "@/Utilities/Contexts/CartContextProvider";

const Cart = () => {

  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, subTotal } = useContext(CartContext)


  return (
    <>
      {/* <!-- Shopping Cart Start --> */}
      <div className="shopping_cart">
        <div className="container">
          <h1 className="title">Shopping Cart</h1>
          <div className="row">
            {/* <!-- Product Table --> */}
            <div className="col-lg-8 table_wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart?.map((item) => (
                      <tr key={item?.productID}>
                        <td className="d-flex">
                          <div className="product_profile">
                            <div className="cart_img">
                              <img src={`https://api.abcpabnabd.com${item?.productImg}`} alt="" />
                            </div>
                            <div>
                              <a href={`/products/${item?.productID}`} className="product_name">{item?.productName.slice(0, 15)}...</a>
                              <p className="product_type">{item?.subCategory}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="quantity_all">
                            <div className="quantity_control">
                              <div className="wrap">
                                <button className="decrease-btn" onClick={() => decreaseQuantity(item?.productID)}>-</button>
                                <input
                                  type="text"
                                  className="quantity-input"
                                  value={item?.quantity}
                                  readOnly
                                />
                                <button className="increase-btn" onClick={() => increaseQuantity(item?.productID)}>+</button>
                              </div>
                            </div>
                            <button className="remove_btn" onClick={() => removeFromCart(item?.productID)}>
                              <svg
                                width="22"
                                height="24"
                                viewBox="0 0 22 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_1319_33)">
                                  <path
                                    d="M20.75 3.75H16.8884L15.2947 1.08984C14.8484 0.413766 14.1594 0 13.3719 0H8.62812C7.84062 0 7.10937 0.413766 6.70625 1.08984L5.11156 3.75H1.25C0.833984 3.75 0.5 4.08422 0.5 4.5V5.25C0.5 5.66719 0.833984 6 1.25 6H2V21C2 22.657 3.34297 24 5 24H17C18.657 24 20 22.657 20 21V6H20.75C21.1672 6 21.5 5.66719 21.5 5.25V4.5C21.5 4.08422 21.1672 3.75 20.75 3.75ZM8.55781 2.385C8.60469 2.30297 8.69844 2.25 8.79688 2.25H13.2031C13.3027 2.25 13.3965 2.30273 13.4434 2.38477L14.2625 3.75H7.7375L8.55781 2.385ZM17 21.75H5C4.58577 21.75 4.25 21.4142 4.25 21V6H17.75V21C17.75 21.4125 17.4125 21.75 17 21.75ZM11 19.5C11.4146 19.5 11.75 19.1646 11.75 18.75V9C11.75 8.58544 11.4146 8.25 11 8.25C10.5854 8.25 10.25 8.5875 10.25 9V18.75C10.25 19.1625 10.5875 19.5 11 19.5ZM7.25 19.5C7.6625 19.5 8 19.1625 8 18.75V9C8 8.58544 7.66456 8.25 7.25 8.25C6.83544 8.25 6.5 8.5875 6.5 9V18.75C6.5 19.1625 6.8375 19.5 7.25 19.5ZM14.75 19.5C15.1646 19.5 15.5 19.1646 15.5 18.75V9C15.5 8.58544 15.1646 8.25 14.75 8.25C14.3354 8.25 14 8.5875 14 9V18.75C14 19.1625 14.3375 19.5 14.75 19.5Z"
                                    fill="#E31736"
                                  />
                                </g>
                                <defs>
                                  <clipPath>
                                    <rect
                                      width="21"
                                      height="24"
                                      fill="white"
                                      transform="translate(0.5)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>

                              <span>Remove</span>
                            </button>
                          </div>
                        </td>
                        <td className="product_price">
                          <h3>৳{item?.price?.toLocaleString(2)}</h3>
                        </td>
                      </tr>)
                    )
                  }
                </tbody>
              </table>
            </div>

            {/* <!-- Summary Section --> */}
            <div className="col-lg-4">
              <div className="summary">
                <p className="summary_item">
                  <span>Sub Total:</span>{" "}
                  <span className="price1">৳{subTotal}</span>
                </p>
                <a href="/checkout" className="checkout_btn">
                  Checkout Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Shopping Cart End --> */}
    </>
  );
};

export default Cart;
