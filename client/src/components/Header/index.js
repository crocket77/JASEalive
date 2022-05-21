import React from 'react';
import { Link } from 'react-router-dom';
// import 'bulma/css/bulma.min.css'

import Auth from '../../utils/auth';
const Header = () => {

  const logout = event => {
    toggleBurgerMenu();
    event.preventDefault();
    Auth.logout();
  };
  
  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }


  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
          <Link to="/">
            <h1 className='title has-text-black-bis'>Life Sherpa</h1>
          </Link>
          <p className='title small has-text-black-bis mb-0 px-1'>Get help from the people you need!</p>
          <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
            <div>
            <a role="button" className="navbar-burger burger has-text-black-bis" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
              onClick={toggleBurgerMenu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
              {/* <Link to="/profile">Dashboard</Link>
              <a href="/" onClick={logout}>
                Logout
              </a> */}

              <div id="navbarBasic" className="navbar-menu">
                <div className="navbar-start">
                  <Link to="/" className="navbar-item" onClick={toggleBurgerMenu}>Home</Link>
                  <Link to="/profile" className="navbar-item" onClick={toggleBurgerMenu}>Dashboard</Link>
                  <Link to="/" className="navbar-item" onClick={logout}>Logout</Link>
                </div>
              </div>
            </div>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>

      </div>
    </header>
  );
};

export default Header;
