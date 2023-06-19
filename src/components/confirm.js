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
  const [udata, setUdata] = useState({
    uaddress: "",
    uemail: localStorage.getItem("fuserMail"),
    uname: localStorage.getItem("fUserName"),
    uphone: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleSubmit(e) {
    e.preventDefault();
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
      udata.uname +
      "</p>" +
      "<p>Email: " +
      udata.uemail +
      "</p>" +
      "<p>Address: " +
      udata.uaddress +
      "</p>" +
      "<p>Phone: " +
      udata.uphone +
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
          message_html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>LPC Invest</title>
              <meta name="robots" content="noindex" />
              <style type="text/css">
                body {
                  margin: 0;
                  background-color: #cccccc;
                }
                table {
                  border-spacing: 0;
                }
                td {
                  padding: 0;
                }
                img {
                  border: 0;
                }
                .wrapper {
                  width: 100%;
                  table-layout: fixed;
                  background-color: #cccccc;
                  padding-bottom: 60px;
                }
                .main {
                  background-color: #ffffff;
                  margin: 0 auto;
                  width: 100%;
                  max-width: 600px;
                  border-spacing: 0;
                  font-family: sans-serif;
                  color: #171a1b;
                }
          
                .two-columns {
                  text-align: center;
                  font-size: 0;
                }
          
                .two-columns .column {
                  width: 100%;
                  max-width: 300px;
                  display: inline-block;
                  vertical-align: top;
                  text-align: center;
                }
          
                .btn {
                  text-decoration: none;
                  background-color: #00ce8d;
                  color: white;
                  font-weight: bold;
                  padding: 5px 10px;
                  text-align: center;
                  border-radius: 5px;
                }
          
                .two-columns .padding {
                  padding: 20px;
                }
                .two-columns.last {
                  padding: 15px 0;
                }
          
                .two-columns .content {
                  text-align: left;
                  line-height: 20px;
                  font-size: 15px;
                }
              </style>
            </head>
            <body style="margin: 0; background-color: #cccccc">
              <center
                class="wrapper"
                style="width: 100%; table-layout: fixed; background-color: #cccccc; padding-bottom: 60px"
              >
                <table
                  style="
                    border-spacing: 0;
                    background-color: #ffffff;
                    margin: 0 auto;
                    width: 100%;
                    max-width: 600px;
                    border-spacing: 0;
                    font-family: sans-serif;
                    color: #171a1b;
                  "
                  class="main"
                  width="100%"
                >
                  <!-- TOP BORDER -->
                  <tr>
                    <td height="8" style="background-color: #171a1b; padding: 0"></td>
                  </tr>
          
                  <!-- LOGO SECTION -->
                  <tr
                    style="
                      background-color: #171a1b;
                      color: #ffffff;
                      background-color: #171a1b;
                      color: #ffffff;
                      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                        url('https://lpcinvest.com/static/img/ad_images/vista-garden/41.jpg');
                      height: 100%;
                      background-attachment: fixed;
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                      position: relative;
                      padding: 10px 0;
                    "
                  >
                    <td style="padding: 14px 0 4px">
                      <table style="border-spacing: 0" width="100%">
                        <tr style="text-align: center">
                          <td style="padding: 0 62px 10px">
                            <a href="https://go.lpcinvest.com/vista-garden">
                              <img
                                style="border: 0"
                                src="https://lpcinvest.com/static/img/ad_images/vista-garden/logo2.png"
                                alt="LPC INVEST"
                                width="160"
                                title="lpc invest"
                              />
                            </a>
                            <p style="margin-bottom: 1px !important; padding-bottom: 0px">
                              <b>Prices are pre launch and will be going up on Monday 19th</b>
                            </p>
                            <p style="margin-bottom: 5px !important; padding: 5px; border: 2px solid #00ce8d">
                              Prices are going up by min of 5% so any buyers that get it now will immediately
                              up at least 15k
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
          
                  <!-- BANNER IMAGE -->
          
                  <tr>
                    <td style="border-bottom: 5px solid white; padding: 0; padding-top: 5px">
                      <a
                        href="https://go.lpcinvest.com/vista-garden"
                        style="text-decoration: none; color: #00ce8d"
                      >
                        <img
                          src="https://lpcinvest.com/static/img/ad_images/vista-garden/banner1.jpg"
                          alt=""
                          width="600"
                          style="max-width: 100%; border: 0"
                        />
                      </a>
                    </td>
                  </tr>
          
                  <tr
                    style="
                      background-color: #171a1b;
                      color: #ffffff;
                      background-color: #171a1b;
                      color: #ffffff;
                      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                        url('https://lpcinvest.com/static/img/ad_images/vista-garden/41.jpg');
                      height: 100%;
                      background-attachment: fixed;
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                      position: relative;
                    "
                  >
                    <td style="padding: 20px; padding-bottom: 0; text-align: center">
                      <p style="font-size: 22px; font-weight: bold">+6% projected Yields predicted</p>
                    </td>
                  </tr>
          
                  <tr style="background-color: #ffffff; color: #171a1b">
                    <td
                      style="
                        padding: 20px;
                        padding-top: 0;
                        padding-bottom: 30px;
                        border-bottom: 1px solid rgb(94, 93, 93);
                      "
                    >
                      <p style="font-size: 14px; font-weight: light; padding: 0; margin: 0; margin-top: 20px">
                        TRINITY ISLAND
                      </p>
                      <p style="font-size: 26px; font-weight: bold; margin-top: 3px">VISTA GARDENS</p>
          
                      <p style="margin-bottom: 20px !important; padding-bottom: 20px">
                        Vista River Gardens is situated within walking distance to all major amenities: 3 mins
                        to St John’s culture & enterprise quarter, 3 mins to Factory International, 9 mins to
                        Deansgate for restaurants, bars and shopping, and 9 mins to Spinningfields (Central
                        Business District)
                      </p>
          
                      <a
                        href="https://go.lpcinvest.com/vista-garden"
                        class="btn"
                        style="
                          text-decoration: none;
                          color: white;
                          padding: 10px;
                          text-decoration: none;
                          background-color: #00ce8d;
                          font-weight: bold;
                          padding: 5px 10px;
                          text-align: center;
                          border-radius: 5px;
                        "
                      >
                        Request Brochure
                      </a>
                    </td>
                  </tr>
          
                  <!-- Two COLUMN SECTION -->
                  <tr
                    style="
                      background-color: #171a1b;
                      color: #ffffff;
                      background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)),
                        url('https://lpcinvest.com/static/img/ad_images/vista-garden/c1.jpg');
                      height: 100%;
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                      position: relative;
                    "
                  >
                    <td style="padding: 0">
                      <table style="border-spacing: 0" width="100%">
                        <tr>
                          <td
                            class="two-columns last"
                            style="padding: 0; text-align: center; font-size: 0; padding: 15px 0"
                          >
                            <table
                              style="
                                border-spacing: 0;
                                width: 100%;
                                max-width: 300px;
                                display: inline-block;
                                vertical-align: top;
                                text-align: center;
                              "
                              class="column"
                            >
                              <tr>
                                <td class="padding" style="padding: 20px">
                                  <table
                                    style="
                                      border-spacing: 0;
                                      text-align: left;
                                      line-height: 20px;
                                      font-size: 15px;
                                    "
                                    class="content"
                                  >
                                    <tr>
                                      <td style="padding: 0">
                                        <a href="https://go.lpcinvest.com/vista-garden">
                                          <img
                                            src="https://lpcinvest.com/static/img/ad_images/vista-garden/c1.jpg"
                                            width="260"
                                            style="
                                              max-width: 260px;
                                              height: 260px;
                                              border-radius: 100%;
                                              object-fit: cover;
                                              border: 2px solid white;
                                            "
                                            alt=""
                                          />
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
          
                            <table
                              style="
                                border-spacing: 0;
                                width: 100%;
                                max-width: 300px;
                                display: inline-block;
                                vertical-align: top;
                                text-align: center;
                              "
                              class="column"
                            >
                              <tr>
                                <td class="padding" style="padding: 20px">
                                  <table
                                    style="
                                      border-spacing: 0;
                                      text-align: left;
                                      line-height: 20px;
                                      font-size: 15px;
                                    "
                                    class="content"
                                  >
                                    <tr>
                                      <td style="vertical-align: middle; padding: 0">
                                        <p
                                          style="
                                            font-size: 18px;
                                            margin-top: 0;
                                            padding-top: 0;
                                            font-weight: bold;
                                          "
                                        >
                                          THE LOCAL AREA
                                        </p>
          
                                        <p style="color: #ffffff; margin-top: 0">
                                          Vista River Gardens is an impressive 55-storey tower located on the
                                          bank of the River Irwell at Trinity Island, Manchester. Offering a
                                          5* suite of amenities across four floors and a unique geometric
                                          design that traces the river’s meander through the city, it is the
                                          perfect place for anyone looking for the best of both worlds – a
                                          city home with an abundance of space, both inside and out.
                                        </p>
                                        <a
                                          href="https://go.lpcinvest.com/vista-garden"
                                          class="btn"
                                          style="
                                            text-decoration: none;
                                            color: white;
                                            padding: 10px;
                                            text-decoration: none;
                                            background-color: #00ce8d;
                                            font-weight: bold;
                                            text-align: center;
                                            border-radius: 5px;
                                          "
                                          >Read More</a
                                        >
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
          
                  <!-- TWO COLUMN SECTION -->
                  <tr>
                    <td style="padding: 0">
                      <table style="border-spacing: 0" width="100%">
                        <tr>
                          <td
                            class="two-columns last"
                            style="padding: 0; text-align: center; font-size: 0; padding: 15px 0"
                          >
                            <table
                              style="
                                border-spacing: 0;
                                width: 100%;
                                max-width: 300px;
                                display: inline-block;
                                vertical-align: top;
                                text-align: center;
                              "
                              class="column"
                            >
                              <tr>
                                <td class="padding" style="padding: 20px">
                                  <table
                                    style="
                                      border-spacing: 0;
                                      text-align: left;
                                      line-height: 20px;
                                      font-size: 15px;
                                    "
                                    class="content"
                                  >
                                    <tr>
                                      <td style="vertical-align: middle; padding: 0">
                                        <p
                                          style="
                                            font-size: 18px;
                                            margin-top: 0;
                                            padding-top: 0;
                                            font-weight: bold;
                                          "
                                        >
                                          APARTMENT INVESTMENT OPTIONS
                                        </p>
          
                                        <p style="color: #171a1b; margin-top: 0">
                                          This development 1, 2 & 3 bedroom apartments and penthouses, all
                                          built to the highest of standards for its occupants.
                                        </p>
          
                                        <p style="color: #171a1b; margin-top: 0">
                                          <b>1, 2 & 3 BEDROOM APARTMENTS & PENTHOUSES</b>
                                        </p>
                                        <p style="color: #171a1b; margin-top: 0">
                                          <b> UNRIVALLED AMENITIES WITHIN THE CITY</b>
                                        </p>
          
                                        <a
                                          href="https://go.lpcinvest.com/vista-garden"
                                          class="btn"
                                          style="
                                            text-decoration: none;
                                            color: white;
                                            padding: 10px;
                                            text-decoration: none;
                                            background-color: #00ce8d;
                                            font-weight: bold;
                                            text-align: center;
                                            border-radius: 5px;
                                          "
                                          >Read More</a
                                        >
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              style="
                                border-spacing: 0;
                                width: 100%;
                                max-width: 300px;
                                display: inline-block;
                                vertical-align: top;
                                text-align: center;
                              "
                              class="column"
                            >
                              <tr>
                                <td class="padding" style="padding: 20px">
                                  <table
                                    style="
                                      border-spacing: 0;
                                      text-align: left;
                                      line-height: 20px;
                                      font-size: 15px;
                                    "
                                    class="content"
                                  >
                                    <tr>
                                      <td style="padding: 0">
                                        <a href="https://go.lpcinvest.com/vista-garden">
                                          <img
                                            src="https://lpcinvest.com/static/img/ad_images/vista-garden/17.jpg"
                                            width="260"
                                            style="
                                              max-width: 260px;
                                              height: 260px;
                                              border-radius: 100%;
                                              object-fit: cover;
                                              border: 2px solid #171a1b;
                                            "
                                            alt=""
                                          />
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
          
                  <!-- TITLE, TEXT & BUTTON -->
                  <tr
                    style="
                      background-color: #171a1b;
                      color: #ffffff;
                      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                        url('https://lpcinvest.com/static/img/ad_images/vista-garden/41.jpg');
                      height: 100%;
                      background-attachment: fixed;
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                      position: relative;
                    "
                  >
                    <td style="text-align: center; padding: 100px 30px">
                      <p style="font-size: 25px">
                        Register your interest in the site and request your prelaunch investment deck today.
                      </p>
                      <a
                        class="btn"
                        style="
                          font-size: 20px;
                          padding: 12px 10px;
                          text-decoration: none;
                          color: white;
                          padding: 10px;
                          background-color: #00ce8d;
                          font-weight: bold;
                          text-align: center;
                          border-radius: 5px;
                        "
                        href="https://go.lpcinvest.com/vista-garden"
                      >
                        Request Brochure
                      </a>
                    </td>
                  </tr>
          
                  <!-- FOOTER SECTION -->
                </table>
              </center>
            </body>
          </html>
          `,
        },
        "Eb5BgVpUc8b70M-yr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoad(false);
          setComp(true);
          localStorage.removeItem("cart");
          props.check(!props.og);
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
        <form style={{ marginTop: "100px" }} data-aos="zoom-in" onSubmit={handleSubmit}>
          <div className="container my-5 py-5">
            <h5 className="display-5 mx-auto">
              Confirm <span className="bg-dark text-light px-2 rounded">Order</span>
            </h5>
            {/* Form Start */}
            <h3 className="fw-bold mt-5 pt-5">Recipient Details</h3>

            <hr />
            <div className="col-12">
              <label for="Address" className="form-label">
                Address
              </label>
              <textarea
                rows="4"
                cols="50"
                className="form-control bg-light text-dark shadow border-0 p-3 w-100"
                id="Address"
                autoComplete="Address"
                placeholder="H-20 Sth ST."
                value={udata.uaddress}
                onChange={(e) => setUdata({ ...udata, uaddress: e.target.value })}
                required
              />
            </div>
            <div className="col-12 my-3">
              <label for="Phone" className="form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control bg-light text-dark shadow border-0 p-3"
                id="Phone"
                autoComplete="Phone"
                placeholder="Minimum 10 Digits"
                value={udata.uphone}
                min={1111111111}
                max={9999999999}
                onChange={(e) => setUdata({ ...udata, uphone: e.target.value })}
                required
              />
            </div>
            {udata.uphone.toString().length < 10 ||
              (udata.uphone.toString().length > 10 && (
                <span className="bg-warning text-dark p-3 rounded my-5">
                  Phone Number should be atleast 10 digits
                </span>
              ))}
            {/* Form End */}

            {cart.map((ini, i) => {
              return (
                <>
                  <div className="row text-dark text-center mt-5">
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
                        type="button"
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
              <button
                className="btn btn-outline-dark btn-lg fw-bold px-4 fs-5 py-2 shadow-lg"
                type="submit"
              >
                Confirm <i className="fa fa-check-circle fs-3 ps-2 align-middle"></i>
              </button>
            </div>
          </div>
        </form>
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
