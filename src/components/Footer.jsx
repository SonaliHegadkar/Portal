import React from "react";
import "./Footer.css";

const Footer = ({ onCityClick }) => {
  const cities = [
    "Mumbai",
    "Delhi",
    "Ajmer",
    "Pune",
    "Hyderabad",
    "Agra",
    "Chennai",
    "Kolkata",
    "Indore",
    "Gurugram",
    "Jaipur",
    "Ahmedabad",
  ];

  const handleCityClick = (city) => {
    if (onCityClick) {
      onCityClick(city);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Jobs in India</h3>
          <ul className="city-list">
            {cities.map((city) => (
              <li key={city} onClick={() => handleCityClick(city)}>
                #{city}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>International Jobs</h3>
          <ul className="city-list">
            {["Africa", "USA", "UK", "Australia", "Canada", "Singapore", "Dubai", "Saudi Arabia", "New Zealand"].map(
              (country) => (
                <li key={country}>#{country}</li>
              )
            )}
          </ul>
        </div>
        <div className="footer-stats">
          <p>Jobs Posted: 32,930</p>
          <p>Jobs Filled: 15,153</p>
          <p>Employers: 20,813</p>
          <p>Active Users: 1,308,174</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Jobtech Ventures Private Limited. All Rights Reserved.</p>
        <div className="social-links">
          <a href="#" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
