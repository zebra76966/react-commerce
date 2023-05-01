import React from "react";
import { useState } from "react";
import Header from "./header";
import Carousel from "./carousel";
import Boxes from "./boxes";
import Card from "./card";
import data from "./MOCK_DATA.json";
import { Link, Outlet } from "react-router-dom";
const Main = (props) => {
  const dataset = data;
  const [mouse, setMouse] = useState(0);
  const opac = {
    opacity: mouse,
    transition: "all 0.5s ease-in-out",
  };
  return (
    <>
      <Carousel images={true} />
      <div className="container my-5 " style={{ overflowX: "hidden" }}>
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
            .filter((e) => e.gender == "Men" && e.category == "Shoes")
            .slice(0, 3)
            .map((ini, i) => {
              return (
                <div className="col-lg-4 col-12 my-3" data-aos="fade-up">
                  <Card
                    key={i}
                    id={i}
                    record={ini}
                    category="Men"
                    type="Shoes"
                    ogs={props.og}
                    checks={(e) => props.check(e)}
                  />
                </div>
              );
            })}
          <div className="col-12 my-3 d-flex justify-content-end">
            <Link
              to="/all-products/all/Men/Shoes"
              className="btn btn-lg btn-dark border-0  shadow-lg"
            >
              Show More
              <i className="fa fa-chevron-right ps-3 align-middle" />
            </Link>
          </div>
        </div>

        <div className="pt-5 pb-3">
          <h2 className=" display-4 text-dark fw-bold text-center mt-5 pt-5" data-aos="zoom-out">
            UNISEX <span className="bg-dark text-light px-3 shadow-lg rounded">HATS</span>
          </h2>
        </div>

        <div className="row mb-5">
          {dataset
            .filter((e) => e.category == "hats")
            .slice(0, 3)
            .map((ini, i) => {
              return (
                <div className="col-lg-4 col-12 my-3" data-aos="fade-up">
                  <Card
                    key={i}
                    id={i}
                    record={ini}
                    category="all"
                    type="hats"
                    ogs={props.og}
                    checks={(e) => props.check(e)}
                  />
                </div>
              );
            })}
          <div className="col-12 my-3 d-flex justify-content-end">
            <Link
              to="/all-products/all/all/hats"
              className="btn btn-lg btn-dark border-0  shadow-lg"
            >
              Show More
              <i className="fa fa-chevron-right ps-3 align-middle" />
            </Link>
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
            .filter((e) => e.gender == "Women" && e.category == "Shoes")
            .slice(0, 3)
            .map((ini, i) => {
              return (
                <div className="col-lg-4 col-12 my-3" data-aos="fade-up">
                  <Card
                    key={i}
                    id={i}
                    record={ini}
                    category="Women"
                    type="Shoes"
                    ogs={props.og}
                    checks={(e) => props.check(e)}
                  />
                </div>
              );
            })}
          <div className="col-12 my-3 d-flex justify-content-end">
            <Link
              to="/all-products/all/Women/Shoes"
              className="btn btn-lg btn-dark border-0  shadow-lg"
            >
              Show More
              <i className="fa fa-chevron-right ps-3 align-middle" />
            </Link>
          </div>
        </div>

        {/* itemVid Start===> */}
        <div
          className="row h-100 align-items-center position-relative itemVid"
          data-aos="zoom-in"
          onMouseEnter={() => setMouse(1)}
          onMouseLeave={() => setMouse(0)}
        >
          <div className="col-12 ">
            <video
              muted
              loop
              poster="logo512.png"
              className=" shadow-lg rounded"
              style={{ width: "100%", objectFit: "cover" }}
              autoPlay="true"
            >
              <source src="assets/videos/3.mp4" type="video/mp4" />
            </video>
          </div>
          <div className=" row h-100 w-100 position-absolute top-0 left-0 m-0 p-0" style={opac}>
            <div className="col-12 ">
              <h4 className="w-100 h-100 text-dark fw-bold display-1 fw-bold my-auto clipVid">
                NEW COLLECTIONS
              </h4>
              <Link
                to="/all-products/all/all/all"
                className="btn btn-outline-warning px-3 py-2 fs-4 shadow-lg fw-bold itemPos"
              >
                Discover More
                <i className="fa fa-globe ps-2"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* itemVid End===> */}

        <div className="my-3 mt-5 py-5">
          <h2 className=" display-4 text-dark fw-bold text-center mt-5 pt-5" data-aos="zoom-out">
            WOMEN <span className="bg-dark text-light px-3 shadow-lg rounded">CLOTHES</span>
          </h2>
        </div>

        <div className="row mb-5">
          {dataset
            .filter((e) => e.gender == "Women" && e.category == "clothes")
            .slice(0, 3)
            .map((ini, i) => {
              return (
                <div className="col-lg-4 col-12 my-3" data-aos="fade-up">
                  <Card
                    key={i}
                    id={i}
                    record={ini}
                    category="Women"
                    type="clothes"
                    ogs={props.og}
                    checks={(e) => props.check(e)}
                  />
                </div>
              );
            })}
          <div className="col-12 my-3 d-flex justify-content-end">
            <Link
              to="/all-products/all/Women/clothes"
              className="btn btn-lg btn-dark border-0  shadow-lg"
            >
              Show More
              <i className="fa fa-chevron-right ps-3 align-middle" />
            </Link>
          </div>
        </div>

        <div className="my-3 mt-5 ">
          <h2 className=" display-4 text-dark fw-bold text-center mt-5 pt-5" data-aos="zoom-out">
            MEN <span className="bg-dark text-light px-3 shadow-lg rounded">CLOTHES</span>
          </h2>
        </div>

        <div className="row mb-5">
          {dataset
            .filter((e) => e.gender == "Men" && e.category == "clothes")
            .slice(0, 3)
            .map((ini, i) => {
              return (
                <div className="col-lg-4 col-12 my-3" data-aos="fade-up">
                  <Card
                    key={i}
                    id={i}
                    record={ini}
                    category="Men"
                    type="clothes"
                    ogs={props.og}
                    checks={(e) => props.check(e)}
                  />
                </div>
              );
            })}
          <div className="col-12 my-3 d-flex justify-content-end">
            <Link
              to="/all-products/all/Men/clothes"
              className="btn btn-lg btn-dark border-0  shadow-lg"
            >
              Show More
              <i className="fa fa-chevron-right ps-3 align-middle" />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Main;
