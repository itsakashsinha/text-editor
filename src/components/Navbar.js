import React from 'react';
import PropTypes from 'prop-types';
// import { a } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href='./' className="navbar-brand" to="/"> {props.title} </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href='./' className="nav-link active" aria-current="page" to="/">Home</a>
              </li>
              <li className="nav-item">
                <a href='./components/About.js' className="nav-link" to="/about">{props.secondMenu}</a>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
  )
}

// setting proptypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  secondMenu: PropTypes.string
}
// Default props
Navbar.defaultProps = {
  title:"Set title",
  secondMenu: "set secondMenue here"
}