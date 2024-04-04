import { Link, NavLink } from "react-router-dom";

import User from '../../../assets/user.png'

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border bg-transparent hover:bg-transparent text-[#706F6F] text-lg"
              : "border-0 bg-transparent hover:bg-transparent text-[#706F6F] text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "border bg-transparent hover:bg-transparent text-[#706F6F] text-lg"
              : "border-0 bg-transparent hover:bg-transparent text-[#706F6F] text-lg"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive
              ? "border bg-transparent hover:bg-transparent text-[#706F6F] text-lg"
              : "border-0 bg-transparent hover:bg-transparent text-[#706F6F] text-lg"
          }
        >
          Career
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-5">{navLinks}</ul>
        </div>

        <div className="navbar-end flex items-center gap-x-5">
          <figure className="w-10 h-10">
            <img src={User} alt="" />
          </figure>
          <Link to="/">
            <button className="py-3 px-8 bg-[#403F3F] text-white">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar