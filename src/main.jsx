// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCarPage from "./pages/AddCarPage";
import "./index.css";
import HomePage from "./pages/HomePage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AddCarPage" element={<AddCarPage />} />
        </Routes>
    </BrowserRouter>
);
