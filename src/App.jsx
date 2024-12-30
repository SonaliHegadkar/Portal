import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
//import JobCard from "./components/JobCard";
import Footer from "./components/Footer";
//import FilterSection from "./components/FilterSection";
//import AdditionalSection from "./components/AdditionalSection";
import Card from "./components/Card";
const App = () => {

  return (
    <div>
      <Header />
      <SearchBar />
      
      <div className="filter-section-container">
        {/* <FilterSection /> */}
      </div>
      {/* <div className="p-6">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div> */}
      <Card/>
      <Footer />
    </div>
  );
};

export default App;
