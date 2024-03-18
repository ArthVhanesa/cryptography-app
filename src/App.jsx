import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Bcrypt from "@/pages/Bcrypt";
import Home from "@/pages/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <Toaster />
      <Navbar />
      <div className="max-w-4xl m-auto">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bcrypt" element={<Bcrypt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
