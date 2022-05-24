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
    // document.querySelector('.navbar-menu').classList.toggle('is-flex');
  }
 

  return (
    <header className=" bg-secondary mb-4 is-flex is-justify-content-space-between">         
          <div className='navbar-brand '>
            <Link to="/" className='navbar-item '>
              <h1 className='has-text-black-bis is-size-1 is-size-3-mobile '>Life Sherpa</h1>
            </Link>
          </div>
      <nav className="is-fixed-top flex-row align-center is-justify-content-space-between is-white">

          <div className="navbar text-center navbar-end">
          {Auth.loggedIn() ? (
            <>
            <div className='bg-secondary has-dropdown'>
      
              <a role="button" className="navbar-burger burger has-text-black-bis bg-secondary  " aria-label="menu" aria-expanded="false" data-target="navbarBasic"
              onClick={toggleBurgerMenu}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
              <div id="navbarBasic" className="navbar-menu bg-secondary is-expanded">
                
                  <Link to="/" className="navbar-item " onClick={toggleBurgerMenu}>Home</Link>
                  <Link to="/profile" className="navbar-item" onClick={toggleBurgerMenu}>Dashboard</Link>
                  <Link to="/" className="navbar-item" onClick={logout}>Logout</Link>

              </div>
            </div>
            </>
          ) : (
            <>
            <div id="navbarBasic" className="navbar-menu bg-secondary">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
