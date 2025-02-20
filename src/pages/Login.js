import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInWithGoogle from "../components/signInWithGoogle";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      window.location.href = "/PostJob";
      toast.success("User Logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  return (
    <div className="parent">
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <h3>Login</h3>

        <div className={styles["form-group"]}>
          <label>Email address</label>
          <input
            type="email"
            className={styles["form-control"]}
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles["form-group"]}>
          <label>Password</label>
          <input
            type="password"
            className={styles["form-control"]}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles["button-container"]}>
          <button type="submit" className={styles["btn-primary"]}>
            Submit
          </button>
        </div>

        <p className={styles["forgot-password"]}>
          New user <a href="/signup">Register Here</a>
        </p>
        <SignInWithGoogle />
      </form>
    </div>
  );
};

export default Login;
