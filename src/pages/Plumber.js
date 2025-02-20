// import React from "react";
// import { useLocation } from "react-router-dom";
// import "../styles/Plumber.css";
// const Plumber = () => {
//   const location = useLocation();
//   const jobPosts = location.state?.jobPosts || []; // Get job posts from location state

//   return (
//     <div className="plumber-container">
//       <h1>Available Jobs for Plumber</h1>
//       {jobPosts.length === 0 ? (
//         <p>No jobs available for Plumber.</p>
//       ) : (
//         jobPosts.map((job, index) => (
//           <div key={index} className="job-card">
//             <h3>{job.work}</h3>
//             <p>
//               <strong>Duration:</strong> {job.duration}
//             </p>
//             <p>
//               <strong>Time:</strong> {job.time}
//             </p>
//             <p>
//               <strong>Location:</strong> {job.location}
//             </p>
//             <p>
//               <strong>Payment:</strong> {job.payment}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Plumber;
