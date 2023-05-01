import React from "react";
import { Link, Outlet } from "react-router-dom";

const Boxes = () => {
  return (
    <div className="row ">
      <div className="col-lg-8 col-md-12 h-100">
        <div className="col-12 my-3" data-aos="fade-up">
          <Link to="/all-products/all/Women/clothes">
            <div className="fcards shadow">
              <h5 className="fw-bold fs-3 text-light">Tops</h5>
              <img src="assets/imgs/4.jpg" />
            </div>
          </Link>
        </div>
        <div className="col-12 my-3" data-aos="fade-up">
          <Link to="/all-products/all/all/Shoes">
            <div className="fcards shadow">
              <h5 className="fw-bold fs-3 text-light">Sneakers</h5>
              <img src="assets/imgs/1.jpg" />
            </div>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 h-100">
        <div className="col-12 my-3" data-aos="fade-left">
          <Link to="/all-products/all/all/clothes">
            <div className="fcards shadow">
              <h5 className="fw-bold fs-3 text-light">Jeans</h5>
              <img src="assets/imgs/3.jpg" />
            </div>
          </Link>
        </div>
        <div className="col-12 my-3" data-aos="fade-left">
          <Link to="/all-products/all/all/clothes">
            <div className="fcards shadow">
              <h5 className="fw-bold fs-3 text-light">Casuals</h5>
              <img src="assets/imgs/2.jpg" />
            </div>
          </Link>
        </div>
        <div className="col-12 my-3" data-aos="fade-left">
          <Link to="/all-products/all/all/hats">
            <div className="fcards shadow">
              <h5 className="fw-bold fs-3 text-light">Accessories</h5>
              <img src="assets/imgs/6.jpg" />
            </div>
          </Link>
        </div>
        <div className="col-12 my-3" data-aos="fade-left">
          <Link to="/all-products/all/all/all">
            <div className="fcards shadow">
              <h5 className="fw-bold fs-3 text-light">New</h5>
              <img src="assets/imgs/5.jpg" />
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Boxes;
