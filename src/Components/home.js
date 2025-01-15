import React,{useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router";
import { SiExpress, SiMongodb, SiPaypal } from 'react-icons/si';
import { FaHtml5, FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaGithub, FaCode , FaSun  } from "react-icons/fa";
import About from './tings';
import './home.css';

const Home = () => {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const navigate = useNavigate();
    const skillsSectionRef = useRef(null);

    const openAboutModal = () => setIsAboutOpen(true);
  const closeAboutModal = () => setIsAboutOpen(false);

    const projectData = [
        {
            title: 'Employee App',
            description: 'A web application for managing employee records and tasks. This project allows for adding, updating, and removing employee information while keeping track of their assigned tasks and performance. Built with React for the frontend and local storage to handle data management.',
            techStack: [
                { name: 'Reactjs', icon: <FaReact /> }
            ],
            keyFeatures: [
                'User authentication and role-based access control.',
                'CRUD functionality for employee management.',
                'Position assignment and info-tracking system.'
            ],
            challenges: 'Ensuring smooth interaction between storing data and keeping it secure. Implement Basic Auth features like login and registration',
            repoLink: 'https://github.com/Tsageon/EmployeeApp.git'
        },
        {
            title: 'Weather App',
            description: 'A weather forecasting app that provides real-time weather updates based on user location or a searched city. This project integrates with a weather API to fetch data such as temperature, humidity, wind speed, and weather conditions.',
            techStack: [
                { name: 'React', icon: <FaReact /> },
                { name: 'JavaScript', icon: <FaJsSquare /> },
                { name: 'CSS', icon: <FaCss3Alt /> },
                { name: 'Weather API', icon: < FaSun /> }
            ],
            keyFeatures: [
                'Real-time weather updates based on location or city search.Thank You OpenWeather.org',
                'Displays weather details including temperature, humidity, and wind speed.',
                'Simple and responsive UI for ease of use.'
            ],
            challenges: 'Handling asynchronous data fetching from the weather API using async/await and useEffect hook.',
            repoLink: 'https://github.com/Tsageon/WeatherApp.git'
        },
        {
            title: 'Todo App',
            description: 'A task management app that allows users to create, update, and delete tasks with ease. It provides a simple interface to track daily to-dos, set priorities, and mark tasks as complete. The app is built using React and leverages local storage to persist tasks.',
            techStack: [
                { name: 'React', icon: <FaReact /> },
                { name: 'JavaScript', icon: <FaJsSquare /> },
                { name: 'CSS', icon: <FaCss3Alt /> }
            ],
            keyFeatures: [
                'Add, update, and delete tasks.',
                'Mark tasks as completed or incomplete.',
                'Also personally my best Auth work so far',
                'Persistent task storage using local storage.',
                'Filter tasks based on their completion status.'
            ],
            challenges: 'Managing state effectively with React hooks and ensuring tasks are stored persistently in local storage.',
            repoLink: 'https://github.com/Tsageon/TodoApp.git'
        }
    ];

    const groupProjects = [
        {
            title: 'Restaurant App (Reservation System)',
            description: 'A web application for restaurant reservations, allowing users to book a table online. Integrated with PayPal for payments, this app allows customers to reserve spots and make payments securely.',
            techStack: [
                { name: 'React', icon: <FaReact /> },
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Express', icon: <SiExpress /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'PayPal API', icon: <SiPaypal /> },
            ],
            
            keyFeatures: [
                'Table reservation system for users to book spots.',
                'PayPal integration for secure payment processing.',
                'Real-time availability of tables and reservations.',
                'Authentication to ensure only Users can CRUD'
            ],
            challenges: 'Integrating PayPal for payment processing and handling dynamic availability of tables. Doing all that in 3 days and making sure the intergration to the frontend is as painless as possible.',
            repoLink: 'https://github.com/Tsageon/ResturantAppBackend.git'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.5, 
        });
      
        const skillCards = document.querySelectorAll('.skill-card2'); 
        skillCards.forEach(card => {
          observer.observe(card);
        });
      
        return () => {
          skillCards.forEach(card => {
            observer.unobserve(card); 
          });
        };
      }, []);
      
    return (
        <div>
            <section id="home" className="home">
                <div className="home-content">
                    <h1>Hi, I'm <span>Letlhogonolo Sagae</span></h1>
                    <p>
                        I'm <strong>Junior Web Developer</strong> who enjoys creating minimalist and interesting websites which basically means I tend to prioritize functionality over design.
                    </p>
                    <div className="home-actions">
                        <button className="btn-about" onClick={openAboutModal}>About Me</button>
                        <button className="btn-secondary" onClick={() => navigate('/contact')}>Contact Me</button>
                    </div>
                </div>
            </section>
            
            {isAboutOpen && (
        <div className="about-modal">
          <div className="about-modal-content">
            <span className="close-btn" onClick={closeAboutModal}>&times;</span>
            <About />
          </div>
        </div>
      )}
            <section id="projects2" className="projects2">
  <h2>My Solo Projects</h2>
  <div className="projects-grid"> 
    {projectData.map((project, index) => (
      <div key={index} className="project-card2">
        <div className="scrollable-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-stack">
            <h4>Tech Stack:</h4>
            <ul>
              {project.techStack.map((tech, i) => (
                <li key={i} className="tech-item">
                  {tech.icon} {tech.name}
                </li>
              ))}
            </ul>
         
        </div>

        <div className="project-details">
          <strong>Key Features:</strong>
          <ul>
            {project.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p><strong>Challenges Faced and Solutions:</strong> {project.challenges}</p>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="the-btn">
    <button className="btn-primary" onClick={() => navigate('/projects')}>
      View all My Projects
    </button>
  </div>
</section>


<section id="group-projects" className="group-projects">
  <h2>Group Projects</h2>
  {groupProjects.map((project, index) => (
    <div key={index} className="group-project-card">
      <div className="scrollable-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          <h4>Tech Stack:</h4>
          <ul>
            {project.techStack.map((tech, i) => (
              <li key={i} className="tech-item">
                {tech.icon} {tech.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="project-details">
          <strong>Key Features:</strong>
          <ul>
            {project.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p><strong>Challenges Faced and Solutions:</strong> {project.challenges}</p>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  ))}
  <div className="the-btn">
    <button className="btn-secondary" onClick={() => navigate('/projects')}>
      View All
    </button>
  </div>
</section>

            <section id="assessments" className="assessments">
  <h2>Assessments</h2>
  <div className="assessment-card">
    <h3>UI Challenge</h3>
    <a href="https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5" target="_blank" rel="noopener noreferrer">View Challenge</a>
    <p>Date Completed: July 10, 2025</p>
    <p>Grade/Score: 70% - Above average.</p>
    <p>Notes: Demonstrated strong attention to detail in design, but room for improvement in responsiveness.</p>
  </div>

  <div className="assessment-card">
    <h3>JavaScript Assessment</h3>
    <p>Date Completed: August 8, 2025</p>
    <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript" target="_blank" rel="noopener noreferrer">View Challenge</a>
    <p>Grade/Score: 50% - Good understanding of basics.(Completed an External Course)</p>
    <p>Notes: Strong performance in solving problems, especially in loops.</p>
  </div>

  <div className="assessment-card">
    <h3>React Native</h3>
    <p>Date Completed: December 2024</p>
    <p>Grade/Score: N/A (Completed an external course).</p>
    <p>Notes: Course was self-paced; focused on developing mobile applications using React Native.</p>
  </div>
</section>

<section id="skills2" className="skills2" ref={skillsSectionRef}>
  <h2>Skills Matrix</h2>
  <div className="skills-container2">
    
    <div className="skill-card2">
      <div className="skill-card-inner2">
        <div className="skill-card-front2">
          <FaHtml5 className="skill-icon2" />
          <h3>HTML</h3>
          <p>Intermediate</p>
          <p>50%</p>
        </div>
        <div className="skill-card-back2">
          <h3>Info</h3>
          <p>Can Implement HTML5 features like web components, semantic elements, and forms.</p>
        </div>
      </div>
    </div>

    <div className="skill-card2">
      <div className="skill-card-inner2">
        <div className="skill-card-front2">
          <FaJsSquare className="skill-icon2" />
          <h3>JavaScript</h3>
          <p>Intermediate</p>
          <p>50%</p>
        </div>
        <div className="skill-card-back2">
          <h3>JS Info</h3>
          <p>Dabbles with ES6 features, async/await, and DOM manipulation.</p>
        </div>
      </div>
    </div>

    <div className="skill-card2">
      <div className="skill-card-inner2">
        <div className="skill-card-front2">
          <FaReact className="skill-icon2" />
          <h3>React</h3>
          <p>Intermediate</p>
          <p>50%</p>
        </div>
        <div className="skill-card-back2">
          <h3>React Details</h3>
          <p>React hooks, context API, and state management with Redux.</p>
        </div>
      </div>
    </div>

    <div className="skill-card2">
      <div className="skill-card-inner2">
        <div className="skill-card-front2">
          <FaCode className="skill-icon2" />
          <h3>TypeScript</h3>
          <p>Beginner</p>
          <p>20%</p>
        </div>
        <div className="skill-card-back2">
          <h3>TypeScript Details</h3>
          <p>Learning static typing, interfaces, and generics in TypeScript.</p>
        </div>
      </div>
    </div>

    <div className="skill-card2">
      <div className="skill-card-inner2">
        <div className="skill-card-front2">
          <FaCss3Alt className="skill-icon2" />
          <h3>CSS</h3>
          <p>Beginner</p>
          <p>20%</p>
        </div>
        <div className="skill-card-back2">
          <h3>CSS Details</h3>
          <p>Understanding Flexbox, Grid, animations, and responsive design.</p>
        </div>
      </div>
    </div>   
  </div>
</section>


            <section id="feedback" className="feedback">
  <h2>Feedback and Reflections</h2>
  <div className="feedback-content">
    <div className="feedback-card">
      <h3>Facilitator Feedback</h3>
      <p className="feedback-text"> 
        "Coming Soon."
      </p>
    </div>

    <div className="reflection-card">
      <h3>Self-Reflection</h3>
      <p className="reflection-text">
        "I've grown significantly in my ability to work with React and JavaScript. I would like to improve my understanding of advanced concepts in TypeScript. I can read code after it looking like squiggly lines and random words at the beginning. I just wanna thank CodeTribe for giving me the chance to grow which is ironic because I have learned so much but know nothing at the same time or as Mr Zack said Its Your Own Task To Keep Improving Ignore progress at your Own Peril."
      </p>
    </div>
  </div>
</section>
        </div>
    );
};

export default Home;