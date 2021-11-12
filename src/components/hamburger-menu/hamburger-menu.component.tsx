import React from 'react';
import { NavLink } from 'react-router-dom';
import './hamburger-menu.styles.scss';
import { ReactComponent as NameIcon} from '../../assets/jobiendo_logo_3.svg';

const HamburgerMenu = (info:any) => {
    return(
    <div className="hamburger-section" style={info.info ? {top:"0"}: {top:"-230px"} }>
        <NameIcon className="logo-hamburger"/>
    
    <div className="hamburger-container">
             <NavLink  className="hamburger" to='/'> HOME </NavLink>
             <NavLink   className="hamburger" to='/search'> JOBS </NavLink>
             <NavLink   className="hamburger" to='/company'> COMPANIES </NavLink>
             
    </div>
    
    </div>
    
  )
}

export default HamburgerMenu;