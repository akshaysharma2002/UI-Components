import React from 'react';
import style from './NavBar.module.css';
import { NavTabs } from '../Pages/Demo';

const NavBar = ({ tabs }) => {
    return (
        <>
            <nav className={style["navbar"]}>
                <ul className={style["nav-links"]}>
                {NavTabs.tabs.map((tab, index) => (
                    <li key={index} className={style["nav-item"]}>
                    <a href={tab.link}>{tab.label}</a>
                    </li>
                ))}
                </ul>
            </nav>
      </>
    );
  };
  
  export default NavBar;
  
  
 