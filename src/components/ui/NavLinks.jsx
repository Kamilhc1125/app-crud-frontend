import { navLinks } from '../../data/constants';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ direction = "flex-row" }) => {

  return (
    <li className={`flex ${direction}`}>
      {navLinks.map((navLinks) => {

        const { name, to } = navLinks;

        return (
          <NavLink
            key={name}
            to={to}
            className="text-xl mr-8 px-2 pt-0.5 pb-2 [&.active]:active hover:nav-hovermt-2"
          >{name}</NavLink>
        )
      })}
    </li>
  )
}

export default NavLinks;
