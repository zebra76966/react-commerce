import React from "react";
import { Link, Outlet } from "react-router-dom";

const Carousel = (props) => {
  return (
    <>
      {props.images && (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner h-100">
            <div className="carousel-item active">
              <img src="assets/imgs/1.jpg" className="d-block" alt="..." />
              <div className="carousel-caption  d-md-block">
                <h5 className="fs-1 fw-bold">New Sneakers</h5>
                <p className="lead">Checkout newest Sneakers</p>
                <Link
                  to="/all-products/all/all/Shoes"
                  className="btn btn-light px-3 py-2 fs-5 shadow-lg"
                >
                  Explore More
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/banner_90c07307-9719-4d0f-bf9a-4bb7c66733cc.jpg?v=1665404300"
                className="d-block"
                alt="..."
              />
              <div className="carousel-caption  d-md-block">
                <h5 className="fs-1 fw-bold">Feel Traditional</h5>
                <p className="lead">Checkout the Ethincs looks for Women.</p>
                <Link
                  to="/all-products/all/Women/Indian"
                  className="btn btn-light px-3 py-2 fs-5 shadow-lg"
                >
                  Explore More
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="assets/imgs/3.jpg" className="d-block" alt="..." />
              <div className="carousel-caption  d-md-block">
                <h5 className="fs-1 fw-bold">
                  <em>THE CASUALS</em>
                </h5>
                <p className="lead">Checkout the newest in Casuals collection.</p>
                <Link
                  to="/all-products/all/all/clothes"
                  className="btn btn-light px-3 py-2 fs-5 shadow-lg"
                >
                  Explore More
                </Link>
              </div>
            </div>

            <div className="carousel-item">
              <img src="assets/imgs/6.jpg" className="d-block" alt="..." />
              <div className="carousel-caption d-block">
                <h5 className="fs-1 fw-bold">
                  <strong>THE</strong>{" "}
                  <span className="bg-warning px-2 rounded text-dark">
                    <em>ADD-ONS</em>
                  </span>
                </h5>

                <Link
                  to="/all-products/all/all/hats"
                  className="btn btn-light px-3 py-2 fs-5 shadow-lg"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
      {!props.images && (
        <div
          id="videocar"
          className="carousel slide carousel-fade shadow-lg rounded"
          style={{ background: "none" }}
          data-bs-ride="carousel"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="carousel-inner h-100 p-3 pb-2 rounded">
            <div className="carousel-item active" data-bs-interval="5000">
              <video
                muted
                loop
                poster="logo512.png"
                className="m-0 rounded"
                style={{ width: "100%", objectFit: "cover" }}
                autoPlay="true"
              >
                <source src="assets/videos/1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <video
                muted
                loop
                poster="logo512.png"
                style={{ width: "100%", objectFit: "cover" }}
                autoPlay="true"
              >
                <source src="assets/videos/2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="captionsVid">
            <h4 className="w-75 text-light fw-bold display-2">
              NEW <span className="d-block bg-warning text-white rounded ">ARRIVALS</span>
              IN WOMEN FASHION
            </h4>
            <Link
              to="/all-products/all/Women/all"
              className="btn btn-outline-warning px-3 py-2 fs-4 shadow-lg fw-bold"
            >
              Discover More
              <i className="fa fa-globe ps-2"></i>
            </Link>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Carousel;
