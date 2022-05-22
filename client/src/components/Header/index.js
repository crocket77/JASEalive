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
      <div className="container flex-row justify-space-between-sm justify-center align-center">
          <Link to="/">
            <h1 className='title has-text-black-bis is-size-1 is-size-3-mobile flex-row has-text-left'>Life Sherpa</h1>
          </Link>

          <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
            <div>
      
              {/* <Link to="/profile">Dashboard</Link>
              <a href="/" onClick={logout}>
                Logout
              </a> */}
              <a role="button" className="navbar-burger burger has-text-black-bis has-text-right" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
              onClick={toggleBurgerMenu}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
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
