import React from "react";

const Card = (props) => {
  return (
    <div className="card border-0 shadow">
      <img src={props.record.image_urls[0]} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fw-bold text-dark">{props.record.product_name}</h5>

        <h6 className="text-dark">{props.record.brand}</h6>
        <h5 className="text-dark py-2 opacity-75 fw-bold">{props.record.price}</h5>
        <div className="d-flex justify-content-between">
          <a href="#" className="btn btn-outline-dark fw-bold w-100 rounded-0 rounded-start">
            Cart <i className="ms-1 fa fa-plus-circle"></i>
          </a>

          <a href="#" className="btn btn-dark w-100 rounded-0 rounded-end">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
