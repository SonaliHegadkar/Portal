import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">jobRinger</h1>
      <nav className="header-nav">
        <ul>
          <li>Jobs</li>
          <li>Active Employers</li>
          <li>Job Blogs</li>
          <li>Pricing</li>
        </ul>
      </nav>
      <div className="header-buttons">
        <button className="jobseeker-login">Jobseeker Login</button>
        <button className="employer-login">Employer Login</button>
      </div>
    </header>
  );
};

export default Header;
