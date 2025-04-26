import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { Clock } from '../other';

import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { socialLinks } from '../../data/constants';

import Navig from './Navig';

const Header = () => {

  return (
    <header className=' bg-white px-5 py-3 flex justify-between items-center sticky top-0 '>
      <Link to='/' className='text-xl font-bold'>CRUD APP</Link>
      {/* <Navbar /> */}
      <Navig />
      <div className='flex flex-row gap-4 items-center justify-center'>
        <a href={socialLinks.facebook} target='_blank'>
          <FaFacebook className='text-2xl hover:text-secondary hover:cursor-pointer' />
        </a>
        <a href={socialLinks.facebook} target='_blank'>
          <FaLinkedin className='text-2xl hover:text-secondary hover:cursor-pointer' />
        </a>
        <Clock />
      </div>
    </header>
  );
};

export default Header;
