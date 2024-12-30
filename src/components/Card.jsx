// Card.jsx
import React, { useState } from "react";
import JobCard from "./JobCard";
import "./Card.css";
import Footer from "./Footer";

function Card() {
  const [isWorkModeOpen, setWorkModeOpen] = useState(false);
  const [isJobTypeOpen, setJobTypeOpen] = useState(false);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");

  const toggleWorkMode = () => setWorkModeOpen(!isWorkModeOpen);
  const toggleJobType = () => setJobTypeOpen(!isJobTypeOpen);
  const toggleFilter = () => setFilterOpen(!isFilterOpen);

  const [selectedCity, setSelectedCity] = useState("");

  const handleCityFilter = (city) => {
    setSelectedCity(city);
  };


  const jobCards = [
    {
      title: "ONBOARDING OFFICER",
      company: "Matrix Recruitments",
      experience: "2-3 Years",
      salary: "₹ 2.5 Lac - 3.5 Lac P.A",
      location: "Pune | Mumbai (All Areas)",
      keySkills: "Communication, Skilled Multi-tasker, BPO, Customer Service",
      mode: "In Office",
      tags: ["#Fresher", "#Back Office"],
      posted: "13 hour(s) ago",
    },
    {
      title: "CASH COLLECTION",
      company: "Matrix Recruitments",
      experience: "1-3 Years",
      salary: "₹ 3.5 Lac - 4.5 Lac P.A",
      location: "Remote",
      keySkills: "Payment Collection, Customer Handling",
      mode: "Remote",
      tags: ["#Work From Home", "#Fresher"],
      posted: "14 hour(s) ago",
    },
    {
      title: "SOFTWARE DEVELOPER",
      company: "Tech Solutions",
      experience: "2-4 Years",
      salary: "₹ 6 Lac - 8 Lac P.A",
      location: "Hyderabad",
      keySkills: "Java, React, Spring Boot, Full Stack Development",
      mode: "Hybrid",
      tags: ["#IT", "#Developer"],
      posted: "1 day ago",
    },
    {
      title: "FRONTEND DEVELOPER",
      company: "Creative Minds",
      experience: "1-3 Years",
      salary: "₹ 4 Lac - 6 Lac P.A",
      location: "Chennai",
      keySkills: "React, JavaScript, CSS, HTML",
      mode: "In Office",
      tags: ["#IT", "#Fresher"],
      posted: "2 days ago",
    },
    {
      title: "BACKEND DEVELOPER",
      company: "Tech Solutions",
      experience: "3-5 Years",
      salary: "₹ 7 Lac - 10 Lac P.A",
      location: "Bangalore",
      keySkills: "Node.js, MongoDB, Express, APIs",
      mode: "Hybrid",
      tags: ["#Developer"],
      posted: "3 days ago",
    },
  ];

  // Filter job cards based on the selected tag
  const filteredJobCards = selectedTag
    ? jobCards.filter((job) => job.tags.includes(selectedTag))
    : jobCards;

  return (
    <div className="app-container">
      <div className="responsive-filters">
        {/* Toggle Button for Mobile View */}
        <button className="filter-toggle" onClick={toggleFilter}>
          Filters {isFilterOpen ? "-" : "+"}
        </button>

        {/* Filter Section */}
        <aside className={`filters ${isFilterOpen ? "open" : "closed"}`}>
          <h2>Filters</h2>

          {/* Keywords Section */}
          <div className="filter-section">
            <label htmlFor="keywords">Keywords</label>
            <input
              type="text"
              id="keywords"
              placeholder="Type keyword and press enter"
            />
          </div>

          {/* Experience Section */}
          <div className="filter-section">
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              id="experience"
              placeholder="Enter years of experience"
            />
          </div>

          {/* Work Mode Section */}
          <div className="filter-section">
            <label>Work Mode</label>
            <button onClick={toggleWorkMode}>+</button>
            {isWorkModeOpen && (
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" value="hybrid" />
                  Hybrid
                </label>
                <label>
                  <input type="checkbox" value="work-from-home" />
                  Work From Home
                </label>
                <label>
                  <input type="checkbox" value="work-from-office" />
                  Work From Office
                </label>
                <label>
                  <input type="checkbox" value="remote" />
                  Remote
                </label>
                <label>
                  <input type="checkbox" value="on-field" />
                  On Field
                </label>
              </div>
            )}
          </div>

          {/* Job Type Section */}
          <div className="filter-section">
            <label>Job Type</label>
            <button onClick={toggleJobType}>+</button>
            {isJobTypeOpen && (
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" value="all-jobs" />
                  All Jobs
                </label>
                <label>
                  <input type="checkbox" value="classic-jobs" />
                  Classic Jobs
                </label>
                <label>
                  <input type="checkbox" value="featured-jobs" />
                  Featured Jobs
                </label>
                <label>
                  <input type="checkbox" value="premium-jobs" />
                  Premium Jobs
                </label>
              </div>
            )}
          </div>
        </aside>
      </div>

      <main className="job-listing">
        <header className="job-listing-header">
          {/* <span>Showing 1 to {jobCards.length} of {jobCards.length}</span> */}
          <div>
            <label>Show</label>
            <select>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span>per page</span>
          </div>
        </header>
        <div className="job-cards-container">
          {filteredJobCards.length > 0 ? (
            filteredJobCards.map((job, index) => (
              <JobCard key={index} {...job} />
            ))
          ) : (
            <p>No jobs found for {selectedTag}</p>
          )}
         
        </div>
        
      </main>
     
      <aside className="quick-search">
        <h2>Quick Job Search</h2>
        <div className="tags">
          {[
            "#Fresher",
            "#Work From Home",
            "#IT",
            "#HR",
            "#Back Office",
            "#Developer",
            "#Remote",
          ].map((tag) => (
            <span
              key={tag}
              className={`tag ${selectedTag === tag ? "active" : ""}`}
              onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)} // Toggle tag selection
            >
              {tag}
            </span>
          ))}
        </div>
      </aside>
    </div>


     
     
  );
}

export default Card;
