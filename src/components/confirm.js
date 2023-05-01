import React from "react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Link, Outlet, useLocation } from "react-router-dom";

const ConfirmOrder = (props) => {
  const [cart, getCart] = useState(
    localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : []
  );
  let priceString = 0;
  let TotalPrice = "";

  const [loading, setLoad] = useState(false);
  const [comp, setComp] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleSubmit() {
    setLoad(true);
    // Axios Goes Here For email to the merchant
    let tableHtml =
      "<table style='border:1px solid grey'><thead style='background:#2f2f2f;color:white'><tr><th>Name</th><th>Price</th></tr></thead><tbody>";

    // iterate through the sub-array and add each item to the table
    cart.forEach((item) => {
      tableHtml +=
        "<tr style='border:1px solid grey'><td style='border:1px solid grey'>" +
        item.itemName +
        "</td><td style='border:1px solid grey'>" +
        item.itemPrice +
        "</td></tr>";
    });

    // close the table HTML
    tableHtml += "</tbody></table>";

    // create the user info HTML
    let userHtml =
      "<p>User Name: " +
      "Rohit Sharma" +
      "</p>" +
      "<p>Email: " +
      "userInfo.email" +
      "</p>" +
      "<p>Address: " +
      "userInfo.address" +
      "</p>";

    // combine the user info and table HTML into a single HTML string
    let messageHtml = userHtml + tableHtml;

    // now you can use emailjs to send an email with the user info and table included
    // for example:
    emailjs
      .send(
        "service_cxl3wkl",
        "template_zwe6olk",
        {
          message_html: messageHtml,
        },
        "Eb5BgVpUc8b70M-yr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoad(false);
          setComp(true);
          localStorage.removeItem("cart");
          getCart([]);
        },
        (error) => {
          console.log(error.text);
          setLoad(false);
          setComp(false);
        }
      );
  }

  return (
    <>
      {console.log(cart)}
      {loading && (
        <div className="loader">
          <div className="border border-1 border-dark p-4 rounded shadow-lg">
            <img src="assets/imgs/loader.gif" className="img-fluid" />
            <h5 className="text-dark fw-bold text-center">PROCESSING</h5>
          </div>
        </div>
      )}
      {comp && (
        <div className="confirmed" data-aos="zoom-in">
          <div className="border border-1 border-dark p-4 rounded shadow-lg text-center">
            <h5 className="text-dark fw-bold text-center">Order Confirmed</h5>
            <p>You'll receive a onfirmation email from the Seller</p>
            <Link to="/" className="btn btn-dark ">
              OK <i className="fa fa-check-circle"></i>
            </Link>
          </div>
        </div>
      )}
      {cart !== undefined && cart.length !== 0 && (
        <div style={{ marginTop: "100px" }} data-aos="zoom-in">
          <div className="container my-5 py-5">
            <h5 className="display-5 mx-auto">
              Confirm <span className="bg-dark text-light px-2 rounded">Order</span>
            </h5>
            {cart.map((ini, i) => {
              return (
                <>
                  <div className="row text-dark text-center">
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

      <Outlet />
    </>
  );
};

export default ConfirmOrder;
