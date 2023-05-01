import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Cart = (props) => {
  const [cart, getCart] = useState(
    localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : []
  );
  let priceString = 0;
  let TotalPrice = "";

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div style={{ marginTop: "100px" }} data-aos="fade-up">
        {cart !== undefined && cart.length !== 0 && (
          <div className="container my-5 py-5">
            {cart.map((ini, i) => {
              return (
                <>
                  <div className="row text-dark text-center" data-aos="fade-up">
                    <div className="col-3 d-flex align-items-center ps-0">
                      <img src={ini.itemThumb} className="img-fluid " />
                    </div>
                    <div className="col-3 text-start d-flex fs-6 align-items-center">
                      <p className="text-lead pb-0 mb-0">{ini.itemName}</p>
                    </div>
                    <div className="col-4 d-flex align-items-center fs-6 justify-content-center">
                      <p className="text-lead pb-0 mb-0">{ini.itemPrice}</p>
                    </div>
                    <div className="col-2 d-flex align-items-center text-end pe-0">
                      <button
                        className="btn btn-dark rounded-circle"
                        onClick={() => {
                          let newarr = [...cart];
                          newarr.splice(i, 1);
                          localStorage.setItem("cart", JSON.stringify(newarr));
                          getCart(newarr);
                          props.check(!props.og);
                        }}
                      >
                        <i className="fa fa-trash vertical-middle"></i>
                      </button>
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
            <div className="row">
              <div className="col-7 text-start">
                <p className="text-lead pb-0 mb-0 fw-bold">Total</p>
              </div>
              <div className="col-4 text-start ps-5">
                <p className="text-lead pb-0 mb-0 fw-bold">
                  {cart.map((ini) => {
                    priceString += parseFloat(ini.itemPrice.replace(/[^\d.-]/g, ""));
                    TotalPrice = priceString.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 2,
                    });
                  })}
                  {TotalPrice}
                </p>
              </div>
            </div>
            <div className="w-100 text-end mt-5">
              <Link
                to="/confirm-order"
                className="btn btn-outline-dark btn-lg fw-bold px-4 fs-5 py-2 shadow-lg"
              >
                Checkout <i className="fa fa-arrow-circle-right fs-3 ps-2 align-middle"></i>
              </Link>
            </div>
          </div>
        )}
        {cart.length == 0 && (
          <div
            className="container d-flex h-100 align-items-center"
            style={{ marginTop: "100px" }}
            data-aos="zoom-in"
          >
            <div className="w-100 text-center mt-5">
              <h5 className="display-5 mx-auto my-4">
                Cart is <span className="bg-dark text-light px-2 rounded">Empty</span>
              </h5>
              <Link to="/" className="btn btn-outline-dark btn-lg fw-bold px-4 fs-5 py-2 shadow-lg">
                Add Items <i className="fa fa-plus-circle fs-3 ps-2 align-middle"></i>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Cart;
