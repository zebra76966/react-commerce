import React from "react";

const Boxes = () => {
  return (
    <div className="row ">
      <div className="col-lg-8 col-md-12 h-100">
        <div className="col-12 my-3" data-aos="fade-up">
          <div className="fcards shadow">
            <h5 className="fw-bold fs-3 text-light">Tops</h5>
            <img src="assets/imgs/4.jpg" />
          </div>
        </div>
        <div className="col-12 my-3" data-aos="fade-up">
          <div className="fcards shadow">
            <h5 className="fw-bold fs-3 text-light">Sneakers</h5>
            <img src="assets/imgs/1.jpg" />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 h-100">
        <div className="col-12 my-3" data-aos="fade-left">
          <div className="fcards shadow">
            <h5 className="fw-bold fs-3 text-light">Jeans</h5>
            <img src="assets/imgs/3.jpg" />
          </div>
        </div>
        <div className="col-12 my-3" data-aos="fade-left">
          <div className="fcards shadow">
            <h5 className="fw-bold fs-3 text-light">Casuals</h5>
            <img src="assets/imgs/2.jpg" />
          </div>
        </div>
        <div className="col-12 my-3" data-aos="fade-left">
          <div className="fcards shadow">
            <h5 className="fw-bold fs-3 text-light">Accessories</h5>
            <img src="assets/imgs/6.jpg" />
          </div>
        </div>
        <div className="col-12 my-3" data-aos="fade-left">
          <div className="fcards shadow">
            <h5 className="fw-bold fs-3 text-light">New</h5>
            <img src="assets/imgs/5.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
