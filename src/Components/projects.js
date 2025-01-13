import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('');
  const [loading,setLoading] = useState(true);

  const filterRepos = (repos, searchTerm, language) => {
    let filteredRepos = repos;

    if (searchTerm) {
      filteredRepos = filteredRepos.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (language) {
      filteredRepos = filteredRepos.filter(
        (repo) => repo.language && repo.language.toLowerCase() === language.toLowerCase()
      );
    }

    return filteredRepos;
  };

  const fetchReposWithCache = async () => {
    const cachedRepos = localStorage.getItem('repos');
    const cachedTime = localStorage.getItem('reposTime');
  
    if (cachedRepos && cachedTime && Date.now() - cachedTime < 3600000) {
      return JSON.parse(cachedRepos);
    }
  
    try {
      const response = await fetch('https://api.github.com/users/Tsageon/repos');
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
  
      const repos = await response.json();
      localStorage.setItem('repos', JSON.stringify(repos));
      localStorage.setItem('reposTime', Date.now().toString());
      return repos;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  useEffect(() => {
    const fetchRepos = async () => {
      Swal.fire({
        title: 'Loading projects...',
        text: 'Please wait while I fetch my projects.',
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        const repos = await fetchReposWithCache();
        setRepos(repos);
        Swal.close();

        Swal.fire({
          icon: 'success',
          title: 'Projects fetched!',
          text: 'My GitHub projects have been loaded successfully.',
        });
      } catch (err) {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message || 'Something went wrong!',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const filteredRepos = filterRepos(repos, searchTerm, language);

  return (
    <section id="projects" className="projects">
      <h1>My projects</h1>
      <p>Here are my works hosted on Github</p>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by repo name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">Choose language/TechStack</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="TypeScript">TypeScript</option>
          <option value="React">React.js</option>
          <option value="ReactNative">ReactNative</option>
          <option value="Node">Node.js</option>
        </select>
      </div>
      <div className="project-grid">
        {loading ? (
          <p>Loading repositories...</p>
        ) : filteredRepos.length === 0 ? (
          <p>No projects found with the specified criteria.</p>
        ) : (
          filteredRepos.map((repo) => (
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
          ))
        )}
      </div>
    </section>
  );
};

export default Projects