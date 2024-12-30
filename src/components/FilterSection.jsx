// FilterSection.js
import React, { useState } from "react";
import "./FilterSection.css";

const FilterSection = () => {
  const [experience, setExperience] = useState("");
  const [workMode, setWorkMode] = useState([]);
  const [jobType, setJobType] = useState([]);

  const handleCheckboxChange = (event, setter, state) => {
    const value = event.target.value;
    setter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="filter-section">
      <h3>Filter</h3>
      <form>
        <label htmlFor="experience">Experience (Years)</label>
        <input
          type="number"
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          max="50"
          min="0"
          className="filter-input"
          placeholder="Enter experience"
        />
        <br />
        <label>Work Mode</label>
        <div className="filter-checkbox">
          {["hybrid", "workFromHome", "workFromOffice", "remote"].map((mode) => (
            <label key={mode}>
              <input
                type="checkbox"
                value={mode}
                onChange={(e) => handleCheckboxChange(e, setWorkMode, workMode)}
              />
              {mode.charAt(0).toUpperCase() + mode.slice(1).replace(/([A-Z])/g, " $1")}
            </label>
          ))}
        </div>
        <br />
        <label>Job Types</label>
        <div className="filter-checkbox">
          {["classicJob", "allJobs", "premiumJob", "featuredJob"].map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                value={type}
                onChange={(e) => handleCheckboxChange(e, setJobType, jobType)}
              />
              {type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, " $1")}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default FilterSection;
