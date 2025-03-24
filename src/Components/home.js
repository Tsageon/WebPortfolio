import React,{useState, useRef, useEffect} from "react";
import { motion } from 'framer-motion';
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
                { name: 'Reactjs', icon: <FaReact color="#61DBFB"/>}
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
                { name: 'React', icon: <FaReact color="#61DBFB"/>},
                { name: 'JavaScript', icon: <FaJsSquare color="#F0DB4F"/> },
                { name: 'CSS', icon: <FaCss3Alt color="#2965f1"/> },
                { name: 'OpenWeather API', icon: < FaSun color="orange"/> }
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
                { name: 'React', icon: <FaReact color="#61DBFB"/> },
                { name: 'JavaScript', icon: <FaJsSquare color="#F0DB4F"/>  },
                { name: 'CSS', icon: <FaCss3Alt color="#2965f1"/> }
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
                { name: 'React', icon: <FaReact color="#61DBFB"/> },
                { name: 'Node.js', icon: <FaNodeJs color="#68a063" /> },
                { name: 'Express', icon: <SiExpress /> },
                { name: 'MongoDB', icon: <SiMongodb color="#00ed64" /> },
                { name: 'PayPal API', icon: <SiPaypal color=" #27346A"/> },
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
  <motion.div 
    className="about-modal"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.3 }}
  >
    <div className="about-modal-content">
      <span className="close-btn" onClick={closeAboutModal}>&times;</span>
      <About />
    </div>
</motion.div>
)}
<section id="projects2" className="projects2">
  <h2>My Solo Projects</h2>
  <div className="projects-grid"> 
    {projectData.map((project, index) => (
      <motion.div
      key={index}
      className="project-card2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
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
        </motion.div>
    ))}
</div>

<div className="the-btn1">
  <motion.button 
  className="btn-primary"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate('/projects')}>
      View all My Projects
      </motion.button>
  </div>
</section>

<section id="group-projects" className="group-projects">
<motion.h2 
    initial={{ opacity: 0, y: -20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
  >
    Group Projects
  </motion.h2>
  {groupProjects.map((project, index) => (
    <motion.div 
    key={index} 
    className="group-project-card"
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
      <div className="scrollable-content">
      <motion.h3 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          <h4>Tech Stack:</h4>
          <ul>
            {project.techStack.map((tech, i) => (
             <motion.li 
             key={i} 
             className="tech-item"
             initial={{ opacity: 0, x: -10 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.2, delay: i * 0.05 }}
             whileHover={{ scale: 1.1 }}
           >
             {tech.icon} {tech.name}
           </motion.li>
            ))}
          </ul>
        </div>
        <div className="project-details">
          <strong>Key Features:</strong>
          <ul>
            {project.keyFeatures.map((feature, index) => (
               <motion.li 
               key={index} 
               initial={{ opacity: 0, x: 10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.2, delay: index * 0.05 }}
             >
               {feature}
             </motion.li>
            ))}
          </ul>
          <p><strong>Challenges Faced and Solutions:</strong> {project.challenges}</p>
          <motion.a 
            href={project.repoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <FaGithub className="github-icon" /> View on GitHub
          </motion.a>
        </div>
      </div>
      </motion.div>
  ))}
   <motion.div 
    className="the-btn"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.2 }}
  >
    <motion.button 
      className="btn-secondary" 
      onClick={() => navigate('/projects')}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      View All
    </motion.button>
  </motion.div>
</section>

<section id="assessments" className="assessments">
<motion.h2 
    initial={{ opacity: 0, y: -20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
  >
    Assessments
  </motion.h2>
  <motion.div 
    className="assessment-card"
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.4, delay: 0.1 }}
  >
    <h3>UI Challenge</h3>
    <a href="https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5" target="_blank" rel="noopener noreferrer">View Challenge</a>
    <p>Date Completed: July 10, 2025</p>
    <p>Grade/Score: 70% - Above average.</p>
    <p>Notes: Demonstrated strong attention to detail in design, but room for improvement in responsiveness.</p>
    </motion.div>

    <motion.div 
    className="assessment-card"
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.4, delay: 0.2 }}
  >
    <h3>JavaScript Assessment</h3>
    <p>Date Completed: August 8, 2025</p>
    <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript" target="_blank" rel="noopener noreferrer">View Challenge</a>
    <p>Grade/Score: 50% - Good understanding of basics.(Completed an External Course)</p>
    <p>Notes: Strong performance in solving problems, especially in loops.</p>
    </motion.div>

    <motion.div 
    className="assessment-card"
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.4, delay: 0.3 }}
  >
    <h3>React Native</h3>
    <p>Date Completed: December 2024</p>
    <p>Grade/Score: N/A (Completed an external course).</p>
    <p>Notes: Course was self-paced; focused on developing mobile applications using React Native.</p>
    </motion.div>
</section>

<section id="skills2" className="skills2" ref={skillsSectionRef}>
<motion.h2 
    initial={{ opacity: 0, y: -20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
  >
    Skills Matrix
  </motion.h2>
    
  <div className="skills-container2">
    {['HTML', 'JavaScript', 'React', 'TypeScript', 'CSS'].map((skill, index) => (
      <motion.div 
        key={index}
        className="skill-card2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="skill-card-inner2">
          <div className="skill-card-front2">
            {skill === 'HTML' && <FaHtml5 className="skill-icon2" />}
            {skill === 'JavaScript' && <FaJsSquare className="skill-icon2" />}
            {skill === 'React' && <FaReact className="skill-icon2" />}
            {skill === 'TypeScript' && <FaCode className="skill-icon2" />}
            {skill === 'CSS' && <FaCss3Alt className="skill-icon2" />}
            <h3>{skill}</h3>
            <p>{index < 3 ? 'Intermediate' : 'Beginner'}</p>
            <p>{index < 3 ? '50%' : '20%'}</p>
          </div>
          <div className="skill-card-back2">
            <h3>{skill} Info</h3>
            <p>{skill === 'HTML' ? 'Can Implement HTML5 features like web components, semantic elements, and forms.' : 
                skill === 'JavaScript' ? 'Dabbles with ES6 features, async/await, and DOM manipulation.' :
                skill === 'React' ? 'React hooks, context API, and state management with Redux.' :
                skill === 'TypeScript' ? 'Learning static typing, interfaces, and generics in TypeScript.' :
                'Understanding Flexbox, Grid, animations, and responsive design.'}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

<section id="feedback" className="feedback">
<motion.h2 
    initial={{ opacity: 0, y: -20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
  >
    Feedback and Reflections
  </motion.h2>

  <div className="feedback-content">
   <motion.div 
      className="feedback-card"
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3>Facilitator Feedback</h3>
      <motion.p 
        className="feedback-text" 
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: [10, -10, 10] }} 
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        "Coming Soon...."
      </motion.p>
    </motion.div>
    <motion.div 
      className="reflection-card"
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3>Self-Reflection</h3>
      <p className="reflection-text">
        "I've grown significantly in my ability to work with React and JavaScript. I would like to improve my understanding of advanced concepts in TypeScript. I can read code after it looking like squiggly lines and random words at the beginning. I just wanna thank CodeTribe for giving me the chance to grow which is ironic because I have learned so much but know nothing at the same time or as Mr Zack said Its Your Own Task To Keep Improving Ignore progress at your Own Peril."
      </p>
    </motion.div>
  </div>
</section>
</div>
);
};

export default Home;