import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <Link
          to='/'
          className='navbar-brand'
        >
          Navbar
        </Link>
        {props.currentUser && (
          <>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse align-items-center'
              id='navbarNav'
            >
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <Link
                    to='/courses'
                    className='nav-link active'
                    aria-current='page'
                  >
                    Courses
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/my-learning'
                    className='nav-link'
                  >
                    My Learning
                  </Link>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    href='#'
                    className='nav-link dropdown-toggle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Hi {props.currentUser.user.email}
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a
                        href='/login'
                        className='dropdown-item'
                        onClick={props.logout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
