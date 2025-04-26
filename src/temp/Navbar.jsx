import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/constants';

const Navbar = () => {

  return (
    <nav>
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
    

    </nav>


  )
}

export default Navbar;
