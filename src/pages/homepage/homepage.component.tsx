import React,{useState,useEffect} from 'react';
import './homepage.styles.scss';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { ReactComponent as SearchIcon} from '../../assets/search-icon.svg';
import LordIcon from '../../components/lottie/LordIcon';
import DocumentIcon from '../../components/lottie/DocumentIcon';
import ConfettiIcon from '../../components/lottie/ConffetiIcon';

const HomePage =() => {
  
    
    const [search, setSearch] =useState("");
    const [results, setResults] =useState([]);
    const [location, setLocation] =useState("");
    const [hoover1, setHoover1]=useState("");
    const [hoover2, setHoover2]=useState("");
    const [hoover3, setHoover3]=useState("");
    const history = useHistory();
    
   
    useEffect( ()=>{
        async function getJobView(){
          try {
          const jobResponse = await Axios.get(`https://www.themuse.com/api/public/jobs?category=${search}&location=${location}&page=1`);
          setResults(
            jobResponse.data.results.map((item:any) =>{
              return (
                [
                  item.name,
                  item.company.name,
                  item.locations[0].name,
                  item.publication_date.slice(0, 10),
                  item.refs.landing_page,
                  item.contents
                ]
              )
            })
          )
          
          
        } catch (error) {
          console.log(error)
        }
      }
          if (search||location !== ''){
            getJobView();
          }
  
      } ,[search,location]);

  
      return(
      <section className="homepage">
       
        <div className="navbar">
        <h1 className="logo"><span className="jobb">Job</span><span className="iando">iando</span></h1>
        </div>
       
      <div className="homepage-form">
      <div className="title-container">
        <h1 className="title-homepage">Find the most exciting jobs </h1>
        <h3 className="text-homepage">Search for jobs at companies whose people, perks, and values align with your unique professional needs </h3>
        </div>
        
    <form
       onSubmit={(e:React.ChangeEvent<any>) => {
        e.preventDefault();
        history.push({
          pathname: '/search',
          state: {
              data: results,
          }
        })
       
         }}
      >
      <SearchIcon className="search-icon"/>
      <input 
      className ="search-input"
      type={search}
      value={search}
      placeholder={"Find a carrer in ..."}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setSearch(e.target.value)}
      list="categories"
      />
       <datalist id="categories">
       <option value="Marketing"/>
       <option value="Sales"/>
       <option value="Retail"/>
       <option value="Project Management"/>
       <option value="Software Engineer"/>
       <option value="Education"/>
       <option value="IT"/>
       </datalist>

       <input 
       className="search-location"
      type={search}
      value={location}
      placeholder={"Location"}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setLocation(e.target.value)}
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
       <button  className="search-submit-button" type={'submit'} onClick={()=>{
    history.push({
      pathname: '/search',
      state: {
          data: results,
      }
    })
   
      }
    }>
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