import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username) {
      localStorage.setItem("username", username);
      navigate("/welcome");
    } else {
      alert("Please enter a username!");
    }
  };

  return (
    <div className="login-container">
      <form>
        <h1>Login</h1>

        <div className="input-box">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label>Password:</label>
          <input type="password" placeholder="Enter password" required />
        </div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
