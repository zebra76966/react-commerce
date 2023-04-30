import React from "react";
import { useState } from "react";
import Header from "./header";
import Carousel from "./carousel";
import Boxes from "./boxes";
import Card from "./card";
import data from "./MOCK_DATA.json";
import { Link, Outlet } from "react-router-dom";
const Main = () => {
  const dataset = data;
  return (
    <>
      <Carousel images={true} />
      <div className="container my-5">
        <div className="pt-5 pb-3">
          <h2 className=" display-4 text-dark fw-bold text-center mt-5 pt-5" data-aos="zoom-out">
            LATEST <span className="bg-dark text-light px-3 shadow-lg rounded">ARRIVALS</span>
          </h2>
        </div>
        <Boxes />

        <div className="pt-5 pb-3">
          <h2 className=" display-4 text-dark fw-bold text-center mt-5 pt-5" data-aos="zoom-out">
            MEN <span className="bg-dark text-light px-3 shadow-lg rounded">SHOES</span>
          </h2>
        </div>

        <div className="row mb-5">
          {dataset
            .filter((e) => e.gender == "Men")
            .slice(0, 3)
            .map((ini, i) => {
              return (
                <div className="col-lg-4 col-12 my-3" data-aos="fade-up">
                  <Link to={`/product/${i}/Men`} className="link">
                    <Card key={i} id={i} record={ini} />
                  </Link>
                </div>
              );
            })}
          <div className="col-12 my-3 d-flex justify-content-end">
            <button className="btn btn-lg btn-dark border-0  shadow-lg">
              Show More
              <i className="fa fa-chevron-right ps-3 align-middle" />
            </button>
          </div>
        </div>

        <div className="my-5 py-5" data-aos="zoom-in">
          <Carousel images={false} />
        </div>

        <div className="my-3">
          <h2 className=" display-4 text-dark fw-bold text-center mt-5 pt-5" data-aos="zoom-out">
            WOMEN <span className="bg-dark text-light px-3 shadow-lg rounded">SHOES</span>
          </h2>
        </div>

        <div className="row mb-5">
          {dataset
            .filter((e) => e.gender == "Women")
            .slice(0, 3)
            .map((ini, i) => {
              return (
                <div className="col-lg-4 col-12 my-3" data-aos="fade-up">
                  <Link to={`/product/${i}/Women`} className="link">
                    <Card key={i} id={i} record={ini} />
                  </Link>
                </div>
              );
            })}
          <div className="col-12 my-3 d-flex justify-content-end">
            <button className="btn btn-lg btn-dark border-0  shadow-lg">
              Show More
              <i className="fa fa-chevron-right ps-3 align-middle" />
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Main;
