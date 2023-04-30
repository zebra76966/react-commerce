import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import ProdView from "./components/itemView";
import "./components/master.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id/:cat" element={<ProdView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
