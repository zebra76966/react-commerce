import React from "react";

const Header = () => {
  return (
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
        <form className="d-flex pe-0">
          <input
            className="form-control  rounded-0 rounded-start  py-2 shadow-sm"
            type="search"
            placeholder="Search"
          />
          <button className="btn btn-dark rounded-0 rounded-end" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
