import React from "react";
import { useNavigate } from "react-router";
import './home.css';

const Home = () => {
    const navigate=useNavigate();

    return (
    <section id="home" className="home">
        <div className="home-content"><h1>Hi, I'm<span>Letlhogonolo Sagae</span></h1>
        <p>
        I 'm a <strong>Junior Web Developer</strong> who loves creating minimalist and elegant websites which basically means I tend to prioritize functionality over design.
        </p>
        <div className="home-actions">
            <button className="btn-primary" onClick={()=> navigate('/projects')}>View My Projects</button>
            <button className="btn-secondary" onClick={()=> navigate('/contact')}>Contact Me</button>
        </div>
        </div>
    </section>
)
};

export default Home;