import React from 'react';
import "./company-search.styles.scss";
import { ReactComponent as NameIcon} from '../../assets/jobiendo_logo_3.svg';
import CompanyList from '../../components/company-list/company-list.component';
import { NavLink } from 'react-router-dom';
import { useState,useRef,useEffect } from 'react';
import { useContext } from 'react';
import HomePageContext from '../../context/HomePageContext';
import PlacesAutocomplete from 'react-places-autocomplete';
import { useLocation } from 'react-router';
import Hamburger from 'hamburger-react';
import HamburgerMenu from '../../components/hamburger-menu/hamburger-menu.component';
    
const CompanySearch =() => {

    const {setIndustry,setCompanyLocation,setCompanySize,companySize,industry,companyLocation,} =useContext(HomePageContext);
    const node1 = useRef<HTMLDivElement>(null);
    
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [locationHolder,setLocationHolder] =useState("");
    const [isOpen, setOpen] = useState(false);



    const handleClickOutside = (e: any) => {
        console.log("clicking anywhere");
        if (( node1 ).current!.contains(e.target)) {
          // inside click
          return;
        }
        // outside click
        setToggle(false);
        setToggle2(false);
        setToggle3(false);
      };

      useEffect(() => {
        if (toggle2||toggle || toggle3) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [toggle,toggle2,toggle3]);

      const handleSelect = async (value: string) => {
        const locationNameArray=value.split(',');
        const locationName=(`${locationNameArray[0]}, ${locationNameArray[1] ? locationNameArray[1] : "" }`);
        setCompanyLocation(locationName);
        setToggle(false);

      };
      const path = useLocation().pathname;
     
    return (
        <section className="company-search">
            <div className="search-list"></div>
            <NavLink className="jobiando-mobil-logo" to="/" style={{height:"fit-content", width:"140px",position:"absolute",left:"3rem",top:"3.95rem",zIndex:2}}>
            <NameIcon className="logo-search-list"/>
            </NavLink>
            <HamburgerMenu info={isOpen}/>
            <Hamburger toggled={isOpen} toggle={setOpen} size={26}/>
            <div className='header-logo-choice-container'>
             <NavLink className ='choice' to='/'> HOME </NavLink>
             <NavLink className ='choice' to='/search'> JOBS </NavLink>
             <NavLink className ='choice' to='/company' style={{background: (path=== "/company") ? 'orange' : "white"}}> COMPANIES </NavLink>
          </div>
            <div className="filter">
                <div className="filter-wrapper">
                    <h3 className="filter-name">FILTER RESULTS</h3>
                    <div ref={node1} style={{display:"flex"}}>
                    <div className="filter-options" >
                    {toggle &&  <div className="location-dropdown" >
                        <ul className="dropdown-list-location">
                        <li className="apply-info">
                        SELECT THE LOCATION
                        </li>
                        <div className="apply-filter-section-location">
                        <li className="apply-filter-location" onClick={()=>{setCompanyLocation("New York, NY");setToggle(!toggle);}}>
                        New York, NY
                        </li>
                        <li className="apply-filter-location" onClick={()=>{setCompanyLocation("Chicago, IL");setToggle(!toggle);}}>
                        Chicago, IL
                        </li>
                        <li className="apply-filter-location" onClick={()=>{setCompanyLocation("Austin, TX");setToggle(!toggle);}}>
                        Austin, TX
                        </li>
                        <li className="apply-filter-location" onClick={()=>{setCompanyLocation("San Francisco, CA");setToggle(!toggle);}}>
                        San Francisco, CA
                        </li>
                        <li className="apply-filter-location" onClick={()=>{setCompanyLocation("Flexible / Remote");setToggle(!toggle);}}>
                        Flexible / Remote
                        </li>
                        <li className="apply-filter-location" onClick={()=>{setCompanyLocation("Boston, MA");setToggle(!toggle);}}>
                        Boston, MA
                        </li>
                        <li className="apply-filter-location" onClick={()=>{setCompanyLocation("Los Angeles, CA");setToggle(!toggle);}}>
                        Los Angeles, CA
                        </li>
                        <li className="apply-filter-location" onClick={()=>{setCompanyLocation("Washington, DC");setToggle(!toggle);}}>
                        Washington, DC
                        </li>
                        <li className="apply-filter-location" onClick={()=>{setCompanyLocation("Atlanta, GA");setToggle(!toggle);}}>
                        Atlanta, GA
                        </li>
                        </div>
                        <li className="apply-search-location-city">
                        <h1 className="search-location-title">
                        Don't See Your City
                        </h1>
                        <PlacesAutocomplete
                    value={locationHolder}
                  onChange={setLocationHolder}
                  onSelect={handleSelect}             
      >
        {({ getInputProps, suggestions, getSuggestionItemProps}) => (
          <div>
  
            <form >
            <input {...getInputProps({ placeholder: "Type Location" })} />
            </form>
            <div className="suggestion-location">
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#3852d4" : "#fff",
                  color: suggestion.active ? "white" : "black"               
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
                        </li>
                        </ul>
                    </div> }
                         <div className="click-container"  onClick={() => {setToggle(!toggle); setToggle2(false);setToggle3(false)}}>
                             <span>Location</span><div className="symbol">&#x25bc;</div></div>
                         </div>
                    <div className="filter-options-2" >
                    {toggle2 &&  <div className="Industry-dropdown" >
                    <ul className="dropdown-list-industry" >
                        <li className="apply-info">
                        SELECT THE INDUSTRY
                        </li>
                        <div className="apply-filter-section-industry">
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Advertising and Agencies");setToggle2(!toggle2)}}>
                        Advertising and Agencies
                        </li>
                        
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Consumer");setToggle2(!toggle2)}}>
                        Consumer
                        </li>
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Entertainment & Gaming");setToggle2(!toggle2)}}>
                        Entertainment & Gaming
                        </li>
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Food & Beverage");setToggle2(!toggle2)}}>
                        Food & Beverage
                        </li>
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Insurance");setToggle2(!toggle2)}}>
                        Insurance
                        </li>
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Media");setToggle2(!toggle2)}}>
                        Media
                        </li>
                       
                        
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Client Services");setToggle2(!toggle2)}}>
                        Client Services
                        </li>
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Education");setToggle2(!toggle2)}}>
                        Education
                        </li>
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Fashion and Beauty");setToggle2(!toggle2)}}>
                        Fashion and Beauty
                        </li>
                        
                        
                        
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Tech");setToggle2(!toggle2)}}>
                        Tech
                        </li>
                       
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Consulting");setToggle2(!toggle2)}}>
                        Consulting
                        </li>
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Engineering");setToggle2(!toggle2)}}>
                        Engineering
                        </li>
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Finance");setToggle2(!toggle2)}}>
                        Finance
                        </li>
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Healthcare");setToggle2(!toggle2)}}>
                        Healthcare
                        </li>
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Manufacturing");setToggle2(!toggle2)}}>
                        Manufacturing
                        </li>
                        <li className="apply-filter-industry" onClick={()=>{setIndustry("Social Good");setToggle2(!toggle2)}}>
                        Social Good
                        </li>
                        </div>
                        </ul>
                       </div>  }
                       <div className="click-container-2"  onClick={() => {setToggle2(!toggle2); setToggle(false);setToggle3(false)}}>
                       <span>Industry</span><div className="symbol">&#9660;</div>
                        </div> 
                        </div>
                    <div className="filter-options-3">
                    {toggle3 && <div className="size-dropdown" >
                    <ul className="dropdown-list-size">
                        <li className="apply-info">
                        SELECT THE SIZE
                        </li>
                        <div className="apply-filter-section-size">
                        <li className="apply-filter-size" onClick={() => {setCompanySize("Small Size");setToggle3(!toggle3);}}>
                        Small Size
                        </li>
                        <li className="apply-filter-size" onClick={() => {setCompanySize("Medium Size");setToggle3(!toggle3);}}>
                        Medium Size
                        </li>
                        <li className="apply-filter-size" onClick={() => {setCompanySize("Large Size");setToggle3(!toggle3);}}>
                        Large Size
                        </li>
                        </div>
                    </ul>
                    </div>}
                    <div className="click-container-3" onClick={() => {setToggle3(!toggle3); setToggle(false);setToggle2(false)}}>
                    <span>Size</span><div className="symbol">&#9660;</div>
                        </div> 
                        </div>
                        </div>
                </div>
                {((companyLocation.length !== 0) || (industry.length !== 0) || (companySize.length !== 0) ) ? (<div className="active-filter-wrapper">
                <div className="active-filter-header">
                <div className="active-title-buttons-section">
                <h3 className="active-filter-title">Currently Applied Filters</h3>
                {(companyLocation.length !== 0) ?<button className="active-filter-button-location" onClick={()=>setCompanyLocation("")}>{companyLocation} <span>x</span></button> : null}
                {(industry.length !== 0) ?<button className="active-filter-button-industry" onClick={()=>setIndustry("")}>{industry} <span>x</span></button> : null}
                {(companySize.length !== 0) ?<button className="active-filter-button-size" onClick={()=>setCompanySize("")}>{companySize} <span>x</span></button>: null}
                </div>
                <div className="clear-filters" onClick={()=>{setCompanyLocation("");setIndustry("");setCompanySize("")}}>
                    <p className="active-filter-text">X Clear &amp; Reset</p>
                    </div>
                </div>
            </div>) : null}
            </div>
          
            <CompanyList/>

        </section>
    )
};

export default CompanySearch;