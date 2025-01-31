"use client";

import React, { useEffect, useState } from "react";
import useCart from "@/app/state/cartUtils";

const CartSidebar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const getLocalCartData = useCart((state) => state.getLocalCartData);
  const updateQuantity = useCart((state) => state.updateQuantity);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const confirmCheckout = useCart((state) => state.confirmCheckout);
  const cartData = useCart((state) => state.cartData);
  const [customerDetails, setcustomerDetails] = useState({ name: "", whatsappNumber: 0, email: "" });

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  useEffect(() => {
    getLocalCartData();
  }, []);

  // bila quantity undefined maka di fallback jadi 1 valuenya. Intinya default value quantity = 1
  const total = cartData.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0);

  return (
    <>
      {/* Cart Button */}
      <div>
        <button
          className="btn position-fixed end-0 m-4"
          onClick={toggleCart}
          style={{
            zIndex: 999,
            top: "25%",
            marginTop: "170px",
            backgroundColor: "#ffd400",
            borderColor: "#ffd400",
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28px"
            viewBox="0 -960 960 960"
            width="28px"
            fill="#ffffff"
            style={{ marginRight: "8px" }}>
            <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" />
          </svg>
          {cartData.length > 0 && (
            <div
              id="iconnumber"
              className="d-inline-block bg-danger text-white rounded-circle">
              {cartData.length}
            </div>
          )}
        </button>
      </div>

      {/* Cart Sidebar */}
      <div
        id="cart-sidebar"
        className={isCartOpen ? "open" : ""}>
        <div
          className="p-4 d-flex flex-column"
          style={{ height: "100vh", overflowY: "auto" }}>
          <div
            className="d-flex justify-content-between align-items-center mb-2"
            style={{ position: "relative" }}>
            <h4>Your Cart</h4>
            <button
              className="close-btn-new btn-danger rounded-2 px-2"
              onClick={toggleCart}>
              &times;
            </button>
          </div>

          {/* Cart Items */}
          <div
            className="cart-items my-1 py-2"
            style={{ flexGrow: 1, overflowY: "auto" }}>
            <ul className="list-group pe-2 gap-2">
              {cartData.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center gap-3">
                    <span>{item.title}</span>
                    <span>Rp{(item.price * (item.quantity || 1)).toLocaleString()}</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between my-2">
                    <div className="d-flex align-items-center border border-gray-300 rounded-lg overflow-hidden">
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => updateQuantity(item, "decrement")}>
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="form-control text-center"
                        style={{ width: "50px", marginBottom: "0px" }}
                      />
                      <button
                        className="btn btn-light"
                        type="button"
                        onClick={() => updateQuantity(item, "increment")}>
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item)}>
                      Hapus
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Checkout Form */}
          <div className="mt-4">
            {/* <h5>Checkout Details</h5> */}
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label custom-label">
                Nama
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="customerName"
                value={customerDetails.name}
                onChange={(e) => setcustomerDetails({ ...customerDetails, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="whatsapp"
                className="form-label custom-label">
                Nomor Whastapp
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="customerNumber"
                value={customerDetails.whatsappNumber}
                onChange={(e) => setcustomerDetails({ ...customerDetails, whatsappNumber: Number(e.target.value) })}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label custom-label">
                Email
              </label>
              <input
                type="email"
                className="form-control custom-input"
                id="customerEmail"
                value={customerDetails.email}
                onChange={(e) => setcustomerDetails({ ...customerDetails, email: e.target.value })}
                required
              />
            </div>
            <button
              className="btn btn-success w-100 mt-2"
              data-bs-toggle="modal"
              data-bs-target="#checkoutModal">
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <div
        className="modal fade"
        id="checkoutModal"
        tabIndex={-1}
        aria-labelledby="checkoutModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="checkoutModalLabel">
                Order Confirmation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Please confirm your order details:</p>
              <div className="mb-3">
                <p>Nama: {customerDetails.name}</p>
                <p>WhatsApp: {customerDetails.whatsappNumber}</p>
                <p>Email: {customerDetails.email}</p>
              </div>
              <ul>
                {cartData.map((item) => (
                  <li
                    key={item.id}
                    className="d-flex align-items-center">
                    <img
                      src={item.gambar[0].src}
                      alt={item.gambar[0].title}
                      className="img-thumbnail me-3 p-0"
                      style={{ width: "70px", height: "75px" }}
                    />
                    <div>
                      <p>
                        {item.title} - <b>{item.quantity} pcs</b>
                      </p>
                      {!item.quantity ? (
                        <p className="text-muted">Rp{item.price.toLocaleString()}</p>
                      ) : (
                        <p className="text-muted">Rp{(item.price * item.quantity).toLocaleString()}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="fw-bold">Total: Rp.{total.toLocaleString()}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                type="button"
                onClick={() => confirmCheckout(customerDetails)}
                className="btn btn-primary">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
