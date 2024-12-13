import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
