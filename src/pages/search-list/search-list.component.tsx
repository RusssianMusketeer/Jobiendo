import React from 'react';
import JobList from '../../components/job-list/job-list.component';
import { withRouter } from 'react-router';
import SearchBar from '../../components/search-bar/search-bar.component';
import './search-list.styles.scss';
import SearchParamsCategories from '../../components/search-params-categories/search-params-categories.component';
import SearchParamsLevels from '../../components/search-params-levels/search-params-levels.component';
import { ReactComponent as NameIcon} from '../../assets/jobiendo_logo_3.svg';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import HamburgerMenu from '../../components/hamburger-menu/hamburger-menu.component';

const SearchList =(props:any) => {
    
    const path = useLocation().pathname;
    const [isOpen, setOpen] = useState(false);
    
    return(
    
    <section >
    <div className="search-list"></div>
    <NavLink to="/" style={{height:"fit-content", width:"fit-content",position:"absolute",left:"3rem",top:"3.95rem",zIndex:2}}>
        <NameIcon className="logo-search-list"/>
        </NavLink>
        <HamburgerMenu info={isOpen}/>
        <Hamburger toggled={isOpen} toggle={setOpen} size={26}/>
    <div className='header-logo-choice-container'>
             <NavLink className ='choice' to='/'> HOME </NavLink>
             <NavLink className ='choice' to='/search' style={{background: (path=== "/search") ? 'orange' : "white"}}> JOBS </NavLink>
             <NavLink className ='choice' to='/company'> COMPANIES </NavLink>
          </div>
    
    <SearchBar/>
    <div className="searching">
    <div className="params-search">
    <SearchParamsCategories/>
    <SearchParamsLevels/>
    </div>
    <JobList props={props}></JobList>
    </div>
    </section>
    
    )
}

export default withRouter(SearchList);