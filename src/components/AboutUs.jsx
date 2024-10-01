import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="underline"></div>
      <p className="description">
      Discover the perfect hairstyle and book your appointment with ease. Our app connects you to top-rated hair salons in your area,
       offering a wide range of services from haircuts and coloring to styling and treatments.
        With our advanced hairstyle visualization technology, you can try on different looks before committing to a style. 
        Our user-friendly platform makes it simple to find available appointments, read salon reviews, and book your next transformation. 
      Experience the future of hair salon booking with our app.
      </p>
      <div className="info-boxes">
        <div className="info-box our-business">
          <h2>Our Business</h2>
        </div>
        <div className="info-box location-facts">
          <h2>Location Facts</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;