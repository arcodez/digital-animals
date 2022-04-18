import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/login";
import Register from "./pages/register";
import Results from "./pages/results";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/results" element={<Results />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
