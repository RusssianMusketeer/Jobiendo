import React from 'react';
import './job-detail.styles.scss';
import { useLocation } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';
import HomePageContext from '../../context/HomePageContext';
import {useContext} from 'react';
import { ReactComponent as MapIcon} from '../../assets/map.svg';
import { ReactComponent as CompagnyIcon} from '../../assets/company-icon.svg';
import { ReactComponent as NameIcon} from '../../assets/jobiendo_logo_3.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const JobDetail = () => {
    const {date,page,setPage,results,logo,companyJobListing, setCompanyJobListing} =useContext(HomePageContext);
    const location:any= useLocation();
    const path = useLocation().pathname;
    
    return(
        <section>
            {console.log(location.state.company_info )}
        <div className="job-photo-header"/> 
        <NavLink to="/">
        <NameIcon className="logo-search-list"/>
        </NavLink>
        <div className='header-logo-choice-container'>
             <NavLink className ='choice' to='/'> HOME </NavLink>
             <NavLink className ='choice' to='/search' style={{background: (path=== "/job-detail") ? 'orange' : "white"}}> JOBS </NavLink>
             <NavLink className ='choice' to='/company'> COMPANIES </NavLink>
          </div>
        <img className="image-logo-job-detail" alt="company" src={location.state.picture}></img>
        <div className="job-detail">
        <div>
        <div className="upper-section">
        <div className="job-details-title">
        {location.state.title}
        </div>
        <div style={{display:"flex"}}>
        <div style={{marginRight:"3rem"}}>
        <Link className="company-card-link-job" to={{pathname: "./company-detail",
                state: {
                    company_logo:location.state.picture,
                    image_company:location.state.image1,
                    title_company:location.state.company,
                    compagny_industry:location.state.company_industry,
                    company_location:location.state.location,
                    company_size:location.state.company_size,
                    company_description:location.state.company_description,
                    company_job_info:location.state.company_info 
                     }
                }}>COMPANY</Link>
        </div>
        <div>
        <a className="job-detail-apply-muse" href={location.state.muse}>APPLY ON MUSE SITE</a>
        </div>
        </div>
        </div>
        <div className="job-tags">
        <div className="job-tags-location">
        <MapIcon className="tags-location-icon"/>
        {location.state.location}
        </div>
        <div className="job-tags-compagny">
        <CompagnyIcon className="tags-company-icon"/>
        {location.state.compagny}
        </div>
        </div>
        </div>
        <div className="text-image">
        <div className="section-text">
        { ReactHtmlParser(location.state.item) }
        </div>
        <div>
        <img className="image-job-detail" alt="company" src={location.state.image1}></img>
        </div>
        </div>
        <div className="bottom-apply-muse">
        <Link className="company-card-link-job" style={{marginRight:"3rem"}} to={{pathname: "./company-detail",
                state: {
                    company_logo:location.state.picture,
                    image_company:location.state.image1,
                    title_company:location.state.company,
                    compagny_industry:location.state.company_industry,
                    company_location:location.state.location,
                    company_size:location.state.company_size,
                    company_description:location.state.company_description,
                    company_job_info:location.state.company_info
                     }
                }}>COMPANY</Link>
        <a className="job-detail-apply-muse-bottom" href={location.state.muse} >APPLY ON MUSE SITE</a>
        </div>
        </div>
        </section>
    )
};

export default JobDetail;