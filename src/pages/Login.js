import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Added Link import
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
    <section>
      <div className="container">
        <div className="login-container">
          <form className="login-form">
            <h1>Login</h1>

            <div className="input-container">
              <label>Username:</label>
              <input
                className="bag"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label>Password:</label>
              <input
                className="bag"
                type="password"
                placeholder="Enter password"
                required
              />
            </div>
            <span>
              <p>
                Don't have an account? <Link to="/signup">sign-up</Link>
              </p>
            </span>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
        <div className="image-container"></div>
      </div>
    </section>
  );
};

export default Login;
