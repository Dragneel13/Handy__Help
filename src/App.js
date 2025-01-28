import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup"; // Updated to match the correct casing
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import PostJob from "./pages/PostJob";
import JobListings from "./pages/JobListings";
import Profile from "./pages/Profile";
import AboutUs from "./pages/About";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/joblistings" element={<JobListings />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
