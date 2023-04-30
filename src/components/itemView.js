import React from "react";
import { useState } from "react";
import data from "./MOCK_DATA.json";
import { useParams } from "react-router-dom";
const ProdView = () => {
  const params = useParams();

  const products = data;
  const [curnProd, setCurrenProd] = useState({
    id: params.id !== "all" ? params.id : 0,
    category: params.cat !== "all" ? params.cat : "Women",
  });

  const [crnt, setCrnt] = useState(0);

  const [item, setItemDesc] = useState({
    itemName: "",
    itemSize: null,
  });

  const szeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <>
      {console.log(crnt)}
      <div className="row h-100 align-items-center" data-aos="zoom-in">
        <div className="col-lg-7">
          {products
            .filter((e) => e.gender == curnProd.category)
            .map((ini, i) => {
              if (i == curnProd.id) {
                return <img src={ini.image_urls[crnt]} className="img-fluid" />;
              }
            })}
          <div className="productCar">
            <div className="imageGrid  bg-white">
              {products
                .filter((e) => e.gender == curnProd.category)
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
        <div className="col-lg-5">
          {products
            .filter((e) => e.gender == curnProd.category)
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
                            <div className="bg-dark p-3 text-center text-light fw-bold fs-5">
                              {kini}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default ProdView;
