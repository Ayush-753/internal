import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/edu.jpg'

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-xl bg-info">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Logo" className='navbar-logo img-fluid' style={{ width: '30px', height: '30px' }} />
              <span className="navbar-logo-name ms-2 text-white">Quicklearn</span>
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/course" className="nav-link text-white">Course</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;