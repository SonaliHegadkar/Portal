import React, { useState } from "react";
import "./AdditionalSection.css";

const AdditionalSection = () => {
  const [listingsPerPage, setListingsPerPage] = useState(20);

  const handleListingsChange = (event) => {
    setListingsPerPage(event.target.value);
  };

  return (
    <div className="additional-section">
      <h2>Job Listings Overview</h2>
      <div className="listings-dropdown">
        <label htmlFor="listings-per-page">Showing</label>
        <select
          id="listings-per-page"
          value={listingsPerPage}
          onChange={handleListingsChange}
        >
          <option value="10">1 to 10</option>
          <option value="20">1 to 20</option>
          <option value="50">1 to 50</option>
          <option value="100">1 to 100</option>
        </select>
        <span>of 10508</span>
      </div>
      <p>Adjust filters to narrow your job search.</p>
    </div>
  );
};

export default AdditionalSection;
