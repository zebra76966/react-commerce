import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import ProdView from "./components/itemView";
import Cart from "./components/cart";
import AllProds from "./components/products";
import ConfirmOrder from "./components/confirm";
import "./components/master.css";
import User from "./components/user";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { useState } from "react";

function App() {
  const [chk, setChk] = useState(false);

  return (
    <>
      <Router>
        <Header check={chk} />
        <Routes>
          <Route path="/" element={<Main check={(e) => setChk(e)} og={chk} />} />
          <Route
            path="/product/:id/:cat/:type"
            element={<ProdView check={(e) => setChk(e)} og={chk} />}
          />
          <Route
            path="/all-products/:id/:cat/:type"
            element={<AllProds check={(e) => setChk(e)} og={chk} />}
          />
          <Route
            path="/confirm-order"
            element={<ConfirmOrder check={(e) => setChk(e)} og={chk} />}
          />

          <Route path="/cart" element={<Cart check={(e) => setChk(e)} og={chk} />} />
          <Route path="/user/:red" element={<User check={(e) => setChk(e)} og={chk} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
