import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.jsx';
import './Navigation.css';
import { IconContext } from 'react-icons';

const Navigation = () => {
  return (
    <IconContext.Provider value={{ color: '#000' }}>
      <nav className='nav-menu'>
        <ul className='nav-menu-items'>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navigation;
