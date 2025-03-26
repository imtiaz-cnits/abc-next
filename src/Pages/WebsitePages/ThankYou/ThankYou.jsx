"use client"

<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> f642bf4891f2ea6180f8334f133a7654e25bfc39
import productImg1 from "@/assets/img/cart-product-img1.webp";
import productImg2 from "@/assets/img/cart-product-img2.webp";
import productImg3 from "@/assets/img/cart-product-img3.webp";
import { PlaceOrderContext } from "@/Utilities/Contexts/PlaceOrderContextProvider";
import { useRouter } from "next/navigation";
import moment from "moment";

const ThankYou = () => {

<<<<<<< HEAD
  const { order, removeOrder, loading } = useContext(PlaceOrderContext)
  const router = useRouter()

  useEffect(() => {
    if (!order && !loading) {
      return router.push("/")
    }
  }, [order, loading, router])

  const formattedDate = moment(order?.payment?.updatedAt).utcOffset(6).format("dddd, MMMM DD, YYYY - hh:mm a");

  const handleBackToHome = () => {
    removeOrder()
    return router.push("/")
  }

=======
>>>>>>> f642bf4891f2ea6180f8334f133a7654e25bfc39
  return (
    <>
      {/* <!-- Billing Details Start --> */}
      <div className="thank_you">
        <div className="container">
          <div className="breadcrumb">
            <div className="icon">
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3435 3.48902C13.9274 2.90368 13.9276 1.95615 13.3439 1.37059L13.0392 1.06494C12.4532 0.477221 11.5015 0.476931 10.9152 1.0643L1.05768 10.9403C0.473216 11.5259 0.473215 12.4741 1.05768 13.0597L10.9152 22.9357C11.5015 23.5231 12.4532 23.5228 13.0391 22.9351L13.3439 22.6294C13.9276 22.0439 13.9274 21.0963 13.3435 20.511L5.90942 13.0594C5.32529 12.4739 5.32529 11.5261 5.90942 10.9406L13.3435 3.48902Z"
                  fill="#09090B"
                />
                <path
                  d="M24.5427 3.48902C25.1267 2.90368 25.1268 1.95615 24.5431 1.37059L24.2384 1.06494C23.6525 0.477221 22.7007 0.476931 22.1144 1.0643L12.2569 10.9403C11.6724 11.5259 11.6724 12.4741 12.2569 13.0597L22.1144 22.9357C22.7007 23.5231 23.6525 23.5228 24.2384 22.9351L24.5431 22.6294C25.1268 22.0439 25.1267 21.0963 24.5427 20.511L17.1086 13.0594C16.5245 12.4739 16.5245 11.5261 17.1086 10.9406L24.5427 3.48902Z"
                  fill="#09090B"
                />
              </svg>
            </div>
<<<<<<< HEAD
            <a href="#" onClick={handleBackToHome}>Back To Home</a>
=======
            <a href="/">Back To Home</a>
>>>>>>> f642bf4891f2ea6180f8334f133a7654e25bfc39
          </div>

          <div className="thank_you_summery">
            <div className="heading_wrapper">
              <div className="icon">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1393_411)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.6 32.4L18 38L36 56L76 16L70.4 10.4L36 44.8L23.6 32.4ZM72 40C72 57.6 57.6 72 40 72C22.4 72 8 57.6 8 40C8 22.4 22.4 8 40 8C43.2 8 46 8.4 48.8 9.2L55.2 2.8C50.4 1.2 45.2 0 40 0C18 0 0 18 0 40C0 62 18 80 40 80C62 80 80 62 80 40H72Z"
                      fill="#E31736"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1393_411">
                      <rect width="80" height="80" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2>Thanks for your order!</h2>
              <p>The order confirmation has been sent to {order?.billing?.cus_email}</p>
            </div>

            <div className="payment_details">
              <div className="details">
                <h2 className="title">Order/ Invoice ID</h2>
                <p>{order?.orderID}</p>
              </div>
              <div className="details">
                <h2 className="title">Transaction Date</h2>
                <p>{formattedDate}</p>
              </div>
              <div className="details">
                <h2 className="title">Payment Method</h2>
                <p>{order?.payment?.pay_method}: {order?.payment?.tran_id} {order?.payment?.acc_number}</p>
              </div>
            </div>

            <div className="order_items">
              <div className="cart_header">
                <h2>Your Order</h2>
              </div>
              <ul className="cart_items">
                {
                  order?.invoiceProducts?.map((product, idx) => (
                    <li key={idx}>
                      <div className="product_details_wrapper">
                        <div className="product_item">
                          <img src={`https://api.abcpabnabd.com${product?.productID?.productImg}`} alt="" />
                        </div>
                        <div className="item">
                          <span className="title">{product?.productID?.productName}</span>
                          <div className="type_wrap_container">
                            <h2 className="type_wrap">
                              {product?.productID?.subCategoryID?.subCategoryName}<span>x{product?.qty}</span>
                            </h2>
                          </div>
                        </div>
                      </div>
<<<<<<< HEAD
                      <div>
                        <span className="price"> ৳{(product?.productID?.discountPrice || product?.productID?.price).toLocaleString(2)} </span>
                      </div>
                    </li>))
                }
=======
                    </div>
                  </div>
                  <div>
                    <span className="price"> ৳149.99 </span>
                  </div>
                </li>
                <li>
                  <div className="product_details_wrapper">
                    <div className="product_item">
                      <img src={productImg2.src} alt="" />
                    </div>
                    <div className="item">
                      <span className="title">MSI- Gaming Case</span>
                      <div className="type_wrap_container">
                        <h2 className="type_wrap">
                          Gaming Case<span>1×</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="price"> ৳139.99 </span>
                  </div>
                </li>
                <li>
                  <div className="product_details_wrapper">
                    <div className="product_item">
                      <img src={productImg3.src} alt="" />
                    </div>
                    <div className="item">
                      <span className="title">CAUGAR- Gaming Headphone</span>
                      <div className="type_wrap_container">
                        <h2 className="type_wrap">
                          Headphone<span>1×</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="price">৳54.00</span>
                  </div>
                </li>
>>>>>>> f642bf4891f2ea6180f8334f133a7654e25bfc39
              </ul>
            </div>

            <div className="order_summary mt-4">
              <p className="summary_item">
<<<<<<< HEAD
                <span>Sub-Total</span> <span className="price1">৳{order?.payment?.subTotal}</span>
              </p>
              <p className="summary_item">
                <span>Discount</span> <span className="price">-৳{order?.payment?.discount}</span>
              </p>
              <p className="summary_item">
                <span className="grand">Grand Total</span>
                <span className="grand_price">৳{order?.payment?.grandTotal}</span>
=======
                <span>Sub-Total</span> <span className="price1">৳343.98</span>
              </p>
              <p className="summary_item">
                <span>Taxes</span> <span className="price">-৳5.00</span>
              </p>
              <p className="summary_item">
                <span>Discount</span> <span className="price">-৳0</span>
              </p>
              <p className="summary_item">
                <span>Shipment Cost</span> <span className="price">৳22.50</span>
              </p>
              <p className="summary_item">
                <span className="grand">Grand Total</span>
                <span className="grand_price">৳371.48</span>
>>>>>>> f642bf4891f2ea6180f8334f133a7654e25bfc39
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="#" className="home-btn" onClick={handleBackToHome}>Back To Home</a>
          </div>
        </div>
      </div>
      {/* <!-- Billing Details End --> */}
    </>
  );
};

export default ThankYou;
