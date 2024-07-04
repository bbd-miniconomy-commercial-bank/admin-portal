import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from './SidebarData.jsx';
import './Navigation.css';
import { IconContext } from 'react-icons';

const Navigation = () => {
  const location = useLocation();

  // Check if current path contains '/admin/accounts'
  const isAccountsPage = location.pathname.includes('/admin/accounts');

  return (
    <IconContext.Provider value={{ color: '#000' }}>
      <nav className={`nav-menu ${isAccountsPage ? 'accounts-active' : ''}`}>
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
