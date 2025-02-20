import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import PostJob from "./pages/PostJob";
import JobListings from "./pages/JobListings";
import Profile from "./pages/Profile";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./pages/firebase";
import AfterLogin from "./pages/AfterLogin";
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/PostJob" /> : <Home />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/joblistings" element={<JobListings />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/afterlogin" element={<AfterLogin />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
