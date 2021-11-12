import React from 'react';
import './company-list.styles.scss';
import HomePageContext from '../../context/HomePageContext';
import { useContext} from 'react';
import SkeletonCompany from '../../skeletons/SkeletonCompany';
import { Link } from 'react-router-dom';




const CompanyList= ()=> {

    const {companyJob,companyPage,setCompanyPage,companyResults,loading} =useContext(HomePageContext);


    return(
        <section >
        
            {companyResults.length !==0 ? <div className="company-list">
            {(loading )?([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((n) => <SkeletonCompany key={n}/>)) :
            (
                companyResults.map((item:any,index:any)=>(

                <Link className="company-card-link" key={index} to={{pathname: "./company-detail",
                state: {
                    company_logo:item.link,
                    image_company:item.image_2,
                    title_company:item.company_name,
                    compagny_industry:item.industry,
                    company_location:item.company_location,
                    company_size:item.company_size,
                    company_description:item.description,
                    company_job_info:companyJob[index]
                     }
                }}>
                <div className="company-card">
                <div className="company-image">
                <img className="company-image" alt="company" loading="lazy" src={item.image_2}></img>
                </div>
                <div className="company-info">
                    <h1 className="company-title">{item.company_name}</h1>
                    <div className="company-data">
                        <p>{item.industry} /</p>
                        <p> {item.company_size} /</p>
                        <p> {item.company_location}</p>
                    </div>
                </div>

            </div>
            </Link>
             ))) }
        </div> :
        <div className="error-section" style={{margin:"0 auto", marginTop:"3rem"}}>
        <h1>No results have been found !</h1>
        </div>
        }
        
        {companyResults.length !==0 ?<div className="arrow-section-company">
        <button  className="arrow left" onClick={()=>setCompanyPage( (companyPage===1) ? companyPage :companyPage-1)}></button>
        <p className="page-number">Page {companyPage}</p>
        <button  className="arrow right" onClick={()=>setCompanyPage(companyPage+1)}></button>
        
        </div>: null}
        </section>
    )
};

export default CompanyList;