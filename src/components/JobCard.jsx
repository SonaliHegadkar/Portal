import React from "react";
import "./JobCard.css";

function JobCard({ title, company, experience, salary, location, keySkills, mode, posted }) {
  return (
    <div className="job-card">
      <div className="job-header">
        <h3>{title}</h3>
        <span className={`job-mode ${mode.toLowerCase().replace(" ", "-")}`}>{mode}</span>
      </div>
      <p className="job-company">{company}</p>
      <div className="job-details">
        <span>{experience}</span>
        <span>{salary}</span>
        <span>{location}</span>
      </div>
      <p className="job-skills">{keySkills}</p>
      <div className="job-footer">
        <span>Posted {posted}</span>
        <button>Apply</button>
      </div>
    </div>
  );
}

export default JobCard;
