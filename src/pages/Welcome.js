import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === "worker") navigate("/jobs");
    if (role === "recruiter") navigate("/post-job");
  };

  return (
    <div>
      <h1>Hello, {username}</h1>
      <p>Are you a Worker or a Recruiter?</p>
      <button onClick={() => handleRoleSelection("worker")}>Worker</button>
      <button onClick={() => handleRoleSelection("recruiter")}>
        Recruiter
      </button>
    </div>
  );
};

export default Welcome;
