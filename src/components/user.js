import React from "react";
import { useState, useEffect } from "react";

import SignUp from "./signup";
import Login from "./login";

import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const User = () => {
  const location = useLocation();
  const { check } = !location.state ? "login" : location.state;

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

  if (isverified) {
    window.location.href = "/cart";
  }
  return (
    <>
      {isLoading && (
        <div className="loader">
          <div className="border border-1 border-dark p-4 rounded shadow-lg">
            <img src="assets/imgs/loader.gif" className="img-fluid" />
            <h5 className="text-dark fw-bold text-center">PROCESSING</h5>
          </div>
        </div>
      )}

      {((!isverified && !location.state) || (!isverified && check == "Login")) && <Login />}
      {!isverified && check == "SignUp" && <SignUp />}
    </>
  );
};
export default User;
