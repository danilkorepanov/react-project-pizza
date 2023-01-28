import CartEmpty from "./components/main/CartEmpty/CartEmpty";
import Content from "./components/main/Home/Content/Content";
import Header from "./components/main/Header/Header";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Cart from "./components/main/Cart/Cart";
import NotFound from "./components/main/NotFound/NotFound";
import React from "react";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
