import React, { useEffect, useState } from "react";
import data from "./MOCK_DATA.json";
import { Link, Outlet } from "react-router-dom";

const searchToggle = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  backdropFilter: "blur(10px)",
  zIndex: "99",
  transition: "all 0.5s ease-in-out",
};

const Header = (props) => {
  const [stoggle, setToggle] = useState(false);

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState({});

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, [props.check]);

  return (
    <>
      {console.log(cart)}
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-lg-4 shadow-lg px-lg-3">
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
              Navbar
            </a>
          </div>
          <div className="collapse navbar-collapse w-100 " id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop All
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Accessories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hoodies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hats
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  T-Shirst & Polos
                </a>
              </li>
            </ul>
          </div>

          <div
            className="bag px-3 fs-5 d-flex justify-content-between 
          text-dark fs-4 position-absolute end-0 top-0 mt-3 mt-lg-4 pe-4 align-items-center"
          >
            <div className="position-relative ">
              {cart !== null && (
                <span
                  className="position-absolute bg-warning text-light rounded-circle fw-bold top-0 border-1 border-light"
                  style={{
                    height: "20px",
                    width: "20px",
                    textAlign: "center",
                    right: "-10px",
                    fontSize: "14px",
                  }}
                >
                  {cart.length < 10 ? cart.length : `9+`}
                </span>
              )}
              <Link to="/cart" className="link text-dark">
                <i className="fa fa-shopping-bag" style={{ cursor: "pointer" }}></i>
              </Link>
            </div>
            <i className="fa fa-user mx-4" style={{ cursor: "pointer" }}></i>
            <i
              className="fa fa-search"
              onClick={() => setToggle(!stoggle)}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </nav>
      {stoggle && (
        <div style={searchToggle} data-aos="fade-up">
          <div className="d-block w-100">
            <button
              className="btn btn-lg btn-dark fw-bold text-white rounded-circle position-absolute top-0 m-5 end-0"
              onClick={() => setToggle(!stoggle)}
            >
              X
            </button>
            <div className=" d-block w-100">
              <form className="d-flex pe-0 w-50 mx-auto shadow-lg">
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
            <div className="suggestionBox d-block">
              {data.map((pini, i) => {
                if (pini.product_name.toLowerCase().includes(search) && search.length !== 0) {
                  return (
                    <Link to={`/product/${i}/all`} className="link">
                      <div
                        className="sBox text-dark bg-light w-50 mx-auto d-flex align-items-center justify-content-between p-3 border border-1"
                        onClick={() => setToggle(!stoggle)}
                      >
                        <img src={pini.image_urls[0]} style={{ width: "10%" }} />
                        {pini.product_name}
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Header;
