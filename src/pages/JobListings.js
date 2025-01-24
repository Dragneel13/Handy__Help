import React from "react";
import jobs from "../data/JobData";

const JobListings = () => {
  return (
    <div>
      <h1>Available Jobs</h1>
      {jobs.map((job) => (
        <div
          key={job.id}
          style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
        >
          <h2>{job.title}</h2>
          <p>{job.location}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
