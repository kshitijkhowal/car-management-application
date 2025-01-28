import React from 'react';
import { Link } from 'react-router-dom';
import {useAuthStore} from '../store/useAuthStore.js';

const Navbar = ({ isAuthenticated=true }) => {

  const {logout}=useAuthStore();
  
  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      {/* Left Section: Logo and Title */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          🚗 Car Management
        </Link>
      </div>

      {/* Center Section: Navigation Links (Hamburger Menu) */}
      <div className="navbar-center">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/all-products">All Cars</Link>
            </li>
            {isAuthenticated && (
              <>
                <li>
                  <Link to="/my-products">My Cars</Link>
                </li>
                <li>
                  <Link to="/product/new">Add Car</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Full Menu (for large screens) */}
        <ul className="menu menu-horizontal hidden lg:flex px-1">
          <li>
            <Link to="/all-products">All Cars</Link>
          </li>
          {isAuthenticated && (
            <>
              <li>
                <Link to="/my-products">My Cars</Link>
              </li>
              <li>
                <Link to="/product/new">Add Car</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Right Section: Login/Logout Buttons */}
      <div className="navbar-end">
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="btn btn-error btn-sm text-white"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="btn btn-primary btn-sm text-white mr-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-secondary btn-sm text-white">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
