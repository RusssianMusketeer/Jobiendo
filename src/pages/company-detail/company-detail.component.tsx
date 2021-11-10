import React from "react";
import { ReactComponent as NameIcon} from '../../assets/jobiendo_logo_3.svg';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './company-detail.styles.scss';
import { ReactComponent as SuitCaseIcon} from '../../assets/suitcase.svg';
import { ReactComponent as LocationIcon} from '../../assets/location.svg';
import { ReactComponent as SizeIcon} from '../../assets/size.svg';
import { Link } from "react-router-dom";
import SkeletonListing from "../../skeletons/SkeletonListing";
import { useContext } from "react";
import HomePageContext from '../../context/HomePageContext';
import { ReactComponent as MapIcon} from '../../assets/map.svg';
import { useState } from "react";
import Hamburger from 'hamburger-react';
import HamburgerMenu from '../../components/hamburger-menu/hamburger-menu.component';

const CompanyDetail = () => {

    const {companyJobPage,setCompanyJobPage,loading,setCompanyJob,companyJob} =useContext(HomePageContext);
    const location:any= useLocation();
    const path = useLocation().pathname;
    const [slice,setSlice]=useState<number[]>([0,4]);
    const [isOpen, setOpen] = useState(false);
   

    return (
        <section>
            <div className="job-photo-header"/> 
            <NavLink className="jobiando-mobil-logo" to="/" style={{height:"fit-content", width:"140px",position:"absolute",left:"3rem",top:"3.95rem",zIndex:2}}>
        <NameIcon className="logo-search-list"/>
        </NavLink>
        <HamburgerMenu info={isOpen}/>
        <Hamburger toggled={isOpen} toggle={setOpen} size={26}/>
        <div className='header-logo-choice-container'>
             <NavLink className ='choice' to='/'> HOME </NavLink>
             <NavLink className ='choice' to='/search'> JOBS </NavLink>
             <NavLink className ='choice' to='/company' style={{background: (path=== "/company-detail") ? 'orange' : "white"}}> COMPANIES </NavLink>
          </div>
        <div className="company-detail-section">
            <div className="company-detail-title-description">
                <div className="company-logo-name-div">
                <div className="flex-mobil-logo">  
                <div className="company-div-logo-title">
                <div className="company-logo-detail-div">
                <img className="company-logo-detail" alt="logo" loading="lazy" src={location.state.company_logo }></img>
                
                <div className="company-detail-title-div"><h1 className="company-detail-title">{location.state.title_company}</h1></div>
                </div>
                </div>
                <div className="company-detail-location-industry-size">
                <div className="company-industry"><p> <SuitCaseIcon/>INDUSTRY</p><span>{location.state.compagny_industry}</span></div>
                <div className="company-location"><p><LocationIcon/>LOCATION</p><span>{location.state.company_location}</span></div>
                <div className="company-size"><p><SizeIcon/>SIZE</p><span>{location.state.company_size}</span></div>  
            </div>
            </div>
            <div className="company-text-description">
            <p>{location.state.company_description !== "TBD" ? location.state.company_description : null}</p>
            </div>
                </div>
                <div >  
                </div>
            <img className="company-image-detail" alt="company" loading="lazy" src={location.state.image_company}></img>
            
            </div>
            
        </div>
        {location.state.company_job_info.results.length !==0 ?<div style={{width: "80%",margin: "0 auto", marginBottom:"3rem"}}>
        {(loading || location.state.company_job_info.results ===undefined ? ([1,2,3,4,5,].map((n) => <SkeletonListing key={n}/>))
        : (location.state.company_job_info.results.slice(slice[0], slice[1]).map((item:any,index:any)=>(
        <div className="job-container" style={{marginTop: index===0 ? '3rem' : '2rem', width: "92.4%",cursor:"default"}}>
           
            <div className="upper-part-listing">
        <div className="title-image-mobil">
        <img className="image-logo-mobil" alt="company" loading="lazy" src={location.state.company_logo}></img>
        <div>
        <h1  className="job-title" key={index}>{item.name}</h1>
        <div className="descriptions">
        <p className="job-location"> {item.company.name}</p>
        <div style={{display:"flex",marginTop:"16px",alignSelf:"baseline"}}>
        <MapIcon className="map-icon"/>
        <p className="job-local" style={{marginTop:"0", textAlign:"left"}}> {item.locations.length=== 0 ?null :item.locations[0].name }</p>
        </div>
        </div>
        </div>
        </div>
        <div className="button-job-container-mobil">
       
        <Link className="view-job-button" to={{
            pathname: "./job-detail",
            state: {
                item:item.contents,
                picture:location.state.company_logo,
                title:item.name,
                compagny:item.company.name,
                location:item.locations.length=== 0 ?null :item.locations[0].name,
                muse:item.refs.landing_page,
                image1:location.state.image_company,

                
                company_info:location.state.company_job_info,
                company_industry:location.state.compagny_industry,
                company_size:location.state.company_size,
                company_description:location.state.company_description

            }
             

        }}> VIEW JOB </Link>
        
        <a className="apply-muse" href={item.refs.landing_page}>APPLY ON MUSE SITE</a>
        </div>
        </div>
       
        <div className="lower-part-listing">
            <div className="tag-container">
            <div className="tag" style={{display: item.levels[0].name  ? 'flex' : 'none'}}>
                { item.levels[0].name }
            </div>
            <div className="tag" style={{display: location.state.compagny_industry  ? 'flex' : 'none'}}>
                {location.state.compagny_industry}
            </div>
            </div>
            <p className="job-posting-date">{item.publication_date.slice(0,10)}</p>
        </div>
        </div>
        ))))}
           <div className="arrow-section" style={{margin: "0px auto", marginTop:"2rem" }}>
        <button  className="arrow left" onClick={()=>setSlice(slice[0]===0 ? [0,4] : [(slice[0])-4,(slice[1])-4])}></button>
        <p className="page-number">Page {slice[1]/4}</p>
        <button  className="arrow right" onClick={()=>setSlice(location.state.company_job_info.results.slice(slice[0], slice[1]).length!==4 || slice[1]===20 ? [slice[0],slice[1]] :[(slice[0])+4,(slice[1])+4])}></button>
        
        </div>

 
        </div> : <div className="error-section" style={{margin:"0 auto", width:"80%", marginTop:"4rem"}}>
            <h1>No job results have been found at this moment !</h1>
            </div>}
        

        </section>
    )

}

export default CompanyDetail;