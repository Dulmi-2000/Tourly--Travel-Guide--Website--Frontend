import { Link } from 'react-router-dom';

const Destination = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Your Brand</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Other navigation links go here */}
            <li className="nav-item">
              <Link className="nav-link" to="/other-link">Other Link</Link>
            </li>

            {/* Login and Signup links outside the toggle button */}
            <li className="nav-item">
              <Link className="btn2" to="/Login/Login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="btn2" to="/Signup/Signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Destination;
