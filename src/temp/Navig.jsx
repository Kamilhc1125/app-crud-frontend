import { Link, NavLink } from 'react-router-dom';
import { Clock } from '../components/other';
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { socialLinks } from '../data/constants';
import { navLinks } from '../data/constants';

const Navig = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navLinks && navLinks.map((navLinks) => {

              const { name, to } = navLinks;

              return (
                <NavLink
                  key={name}
                  to={to}
                  className="text-xl mr-8 px-2 pt-0.5 pb-2 [&.active]:active hover:nav-hover"
                >
                  {name} { }
                </NavLink>
              )
            })}
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost text-xl font-bold'>CRUD APP</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks && navLinks.map((navLinks) => {

            const { name, to } = navLinks;

            return (
              <NavLink
                key={name}
                to={to}
                className="text-xl mr-8 px-2 pt-0.5 pb-2 [&.active]:active hover:nav-hover"
              >
                {name} { }
              </NavLink>
            )
          })}
        </ul>
      </div>
      <div className="navbar-end flex flex-row gap-4 items-center justify-center">
        <a href={socialLinks.facebook} target='_blank'>
          <FaFacebook className='text-2xl hover:text-secondary hover:cursor-pointer' />
        </a>
        <a href={socialLinks.facebook} target='_blank'>
          <FaLinkedin className='text-2xl hover:text-secondary hover:cursor-pointer' />
        </a>
        <Clock />
      </div>
    </div>
  )
}

export default Navig
