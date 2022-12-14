import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { Component } from "react";
import Logo from './media/logo.png';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.auth = getAuth();
  }
  componentDidMount() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
      } else {
        window.location.pathname = process.env.PUBLIC_URL + "/login";
      }
    });
  }
  render() {
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/ufarmsio-dashboard/home">Homepage</a>
              </li>
              <li>
                <a href="/ufarmsio-dashboard/myfarms">My Farms</a>
              </li>
              <li>
                <a href="/ufarmsio-dashboard/dashboard">DashBoard</a>
              </li>
              <li>
                <span
                  onClick={() => {
                    signOut(this.auth);
                  }}
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl"><img src={Logo} alt="Logo" height="40" width="100"/></a>
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => {
              window.location.pathname = process.env.PUBLIC_URL + "/requests";
            }}
          >
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
