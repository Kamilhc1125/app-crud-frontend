import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Clock } from '../other';
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { socialLinks } from '../../data/constants';
import NavLinks from './NavLinks';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          {isOpen && (
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow">
              <NavLinks direction="flex-col" />
          </ul>
          )}
        </div>
        <Link to='/' className='btn btn-ghost text-xl font-bold'>CRUD APP</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-2">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end flex flex-row gap-4 items-center">
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

export default Header;
