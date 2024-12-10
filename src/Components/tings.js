import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="https://via.placeholder.com/200" alt="Profile" />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hi I am <strong>TSageon</strong>, a adept Web Developer with a love for creating new and engaging UI for a price. 
            I adept in JavaScript, React, and modern Web Development Tech Stacks.
          </p>
          <p>
            I enjoy tackling challenges, learning new programming Languages, continuously improving my craft and myself. 
            When I am not coding, you can find me exploring new hobbies, reading, gaming, gardening, having a proper hairline or enjoying the outdoors.
          </p>
          <h2>Personal Details</h2>
          <ul>
            <li><strong>Name:</strong> Tshepo Sagae</li>
            <li><strong>Email:</strong> sagaetshepo@gmail.com</li>
            <li><strong>Location:</strong> Kimberley, South Africa</li>
            <li><strong>Interests:</strong> Coding, Gaming, Hiking and more</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;