import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { WiDayCloudy } from "react-icons/wi";
import { MdHeight } from "react-icons/md";

const AfterLogin = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const firstName = user?.displayName?.split(" ")[0] || "User"; // Get first name or default to 'User'

  return (
    <div style={parent}>
      <div style={roleSelect}>
        <h2>Hello, {firstName}</h2>
        <p>Select how you want to continue:</p>
        <button onClick={() => navigate("/joblisting")} style={buttonStyle}>
          Continue as Worker
        </button>
        <button onClick={() => navigate("/postjob")} style={buttonStyle}>
          Continue as Recruiter
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "black",
  color: "#fff",
  borderRadius: "5px",
  border: "none",
};
const roleSelect = {
  border: "3px solid #000",
  width: "500px",
  padding: "24px",
  borderRadius: "1rem",
};
const parent = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "89vh",
};
export default AfterLogin;
