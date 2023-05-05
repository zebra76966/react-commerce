import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

const About = () => {
  const [rimages, setRimages] = useState([{}]);

  useEffect(() => {
    Axios.get(
      "https://api.unsplash.com/search/photos?client_id=wWKy3OxVoWxdHRa0Xp5SmkUGUEzchajwkSoccgajwXA&query=fashion&orientation=landscape"
    )
      .then((response) => {
        setRimages(response.data.results);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <div className="h-100 d-flex align-items-center justify-content-center text-dark">
        <div data-aos="slide-up">
          <h1 className="display-3 fw-bold">About</h1>
          <h1 className="display-2 d-block">
            Fashion{" "}
            <span
              className="bg-dark text-light px-1 rounded fw-bold"
              style={{ fontFamily: "arial" }}
            >
              <em>Hub</em>
            </span>
          </h1>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${
            rimages.length !== 1
              ? rimages[Math.floor(Math.random() * 10)].urls.regular
              : "logo192.png"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="h-100 d-flex align-items-center justify-content-center bg-info text-light"
      >
        <div className="row p-5" data-aos="slide-up">
          <div className="col-12 col-md-3 text-center text-md-start">
            <h5 className="display-6 fw-bold">CHOICE.</h5>
          </div>
          <div className="col-12 col-md-9 text-center text-md-start">
            <p className="lead">
              At our store, you will find a carefully curated selection of stylish and affordable
              clothing items that cater to a variety of tastes and preferences. From casual wear to
              formal attire, we have something for every occasion and every style.
            </p>
          </div>
        </div>
      </div>
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="row p-5" data-aos="slide-up">
          <div className="col-12 col-md-3 text-center text-md-start">
            <h5 className="display-6 fw-bold">VISION.</h5>
          </div>
          <div className="col-12 col-md-9 text-center text-md-start">
            <p className="lead">
              We believe that fashion should be accessible to everyone, which is why we strive to
              keep our prices affordable without compromising on quality. Our clothing is sourced
              from reputable suppliers who share our commitment to ethical and sustainable
              manufacturing practices.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${
            rimages.length !== 1
              ? rimages[Math.floor(Math.random() * 10)].urls.regular
              : "logo192.png"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="h-100 d-flex align-items-center justify-content-center bg-info text-light"
      >
        <div className="row p-5" data-aos="slide-up">
          <div className="col-12 col-md-3 text-center text-md-start">
            <h5 className="display-6 fw-bold">VALUES.</h5>
          </div>
          <div className="col-12 col-md-9 text-center text-md-start">
            <p className="lead">
              As a small business, we take pride in providing a personal touch to every customer
              interaction. Whether you have a question about sizing or need assistance with placing
              an order, we are always happy to help. We believe that building a relationship with
              our customers is key to our success, and we strive to create a welcoming and inclusive
              community around our store.
            </p>
          </div>
        </div>
      </div>
      <div className="h-100 d-flex align-items-center justify-content-center bg-dark text-light">
        <h5 className="display-6 fw-bold text-center" data-aos="slide-up">
          Thank you for choosing to shop with us ❤️
        </h5>
      </div>
    </div>
  );
};

export default About;
