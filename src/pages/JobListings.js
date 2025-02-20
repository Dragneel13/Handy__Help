import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/JobListings.css";
import JustDropDown from "./JustDropdown"; // Import the JustDropDown component

function JobListings() {
  const navigate = useNavigate(); // Initialize useNavigate
  const username = localStorage.getItem("username");
  const [selectedJob, setSelectedJob] = useState(
    localStorage.getItem("selectedJob") || ""
  );
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    // Check if jobPosts are already in localStorage
    const storedJobs = JSON.parse(localStorage.getItem("jobPosts")) || [];

    // If no jobs exist, add fake job data
    if (storedJobs.length === 0) {
      const fakeJobs = [
        {
          work: "Painter",
          duration: "2 days",
          time: "9 AM - 5 PM",
          location: "Downtown, NY",
          payment: "100Rs/day",
        },
        {
          work: "Painter",
          duration: "5 hours",
          time: "10 AM - 3 PM",
          location: "Brooklyn, NY",
          payment: "50Rs/day",
        },
        {
          work: "Plumber",
          duration: "3 hours",
          time: "12 PM - 3 PM",
          location: "Manhattan, NY",
          payment: "70Rs/day",
        },
      ];

      localStorage.setItem("jobPosts", JSON.stringify(fakeJobs));
      setJobPosts(fakeJobs);
    } else {
      setJobPosts(storedJobs);
    }
  }, []);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    localStorage.setItem("selectedJob", job);

    // Navigate to the Plumber page if "Plumber" is selected
    if (job === "Plumber") {
      navigate("", { state: { jobPosts } }); // Pass job posts as state
    }
  };

  return (
    <div className="job-container">
      <div className="profile-container">
        <h1>Hello, {username}!</h1>
        <h3>Work for:</h3>
        <JustDropDown setSelectedJob={setSelectedJob} />{" "}
        {/* Render the dropdown */}
        <div className="jobs-container">
          {[
            "Painter",
            "Plumber",
            "Sweeper",
            "Driver",
            "Gardener",
            "Babysitter",
            "Tutor",
            "Tiffin Service",
            "Porter",
            "Electrician",
            "Carpenter",
            "Mechanic",
            "Housekeeper",
            "Security Guard",
            "Delivery Agent",
            "Tailor",
            "Cook",
            "Waiter",
            "Maid",
            "Laundry Service",
            "Welder",
            "AC Repair",
            "Cobbler",
            "Pest Control",
            "Barber",
            "Makeup Artist",
            "Photographer",
            "Home Nurse",
            "Yoga Instructor",
            "Pet Sitter",
          ].map((job) => (
            <button
              key={job}
              className="job-button"
              onClick={() => handleJobSelect(job)}
            >
              {job}
            </button>
          ))}
        </div>
      </div>

      {/* Display job posts matching the selected job */}
      <div className="job-posts">
        <h2>Available Jobs for: {selectedJob}</h2>
        {jobPosts.filter((job) => job.work === selectedJob).length === 0 ? (
          <p>No jobs available for {selectedJob}.</p>
        ) : (
          jobPosts
            .filter((job) => job.work === selectedJob)
            .map((job, index) => (
              <div key={index} className="job-card">
                <h3>{job.work}</h3>
                <p>
                  <strong>Duration:</strong> {job.duration}
                </p>
                <p>
                  <strong>Time:</strong> {job.time}
                </p>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Payment:</strong> {job.payment}
                </p>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default JobListings;
