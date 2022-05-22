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
    <header className=" align-center is-fixed-top bg-secondary ">
      <nav className="flex-row align-center is-justify-content-space-between has-shadow is-white">
         <div className='navbar-brand '>
            <Link to="/" className='navbar-item navbar-start'>
              <h1 className='has-text-black-bis is-size-1 is-size-3-mobile '>Life Sherpa</h1>
            </Link>
          </div>
          <div className="navbar text-center navbar-end">
          {Auth.loggedIn() ? (
            <>
            <div>
      
              {/* <Link to="/profile">Dashboard</Link>
              <a href="/" onClick={logout}>
                Logout
              </a> */}
              <a role="button" className="navbar-burger burger has-text-black-bis bg-secondary " aria-label="menu" aria-expanded="false" data-target="navbarBasic"
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
