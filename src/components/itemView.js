import React, { useEffect } from "react";
import { useState } from "react";
import data from "./MOCK_DATA.json";
import { useParams, useLocation, Link, Outlet, location } from "react-router-dom";
import Card from "./card";
const ProdView = (props) => {
  const params = useParams();

  const products = data;
  const [curnProd, setCurrenProd] = useState({
    id: params.id !== "all" ? params.id : 0,
    category: params.cat !== "all" ? params.cat : "all",
    type: params.type !== "all" ? params.type : "all",
  });
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setCurrenProd({
      ...curnProd,
      id: params.id !== "all" ? params.id : 0,
      category: params.cat !== "all" ? params.cat : "all",
      type: params.type !== "all" ? params.type : "all",
    });
  }, [params]);

  const [crnt, setCrnt] = useState(0);

  const [item, setItemDesc] = useState({
    itemName: "",
    itemSize: null,
  });

  const szeStyle = {
    background: "black",
    color: "white",
  };

  function handleCart(e, id, br) {
    let itemsArr = {
      itemPrice: e.price,
      itemId: id,
      itemName: e.product_name,
      itemThumb: e.image_urls[0],
    };
    if (localStorage.getItem("cart") !== null) {
      let arr = JSON.parse(localStorage.getItem("cart"));

      arr = [...arr, itemsArr];

      localStorage.setItem("cart", JSON.stringify(arr));
      props.check(!props.og);
      if (br == "bn") {
        window.location.href = "/user/confirm-order";
      }
    } else if (localStorage.getItem("cart") == null) {
      localStorage.setItem("cart", JSON.stringify([itemsArr]));
      props.check(!props.og);
      if (br == "bn") {
        window.location.href = "/user/confirm-order";
      }
    }
  }

  return (
    <div className="container">
      {console.log(item)}
      <div className="row h-100 align-items-center" data-aos="zoom-in">
        <div className="col-12 col-lg-7">
          {products
            .filter((e) =>
              curnProd.category !== "all"
                ? e.gender == curnProd.category && e.category == curnProd.type
                : curnProd.type !== "all"
                ? e.gender == e.gender && e.category == curnProd.type
                : e.gender == e.gender
            )
            .map((ini, i) => {
              if (i == curnProd.id) {
                return <img src={ini.image_urls[crnt]} className="img-fluid" />;
              }
            })}
          <div className="productCar">
            <div className="imageGrid  bg-white">
              {products
                .filter((e) =>
                  curnProd.category !== "all"
                    ? e.gender == curnProd.category && e.category == curnProd.type
                    : curnProd.type !== "all"
                    ? e.gender == e.gender && e.category == curnProd.type
                    : e.gender == e.gender
                )
                [curnProd.id].image_urls.map((kini, j) => {
                  return (
                    <div
                      className="prBox p-2 shadow-sm mx-2 border border-2"
                      id={j}
                      onClick={(e) => {
                        setCrnt(j);
                      }}
                    >
                      <img src={kini} className="img-fluid" />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 py-lg-3 py-5">
          {products
            .filter((e) =>
              curnProd.category !== "all"
                ? e.gender == curnProd.category && e.category == curnProd.type
                : curnProd.type !== "all"
                ? e.gender == e.gender && e.category == curnProd.type
                : e.gender == e.gender
            )
            .map((ini, i) => {
              if (i == curnProd.id) {
                return (
                  <div>
                    <h5 className="fw-bold text-dark fs-2">{ini.product_name}</h5>
                    <h6 className="fw-bold text-dark fs-5 opcaity-75 py-3">{ini.price}</h6>

                    <p className="lead text-dark">{ini.brand}</p>
                    <div className="mt-5 px-0 mx-0">
                      <h6 className="fw-bold text-dark fs-5 opcaity-75 py-3">Available Sizes</h6>
                      {ini.size.map((kini) => {
                        return (
                          <div
                            className="boxSize p-2"
                            onClick={() => setItemDesc({ ...item, itemSize: kini })}
                          >
                            {item.itemSize == kini ? (
                              <div className="bg-dark p-3 text-center text-light fw-bold fs-5">
                                {kini}
                              </div>
                            ) : (
                              <div className="bg-light p-3 text-center text-dark border border-2 rounded fw-bold fs-5">
                                {kini}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="d-flex justify-content-between  mt-4">
                      <button
                        onClick={() => {
                          // setItemDesc({
                          //   ...item,
                          //   itemPrice: ini.price,
                          //   itemId: i,
                          //   itemName: ini.product_name,
                          //   itemThumb: ini.image_urls[0],
                          // });
                          let vr = "ct";

                          handleCart(ini, i, vr);
                        }}
                        className="btn btn-outline-dark fw-bold w-100 rounded-0 fs-4 rounded-start py-2"
                      >
                        Cart <i className="ms-1 fa fa-plus-circle"></i>
                      </button>

                      <button
                        onClick={() => {
                          let vr = "bn";
                          handleCart(ini, i, vr);
                        }}
                        className="btn btn-dark w-100 rounded-0 fs-4 rounded-end py-2"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="row my-5">
        <div className="my-3">
          <h2 className=" display-4 text-dark fw-bold text-center mt-5 pt-5" data-aos="zoom-out">
            SOME <span className="bg-dark text-light px-3 shadow-lg rounded">ALIKES</span>
          </h2>
        </div>

        {products
          .filter((e) =>
            curnProd.category !== "all"
              ? e.gender == curnProd.category && e.category == curnProd.type
              : curnProd.type !== "all"
              ? e.gender == e.gender && e.category == curnProd.type
              : e.gender == e.gender
          )
          .slice(0, 3)
          .map((ini, i) => {
            return (
              <div className="col-lg-4 col-12 my-3" data-aos="fade-up">
                <Card
                  key={i}
                  id={i}
                  record={ini}
                  category={curnProd.category}
                  ogs={props.og}
                  type={curnProd.type}
                  checks={(e) => props.check(e)}
                />
              </div>
            );
          })}
        <div className="col-12 my-3 d-flex justify-content-end">
          <Link to="/all-products/all/all" className="btn btn-lg btn-dark border-0  shadow-lg">
            Show More
            <i className="fa fa-chevron-right ps-3 align-middle" />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ProdView;
