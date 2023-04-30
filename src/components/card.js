import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  function handleCart(e) {
    if (localStorage.getItem("cart") !== null) {
      let newItem = {
        itemName: props.record.product_name,
        itemPrice: props.record.price,
        itemCat: props.record.gender,
        itemId: props.id,
        itemThumb: props.record.image_urls[0],
      };
      console.log(newItem);
      let arr = JSON.parse(localStorage.getItem("cart"));

      arr = [...arr, newItem];
      localStorage.setItem("cart", JSON.stringify(arr));
      props.checks(!props.ogs);
    } else if (localStorage.getItem("cart") == null) {
      let newItem = [
        {
          itemName: props.record.product_name,
          itemPrice: props.record.price,
          itemCat: props.record.gender,
          itemId: props.id,
          itemThumb: props.record.image_urls[0],
        },
      ];
      console.log(newItem);
      localStorage.setItem("cart", JSON.stringify(newItem));
      props.checks(!props.ogs);
    }
  }

  return (
    <div className="card border-0 shadow">
      <Link to={`/product/${props.id}/${props.category}`} className="link">
        <img src={props.record.image_urls[0]} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <Link to={`/product/${props.id}/${props.category}`} className="link">
          <h5 className="card-title fw-bold text-dark">{props.record.product_name}</h5>

          <h6 className="text-dark">{props.record.brand}</h6>
          <h5 className="text-dark py-2 opacity-75 fw-bold">{props.record.price}</h5>
        </Link>

        <div className="d-flex justify-content-between">
          <button
            onClick={handleCart}
            className="btn btn-outline-dark fw-bold w-100 rounded-0 rounded-start"
          >
            Cart <i className="ms-1 fa fa-plus-circle"></i>
          </button>

          <Link
            to={`/product/${props.id}/${props.category}`}
            className="btn btn-dark w-100 rounded-0 rounded-end"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
