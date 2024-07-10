import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="navbar">
        <Link to='/' 
          style={{
            color: location.pathname === '/' ? '#136a8a' : 'black'
          }}>
          Dimitri
        </Link>
        <Link to='/projects' 
          style={{
            color: location.pathname === '/projects' ? '#136a8a' : 'black'
          }}>
          Projets
        </Link>
        <Link to='/skills' 
          style={{
            color: location.pathname === '/skills' ? '#136a8a' : 'black'
          }}>
          Skills
        </Link>
      </div>
    </header>
  );
};

export default Header;

