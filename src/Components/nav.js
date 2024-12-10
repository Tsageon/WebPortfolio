import './nav.css'
import { Link } from 'react-router';


const Navbar = () => (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );

  export default Navbar