
import './job-list.styles.scss';

import { Link } from 'react-router-dom';
import { useContext,useState,useEffect} from 'react';
import HomePageContext from '../../context/HomePageContext';
import SkeletonListing from '../../skeletons/SkeletonListing';
import { ReactComponent as MapIcon} from '../../assets/map.svg';


const JobList = (props:any) => {
    const {date,page,setPage,results,logo,loading,companyJobListing} =useContext(HomePageContext);
  
    const [month,setMonth]=useState([]);
    const [dayYear, setDayYear]=useState([]);
    const [list, setList]=useState([null]);

    useEffect( ()=>{
        setList(results.map((element:any)=>{
            return (element[9])
            }))

         setDayYear(date.map((time:any)=>{
             return ([
            time.split('-')[0],
            time.split('-')[2],
             ])
            
        }))
        
        setMonth(date.map((time:any)=>{
        let month;
        
        switch(time.split('-')[1]) {
            case "01":
                 month= "January";
                break;
            
            case "02":
                 month="February";
                break;
            
            case "03":
                 month="March";
                break;
            
            case "04":
                 month="April";
                break;
            
            case "05":
                 month="May";
                break;
            
            case "06":
                 month="June";
                break;
                      
            case "07":
                 month="July";
                break;
             
            case "08":
                 month="August";
                break;
                   
            case "09":
                 month="September";
                break;
        
            case "10":
                 month="October";
                break;
                            
            case "11":
                 month="November";
                break;
             
            case "12":
                 month="December";
                break;             
        }
        return{
            month
        } 
    
    }))
   
    },[results,date])
     
         results &&results.sort((a:any,b:any)=>{
           var dateA:any = new Date(a[3]), dateB:any = new Date(b[3])
           return dateB - dateA 
               })
            
    
        date.sort((a:any,b:any)=>{
           var dateA:any = new Date(a), dateB:any = new Date(b)
           return dateB - dateA
               })
       
       logo &&logo.sort((a:any,b:any)=>{
           
           return list.indexOf(a.index)-list.indexOf(b.index);
           
       })

       companyJobListing && companyJobListing.sort((a:any,b:any)=>{
           
        return list.indexOf(a.index)-list.indexOf(b.index);
        
    })

    return(    
   <div className="job-list-section">
  
        
        {results.length!==0 ? <div>
        
        {(loading || (logo === undefined) || (logo.length=== 0) || (dayYear.length=== 0) || (month.length=== 0) ) ? ([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((n) => <SkeletonListing key={n}/>))
        : (results.map((item:any,index:any)=>(
        <div className="job-container" key={item}style={{marginTop: index===0 ? '0' : '2rem'}}>
           
            <div className="upper-part-listing">
        <div className="title-image">
        <img className="image-logo" alt="company" loading="lazy" src={logo[index].link}></img>
        <div>
        <h1  className="job-title" key={item[0]}>{item[0]}</h1>
        <div className="descriptions">
        <p className="job-location"> {item[1]}</p>
        <div style={{display:"flex",marginTop:"16px",alignSelf:"baseline"}}>
        <MapIcon className="map-icon"/>
        <p className="job-local" style={{marginTop:"0", textAlign:"left"}}> {item[2]}</p>
        </div>
        </div>
        </div>
        </div>
        <div className="button-job-container">
       
        <Link className="view-job-button" to={{
            pathname: "./job-detail",
            state: {
                item:item[5],
                picture:logo[index].link,
                title:item[0],
                compagny:item[1],
                location:item[2],
                muse:item[4],
                image1:logo[index].image_1,
                image2:logo[index].image_2,
                company_info:companyJobListing[index],
                company_industry:logo[index].industry[0].name,
                company_size:logo[index].company_size,
                company_description:logo[index].company_description

            }
             

        }}> VIEW JOB </Link>
        
        
        
        <a className="apply-muse" href={item[4]} target="_blank" rel="noreferrer">APPLY ON MUSE SITE</a>
        
        </div>
        </div>
       
        <div className="lower-part-listing">
            <div className="tag-container">
            <div className="tag" style={{display: item[7] ? 'flex' : 'none'}}>
                {item[7]}
            </div>
            <div className="tag" style={{display: item[8]? 'flex' : 'none'}}>
                {item[8]}
            </div>
            </div>
        <p className="job-posting-date">{dayYear && (dayYear![index][1])} {month && (month![index]["month"])} {dayYear && (dayYear![index][0])}</p>
        </div>
        </div>
        )))}
              
        </div> : 
        <div className="error-section">
            <h1>No results have been found !</h1>
        </div>
        }
     
        {results.length!==0 ?<div className="arrow-section">
        <button  className="arrow left" onClick={()=>setPage( (page===1) ? page :page-1)}></button>
        <p className="page-number">Page {page}</p>
        <button  className="arrow right" onClick={()=>setPage(page+1)}></button>
        
        </div>: null}
        
    </div>
    )

        };

export default JobList;