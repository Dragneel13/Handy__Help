import React from "react";
import "../styles/JobListings.css";
import { useNavigate } from "react-router-dom";

function JobListings() {
  const username = localStorage.getItem("username"); // Retrieve the username

  return (
    <div className="job-container">
      <div className="profile-container">
        <h1>Hello, {username}!</h1> {/* Display the username */}
        <h3>Work for:</h3>
        <div className="jobs-container">
          <button className="job-button">Painter</button>
          <button className="job-button">Plumber</button>
          <button className="job-button">Sweeper</button>
          <button className="job-button">Driver</button>
          <button className="job-button">Gardener</button>
          <button className="job-button">Babysitter</button>
          <button className="job-button">Tutor</button>
          <button className="job-button">Tiffin Service</button>
          <button className="job-button">Porter</button>
          <button className="job-button">Electrician</button>
          <button className="job-button">Carpenter</button>
          <button className="job-button">Mechanic</button>
          <button className="job-button">Housekeeper</button>
          <button className="job-button">Security Guard</button>
          <button className="job-button">Delivery Agent</button>
          <button className="job-button">Tailor</button>
          <button className="job-button">Cook</button>
          <button className="job-button">Waiter</button>
          <button className="job-button">Maid</button>
          <button className="job-button">Laundry Service</button>
          <button className="job-button">Welder</button>
          <button className="job-button">AC Repair</button>
          <button className="job-button">Cobbler</button>
          <button className="job-button">Pest Control</button>
          <button className="job-button">Barber</button>
          <button className="job-button">Makeup Artist</button>
          <button className="job-button">Photographer</button>
          <button className="job-button">Home Nurse</button>
          <button className="job-button">Yoga Instructor</button>
          <button className="job-button">Pet Sitter</button>
          {/* <button className="job-button">Milk Delivery</button>
          <button className="job-button">Newspaper Delivery</button>
          <button className="job-button">Event Decorator</button>
          <button className="job-button">Mobile Repair</button>
          <button className="job-button">Computer Repair</button>
          <button className="job-button">Packers & Movers</button>
          <button className="job-button">Car Washer</button>
          <button className="job-button">Bike Mechanic</button>
          <button className="job-button">Furniture Assembler</button>
          <button className="job-button">House Painter</button>
          <button className="job-button">Ironing Service</button>
          <button className="job-button">Handyman</button>
          <button className="job-button">Personal Trainer</button>
          <button className="job-button">Street Vendor</button>
          <button className="job-button">Water Tank Cleaner</button>
          <button className="job-button">Mason</button>
          <button className="job-button">Construction Worker</button>
          <button className="job-button">Watchman</button>
          <button className="job-button">Shoe Cleaner</button> */}
        </div>
      </div>
      <a className="seemore-link">see more..</a>
    </div>
  );
}

export default JobListings;
