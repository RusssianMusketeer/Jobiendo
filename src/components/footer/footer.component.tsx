import React from 'react';
import './footer.styles.scss';
import { NavLink} from 'react-router-dom';
import { ReactComponent as NameIcon} from '../../assets/jobiendo_logo_3.svg';
import { useLocation } from 'react-router';

const Footer = () => {
        const path = useLocation().pathname;
        return(
<footer>
        <div className='footer-container'>
        <NavLink to="/" style={{width:"fit-content", alignSelf:"center"}}>
        <NameIcon className="logo-search-footer"/>
        </NavLink>
            
            <div className='footer-logo-choice-container'>
             <NavLink className ='choice' to='/' style={{background: (path=== "/") ? 'orange' : "linear-gradient(to right, orange, orange 50%, #eff2f2 50%)"}}> HOME </NavLink>
             <NavLink className ='choice' to='/search' style={{background: (path=== "/search" || path ==="/job-detail") ? 'orange' : "linear-gradient(to right, orange, orange 50%, #eff2f2 50%)"}}> JOBS </NavLink>
             <NavLink className ='choice' to='/company' style={{background: (path=== "/company" || path ==="/company-detail") ? 'orange' : "linear-gradient(to right, orange, orange 50%, #eff2f2 50%)"}}> COMPANIES </NavLink>
            </div>
        </div>
</footer>
        
)
        }
export default Footer