import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Index from "./pages";
import AnimalTable from "./pages/animalTable";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Results from "./pages/results";
import Stats from "./pages/stats";

const Logout = () => {
  return (
    <div>
      <h1>Thank You For Use This page</h1>
      <Link to="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/results" element={<Results />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/animal-table" element={<AnimalTable />} />
      </Routes>
    </>
  );
};

export default App;
