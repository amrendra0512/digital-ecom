import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import ProductListPage from "./pages/ProductListPage";
import Header from "./headers/Header";
import ProductCart from "./pages/ProductCart";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/cart" element={<ProductCart />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/logout" element={<Logout />} />
           <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
