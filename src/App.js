import React, { useEffect } from "react";
// import "./App.css";
import Header from "./header";
import Home from "./home";
import Login from "./login";
import ProductDescription from "./productDescription";
import Checkout from "./checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./stateProvider";

function App() {
    return (
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/product/:id" element={<ProductDescription />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
}

export default App;
