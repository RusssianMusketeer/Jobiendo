import React from 'react';
import './job-list.styles.scss';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';


const JobList = () => {
    const location:any = useLocation();
    return(
   
   <div >
        {location.state.data.map((item:any)=>(
        <div className="job-container">
        <div>
        <h1  className="job-title" key={item[0]}>{item[0]}</h1>
        <p className="job-location"> At {item[1]} - {item[2]} </p>
        <p className="job-posting-date"> Posted on {item[3]} </p>
        </div>
        <div className="button-job-container">
        <Link to={{
            pathname: "./job-detail",
            state: item[5]

        }}>
        <button className="view-job-button"> VIEW JOB</button>
        </Link>
        <a className="apply-muse" href={item[4]}>APPLY ON MUSE SITE</a>
        </div>

        </div>
      ))}
    
        
        
    </div>
    )

        };

export default JobList;