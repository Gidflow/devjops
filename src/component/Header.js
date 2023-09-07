import React from 'react';
import './component.css';
import menu from './burger-menu-svgrepo-com.svg';

const Header = () => {
  return (
    <div className='header'>
        <h2>devjobs</h2>
        <img src={menu} alt="menu" />
    </div>
  )
}

export default Header