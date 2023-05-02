import React from "react";
import Card from "./card";
import data from "./MOCK_DATA.json";
import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const AllProds = (props) => {
  const products = data;
  const params = useParams();
  const { pathname } = useLocation();
  const [stoggle, setToggle] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [curnProd, setCurrenProd] = useState({
    id: params.id !== "all" ? params.id : "all",
    category: params.cat !== "all" ? params.cat : "all",
    type: params.type !== "all" ? params.type : "all",
  });

  useEffect(() => {
    setCurrenProd({
      ...curnProd,
      id: params.id !== "all" ? params.id : "all",
      category: params.cat !== "all" ? params.cat : "all",
      type: params.type !== "all" ? params.type : "all",
    });
  }, [params]);

  return (
    <>
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row" data-aos="zoom-in">
          <div className="col-12">
            <form className="d-flex pe-0 w-100 mx-auto shadow-lg">
              <input
                className="form-control  rounded-0 rounded-start  py-3 shadow-sm"
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-dark rounded-0 rounded-end" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="row">
          {products
            .filter((e) =>
              curnProd.category !== "all"
                ? e.gender == curnProd.category && e.category == curnProd.type
                : curnProd.type !== "all"
                ? e.gender == e.gender && e.category == curnProd.type
                : e.gender == e.gender
            )
            .map((ini, i) => {
              if (ini.product_name.toLowerCase().includes(search)) {
                return (
                  <div className="col-lg-4 col-12 my-3" data-aos="fade-up">
                    <Card
                      key={i}
                      id={i}
                      record={ini}
                      type={curnProd.type}
                      category={curnProd.category}
                      ogs={props.og}
                      checks={(e) => props.check(e)}
                    />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default AllProds;
