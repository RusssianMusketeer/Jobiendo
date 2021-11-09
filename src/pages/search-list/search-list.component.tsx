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
import { ReactComponent as CloseIcon} from '../../assets/close_icon.svg';

const SearchList =(props:any) => {
    
    const path = useLocation().pathname;
    const [isOpen, setOpen] = useState(false);
    const [filter, setFilter]= useState(false);
    
    return(
    
    <section >
    <div className="search-list"></div>
    <NavLink  className="jobiando-mobil-logo" to="/" style={{height:"fit-content", width:"140px",position:"absolute",left:"3rem",top:"3.95rem",zIndex:2}}>
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
    <div style={{marginBottom:"1rem"}}>
            <button className="button-filters" onClick={()=>setFilter(!filter)}>Edit Filters</button>
        </div>
    <div className="search-filter-params-mobile" style={filter ?{display:"block"}: {display:"none"}}>
        <h1>JOB FILTERS</h1>
        <CloseIcon onClick={()=>setFilter(!filter)}/>
        <div className="search-filter-mobile-div">
    <SearchParamsCategories type={["-mobil"]} />
    <SearchParamsLevels type={["-mobil"]} />
    </div>
    <div>
    <button className="button-filters-mobil" onClick={()=>{setFilter(!filter)}}>APPLY FILTER</button>
    </div>
    
    </div>
    <div className="searching">
    <div className="params-search">
    <SearchParamsCategories type={[""]}/>
    <SearchParamsLevels type={[""]}/>
    </div>
    <JobList props={props}></JobList>
    </div>
    </section>
    
    )
}

export default withRouter(SearchList);