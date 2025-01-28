import React, { useState } from "react";
import "../styles/PostJob.css"; // Import the CSS file

const PostJob = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [jobPosts, setJobPosts] = useState([]);
  const [formData, setFormData] = useState({
    work: "",
    duration: "",
    time: "",
    location: "",
    payment: "",
  });

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobPosts([...jobPosts, formData]);
    setFormData({
      work: "",
      duration: "",
      time: "",
      location: "",
      payment: "",
    });
    setIsFormOpen(false);
  };

  return (
    <div className="container">
      {/* Create a Post Button */}
      <button onClick={toggleForm} className="create-post-btn">
        Create a Post
      </button>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="overlay">
          <div className="modal">
            <h2>Create Job Post</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="work"
                placeholder="What is the work?"
                value={formData.work}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="duration"
                placeholder="Duration (e.g., 3 hours, 2 days)"
                value={formData.duration}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="time"
                placeholder="Time (e.g., 10 AM - 2 PM)"
                value={formData.time}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="payment"
                placeholder="Payment (e.g., $50, Negotiable)"
                value={formData.payment}
                onChange={handleChange}
                required
              />

              <div className="button-group">
                <button type="submit" className="post-btn">
                  Post
                </button>
                <button
                  type="button"
                  onClick={toggleForm}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Job Posts Display */}
      <div className="job-posts">
        <h2>Job Posts</h2>
        {jobPosts.length === 0 ? (
          <p>No jobs posted yet.</p>
        ) : (
          jobPosts.map((job, index) => (
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
};

export default PostJob;
