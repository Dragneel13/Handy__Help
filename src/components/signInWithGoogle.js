import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, db } from "../pages/firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
function SignInWithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User Logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "./afterlogin";
      }
    });
  }
  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={require("../assets/google.jpg")} width={"50%"} />
      </div>
    </div>
  );
}

export default SignInWithGoogle;
