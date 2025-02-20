import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import styles from "../styles/PostJob.module.css";

function PostJob() {
  const [userDetails, setUserDetails] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [jobData, setJobData] = useState({
    job: "",
    location: "",
    duration: "",
    expectedPay: "",
  });
  const [jobs, setJobs] = useState([]);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          }
        }
      });
    };
    fetchUserData();
  }, []);

  // Fetch jobs from Firestore in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Jobs"), (snapshot) => {
      const jobsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobs(jobsList);
    });
    return () => unsubscribe();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  // Handle posting a job
  const handlePostJob = async () => {
    if (
      !jobData.job ||
      !jobData.location ||
      !jobData.duration ||
      !jobData.expectedPay
    ) {
      alert("Please fill all fields");
      return;
    }
    try {
      // Add job to Firestore
      const docRef = await addDoc(collection(db, "Jobs"), {
        ...jobData,
        postedBy: userDetails?.firstName || "Anonymous", // Add the user who posted the job
        timestamp: new Date(), // Add a timestamp
      });
      console.log("Job posted with ID: ", docRef.id);

      // Clear the form and close the popup
      setShowPopup(false);
      setJobData({ job: "", location: "", duration: "", expectedPay: "" });
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job. Please check the console for details.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          {userDetails ? (
            <>
              <div className={styles.userInfoContainer}>
                <img
                  className={styles.userImg}
                  src={userDetails.photo}
                  alt="User Profile"
                />
                <div className={styles.userText}>
                  <p className={styles.userName}>{userDetails.firstName}</p>
                  <p className={styles.userEmail}>{userDetails.email}</p>
                </div>
              </div>
              <div className={styles.menu}>
                <button className={styles.menuBtn}>All Jobs</button>
                <button className={styles.menuBtn}>Approved</button>
                <button className={styles.menuBtn}>Rejected</button>
                <button className={styles.menuBtn}>New</button>
              </div>
              <button className={styles.logoutBtn} onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Main Content Area */}
        <div className={styles.contentArea}>
          <div className={styles.postJobContainer}>
            <button
              className={styles.postJobBtn}
              onClick={() => setShowPopup(true)}
            >
              Post Job
            </button>
          </div>

          {/* Job Listings */}
          <div className={styles.jobsList}>
            {jobs.map((job) => (
              <div className={styles.jobCard}>
                <p>
                  <strong>Job:</strong> {job.job}
                </p>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Duration:</strong> {job.duration}
                </p>
                <p>
                  <strong>Expected Pay:</strong> {job.expectedPay}
                </p>
                <p className={styles.postedBy}>
                  <strong>Posted By:</strong> {job.postedBy}
                </p>
                <p className={styles.postedOn}>
                  <strong>Posted On:</strong>{" "}
                  {job.timestamp?.toDate().toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <h2>Post a Job</h2>
            <input
              type="text"
              placeholder="Job"
              value={jobData.job}
              onChange={(e) => setJobData({ ...jobData, job: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              value={jobData.location}
              onChange={(e) =>
                setJobData({ ...jobData, location: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Duration"
              value={jobData.duration}
              onChange={(e) =>
                setJobData({ ...jobData, duration: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Expected Pay"
              value={jobData.expectedPay}
              onChange={(e) =>
                setJobData({ ...jobData, expectedPay: e.target.value })
              }
            />
            <div className={styles.popupButtons}>
              <button className={styles.postBtn} onClick={handlePostJob}>
                Post
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostJob;
