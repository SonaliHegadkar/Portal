import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <form className="search-bar-form">
        <input
          type="text"
          placeholder="Type keyword..."
          className="search-bar-input"
        />
        
        {/* Location dropdown */}
        <select className="search-bar-select">
          <option>Select Location</option>
          <option>New York</option>
          <option>San Francisco</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
          <option>London</option>
          <option>Delhi</option>
          <option>Bangalore</option>
          <option>Tokyo</option>
        </select>
        
        {/* Experience dropdown */}
        <select className="search-bar-select">
          <option>Select Experience (Years)</option>
          {[...Array(51).keys()].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        
        {/* Expected Salary dropdown */}
        <select className="search-bar-select">
          <option>Select Expected Salary</option>
          <option>0 - 3 Lakhs</option>
          <option>3 - 6 Lakhs</option>
          <option>6 - 10 Lakhs</option>
          <option>10 - 15 Lakhs</option>
          <option>15 - 25 Lakhs</option>
          <option>25 - 50 Lakhs</option>
          <option>50 Lakhs - 1 Crore</option>
          <option>1+ Crore</option>
        </select>
        
        <button type="submit" className="search-bar-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
