import React from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiSearchAlt2 } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../../../Contexts/UserContext";
import logo from '../../../../images/logo/Untitled design.png'
const NavbarTop = () => {
  const {user, logOut} = useContext(AuthContext)
  return (
    <div className="navbar-bg">
      <div className="navbar navbar-bg max-w-screen-xl m-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="flex-1 grid grid-cols-2">
          <div className="flex items-center">
            <img className="rounded-full" src={logo} alt="" />
            <Link
              to="/"
              className="btn text-sky-500 btn-ghost normal-case text-xl -ml-1.5"
            >
              Online Phone
            </Link>
            {/* <span className="text-white">{user?.email}</span> */}
          </div>
          <div className="search-box flex justify-center items-center">
            <input
              className="py-2 h-10 px-5 w-full rounded-l-xl"
              type="text"
              placeholder="Type to search..."
            />
            <div className="w-16 h-10 bg-orange-500 text-white flex justify-center items-center rounded-r-xl font-bold text-2xl">
              <BiSearchAlt2></BiSearchAlt2>
            </div>
          </div>
        </div>

        <div className="flex-none justify-end lg:mt-0 mt-5">
          {
            user?.uid ?
              <button onClick={logOut} to='/login' className="text-slate-200 bg-slate-600 btn btn-sm mr-3">
              sign Out
            </button>
            :
            <Link to='/login' className="text-slate-200 bg-slate-600 btn btn-sm mr-3">
              Sign in
            </Link>
          }
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className=" btn text-slate-400 btn-ghost btn-circle"
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
              Cart
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end ml-3">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
