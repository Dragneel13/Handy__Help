import React, { useState } from "react";
import styles from "../styles/Signup.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
        });
      }
      console.log("User Registered Successfully");
      toast.success("User Registered Successfully", {
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
      <form onSubmit={handleRegister} className={styles["signup-form"]}>
        <h3>Sign Up</h3>

        <div className={styles["form-group"]}>
          <label>First name</label>
          <input
            type="text"
            className={styles["form-control"]}
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className={styles["form-group"]}>
          <label>Last name</label>
          <input
            type="text"
            className={styles["form-control"]}
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className={styles["form-group"]}>
          <label>Email address</label>
          <input
            type="email"
            className={styles["form-control"]}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles["form-group"]}>
          <label>Password</label>
          <input
            type="password"
            className={styles["form-control"]}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles["button-container"]}>
          <button type="submit" className={styles["btn-primary"]}>
            Sign Up
          </button>
        </div>

        <p className={styles["forgot-password"]}>
          Already registered <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
