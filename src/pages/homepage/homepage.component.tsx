import React,{useState} from 'react';
import './homepage.styles.scss';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { ReactComponent as SearchIcon} from '../../assets/search-icon.svg';
import LordIcon from '../../components/lottie/LordIcon';
import DocumentIcon from '../../components/lottie/DocumentIcon';
import ConfettiIcon from '../../components/lottie/ConffetiIcon';
import { useContext } from 'react';
import HomePageContext from '../../context/HomePageContext';
import { ReactComponent as NameIcon} from '../../assets/jobiendo_logo_3.svg';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Hamburger from 'hamburger-react';
import HamburgerMenu from '../../components/hamburger-menu/hamburger-menu.component';

const HomePage =() => {
   
    const [hoover1, setHoover1]=useState("");
    const [hoover2, setHoover2]=useState("");
    const [hoover3, setHoover3]=useState("");
    const [searchHolder, setSearchHolder]=useState("");
    const [locationHolder, setLocationHolder]=useState("");
    const history = useHistory();
    const {setSearch,setLocation} =useContext(HomePageContext);
    const path = useLocation().pathname;
    const [isOpen, setOpen] = useState(false);
    
    
    
   
      return(
      <section className="homepage">
        <div className="image-wraper"/>
        <NavLink className="jobiando-mobil-logo" to="/" style={{height:"fit-content", width:"140px",position:"absolute",left:"3rem",top:"3.95rem",zIndex:2}}>
        <NameIcon className="logo-search-list"/>
        </NavLink>
        <HamburgerMenu info={isOpen}/>
        <Hamburger toggled={isOpen} toggle={setOpen} size={26}/>
        <div className='header-logo-choice-container'>
             <NavLink className ='choice' to='/' style={{background: (path=== "/") ? 'orange' : "white"}}> HOME </NavLink>
             <NavLink className ='choice' to='/search'> JOBS </NavLink>
             <NavLink className ='choice' to='/company'> COMPANIES </NavLink>
          </div>
      <div className="homepage-form">
      <div className="title-container">
        <h1 className="title-homepage">Find the most exciting jobs </h1>
        <h3 className="text-homepage">Search for jobs at companies whose people, perks, and values align with your unique professional needs </h3>
        </div>
        
    <form
       onSubmit={(e:React.ChangeEvent<any>) => {
        e.preventDefault();
        e.stopPropagation()
        setSearch(searchHolder);
        setLocation(locationHolder);
        history.push({
          pathname: '/search',
        })
       
         }}
      >
      <SearchIcon className="search-icon"/>
      <input 
      className ="search-input"
      type="text"
      value={searchHolder}
      placeholder={"Find a career in ..."}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setSearchHolder(e.target.value)}
      list="categories"
      />
       <datalist id="categories">
       <option value="Marketing"/>
       <option value="Sales"/>
       <option value="Retail"/>
       <option  className="datalist-value" value="Project Management"/>
       <option value="Software Engineer"/>
       <option value="Education"/>
       <option className="datalist-value" value="IT"/>
       </datalist>

       <input 
       className="search-location"
      type="text"
      value={locationHolder}
      placeholder={"Location"}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setLocationHolder(e.target.value)}
      list="Locations"
      />
       <datalist id="Locations">
       <option value="Flexible/Remote"/>
       <option value="New York, NY"/>
       <option value="San Francisco, CA"/>
       <option value="Los Angeles, CA"/>
       <option value="Boston, MA"/>
       <option value="Washington, DC"/>
       <option value="Austin, TX"/>
       <option value="Chicago, IL"/>
       </datalist>
       <button  className="search-submit-button" type="submit" >
          See job</button>
      </form>
    
          </div>

          <div className="jobiando-usage">
          
          <h1 className="title-usage">The steps needed to find the jobs that suits your needs </h1>
          <div className="icon-texts" > 
          <div className="block" onMouseEnter={()=>setHoover1("loop")} onMouseLeave={()=>setHoover1("")}>
          <LordIcon  hoover={hoover1}/>
          <h3 className="icon-option-title">Search for your job needs</h3>
          <p className="icon-option-text">
            Enter the industry or the location for the job. Over half a million of available jobs powered by the Muse API.
          </p>
          </div>
          <div className="block" onMouseEnter={()=>setHoover2("loop")} onMouseLeave={()=>setHoover2("")}>
            <DocumentIcon hoover={hoover2}/>
            <h3 className="icon-option-title">Choose the option that fits you</h3>
            <p className="icon-option-text">Filter your search by different categories such as experience or remote job location. All the information needed for each job option is here.</p>
          </div>
          <div className="block" onMouseEnter={()=>setHoover3("loop")} onMouseLeave={()=>setHoover3("")}>
            <ConfettiIcon hoover={hoover3}/>
            <h3 className="icon-option-title">Send your application via the link</h3>
            <p className="icon-option-text">Apply by clicking the "Apply on muse site" button and then on the "Apply on compagny site" button, fill out the form and your done !</p>
          </div>
          </div>

          </div>
      
    </section>
      )
};

export default withRouter(HomePage);