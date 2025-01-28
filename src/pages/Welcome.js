import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";
const Welcome = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === "worker") navigate("/joblistings");
    if (role === "recruiter") navigate("/postjob");
  };

  return (
    <div className="outer-div">
      <div className="inner-div">
        <h1 className="hello-message">Hello, {username}</h1>
        <p className="asking">Are you a Worker or a Recruiter?</p>
        <button className="btn" onClick={() => handleRoleSelection("worker")}>
          Worker
        </button>
        <button
          className="btn"
          onClick={() => handleRoleSelection("recruiter")}
        >
          Recruiter
        </button>
      </div>
    </div>
  );
};

export default Welcome;
