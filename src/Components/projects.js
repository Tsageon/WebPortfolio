import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    const GITHUB_USERNAME = 'Tsageon'; 
    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN; 

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        return response.json();
      })
      .then(data => setRepos(data))
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message || 'Something went wrong!',
        });
      });
  }, []);

    return(
        <section id="projects" className="projects">
            <h1>My projects</h1>
            <p>Here are my works hosted on Github</p>
            <div className="project-grid">
             {repos.map(repo => (
             <div key={repo.id} className="project-card">
                <h2>{repo.name}</h2>
                <p>{repo.description || 'I have not given a description for this project yet.'}</p>
              <div className="project-actions">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                 View on <b>Github</b>   
                </a>
                {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      Live Demo  
                    </a>
                )}
                </div>  
             </div>
             ))}
            </div>
        </section>
    );
};

export default Projects