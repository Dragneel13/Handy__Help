import React from "react";

function JustDropDown({ setSelectedJob }) {
  return (
    <div>
      <label htmlFor="job-select" className="text-lg font-semibold mb-2">
        Select a Job:
        <select
          onChange={(e) => setSelectedJob(e.target.value)}
          id="job-select"
          name="work"
          className="p-2 border rounded-lg text-lg bg-white shadow-md"
          //   value={formData.work}
          //   onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a job
          </option>
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
          ].map((job, index) => (
            <option key={index} value={job}>
              {job}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default JustDropDown;
