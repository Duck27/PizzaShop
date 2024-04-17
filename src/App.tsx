import React from "react";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import "./scss/app.scss";
import EmptyCartPage from "./pages/EmptyCartPage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import FullPizza from "./pages/FullPizza";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/notFound" element={<EmptyCartPage />}></Route>
          <Route path="/pizza/:id" element={<FullPizza />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
