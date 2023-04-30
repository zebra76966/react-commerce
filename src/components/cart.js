import React, { useState } from "react";
import { json } from "react-router-dom";

const Cart = () => {
  const [cart, getCart] = useState(
    localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : {}
  );
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div className="container my-auto">
          {cart.map((ini, i) => {
            return (
              <>
                <div className="row text-dark text-center">
                  <div className="col-4 d-flex align-items-center">
                    <img src={ini.itemThumb} className="img-fluid w-25" />
                  </div>
                  <div className="col-3 text-start d-flex align-items-center">
                    <p className="text-lead">{ini.itemName}</p>
                  </div>
                  <div className="col-4 d-flex align-items-center justify-content-end">
                    <p className="text-lead">{ini.itemPrice}</p>
                  </div>
                  <div className="col-1 d-flex align-items-center text-end">
                    <button
                      className="btn btn-lg btn-dark rounded-circle"
                      onClick={() => {
                        let newarr = [...cart];
                        newarr.splice(i, 1);
                        localStorage.setItem("cart", JSON.stringify(newarr));
                        getCart(newarr);
                      }}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
          <div className="w-100 text-end">
            <button className="btn btn-outline-dark btn-lg fw-bold px-4 fs-5 py-2 shadow-lg">
              Checkout <i className="fa fa-arrow-circle-right fs-3 ps-2 align-middle"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
