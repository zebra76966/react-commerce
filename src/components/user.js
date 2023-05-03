import React from "react";
import { useState, useEffect } from "react";

import SignUp from "./signup";
import Login from "./login";

import { useCookies } from "react-cookie";
import { useLocation, useParams } from "react-router-dom";

import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const User = () => {
  const params = useParams();

  const location = useLocation();
  const { check } = !location.state ? "login" : location.state;
  const [rimages, setRimages] = useState([{}]);
  const [userUpdata, setUserupdata] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isverified, setVerified] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["uToken"]);
  const [tokenres, setTokenres] = useState("");
  useEffect(() => {
    setIsloading(true);

    if (cookies.uToken !== undefined) {
      Axios.post(
        "https://blogproapi.000webhostapp.com/apiPhp/myFiles/verify.php?token=" + cookies.uToken
      )
        .then((response) => {
          setIsloading(false);
          // response.data=="ok"?setVerified(true):setVerified(false);
          if (response.data.token !== undefined) {
            setCookie("uToken", response.data.token, { path: "/" });
            console.log(response.data);
            localStorage.setItem("fUserName", response.data.userName);
            localStorage.setItem("fuserMail", response.data.userEmail);
            setVerified(true);
            toast.success("Success");
          } else if (
            response.data == "Expired token" ||
            response.data == "Signature verification failed" ||
            response.data == "error"
          ) {
            setVerified(false);
            removeCookie("uToken");
            toast.error(response.data);
          }
        })
        .catch((error) => {
          setIsloading(false);
          toast.error("Something went Wrong");
        });
    } else {
      setVerified(false);
      setIsloading(false);
    }
  }, [cookies.uToken]);

  const [elog, setElog] = useState(false);
  console.log(params.red);
  if (isverified) {
    if (params.red !== "main") {
      window.location.href = `/${params.red}`;
    } else {
      window.location.href = `/cart`;
    }
  }

  useEffect(() => {
    Axios.get(
      "https://api.unsplash.com/search/photos?client_id=wWKy3OxVoWxdHRa0Xp5SmkUGUEzchajwkSoccgajwXA&query=Indian Fashion&orientation=landscape"
    )
      .then((response) => {
        setRimages(response.data.results);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const imageRnadom = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${
      rimages.length !== 1 ? rimages[Math.floor(Math.random() * 10)].urls.regular : "logo192.png"
    })`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={imageRnadom}>
      {isLoading && (
        <div className="loader">
          <div className="border border-1 border-dark p-4 rounded shadow-lg">
            <img src="/assets/imgs/loader.gif" className="img-fluid" />
            <h5 className="text-dark fw-bold text-center">PROCESSING</h5>
          </div>
        </div>
      )}

      {((!isverified && !location.state) || (!isverified && check == "Login")) && <Login />}
      {!isverified && check == "SignUp" && <SignUp />}
    </div>
  );
};
export default User;
