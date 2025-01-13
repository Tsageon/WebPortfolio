import React from 'react';
import './about.css';
import Me from '../Components/Me.jpg';


const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
         <img src={Me} alt='yeah'/>
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hi! I am <strong>Tsageon</strong>, an adept Web Developer with a love for creating engaging UI. 
            I adept in JavaScript, React, and modern Web Development Tech Stacks.
          </p>
          <p>
            I enjoy tackling challenges, learning new programming Languages, continuously improving my craft and myself. 
            When I am not coding, you can find me trying new things such as reading a new book, gaming, gardening, having a proper hairline or enjoying the outdoors.
          </p>
          <h2>Personal Details</h2>
          <ul>
            <li><strong>Name:</strong> Tshepo Sagae</li>
            <li><strong>Email:</strong> sagaetshepo@gmail.com</li>
            <li><strong>PhoneNumber:</strong>0786346306</li>
            <li><strong>Location:</strong> Kimberley, South Africa</li>
            <li><strong>Program Enrolled:</strong> Codetribe</li>
            <li><strong>My Resume:</strong><i><a href='https://drive.google.com/file/d/13zjOrnPvAuHnCoehOAbHLM14kbUNND41/view?usp=sharing'>Click here</a></i> </li>
            <li><strong>Interests:</strong> Coding, Gaming, Hiking and more</li>
            <li><strong>Goals:</strong> Secure a job in web development. Build 2-3 more portfolio projects. </li>
            <li><strong>Long-Term Goals:</strong> Contribute to open-source projects. Become a true full-stack developer.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;