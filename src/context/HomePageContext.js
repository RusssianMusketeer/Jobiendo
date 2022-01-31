import { createContext,useState,useEffect } from "react";
import Axios from 'axios';

const HomePageContext= createContext();

export const HomePageProvider =({children}) =>{

    const [search, setSearch] =useState("");
    const [results, setResults] =useState([]);
    const [location, setLocation] =useState("");
    const [page,setPage] = useState(1);
    const [companyJobPage, setCompanyJobPage]=useState(0);
    const [companyPage, setCompanyPage]=useState(1);
    const [companyResults, setCompanyResults]=useState([]);
    const [logo,setLogo]=useState();
    const [loading, setLoading] = useState(true);
    const [date,setDate]=useState([]);
    const [level, setLevel]=useState("");
    const [industry, setIndustry]=useState(""); 
    const [companyLocation, setCompanyLocation] =useState("");
    const [companySize, setCompanySize]=useState("");
    const [companyJob, setCompanyJob] =useState([]);
    const [companyJobListing, setCompanyJobListing]= useState([]);
    
   
    
    useEffect( ()=>{
      setLoading(true);
        async function getJobView(){
          
          try {
            const params = {
              search: search,
              location: location,
              level: level,
              industry: industry,
              companyLocation:companyLocation,
              companySize:companySize,
            };
            for (const key of Object.keys(params)) {
              if (params[key] === "") {
                delete params[key];
              }
            }
         
            
          const jobResponse =await Axios.get(`https://www.themuse.com/api/public/jobs?api_key=a42efee3b611d30271a8ac809f508ca8cb661320abd94f566ca5e7026a974cac&`,{ params: { category:params.search,location:params.location,level:params.level,page:page } }); 
          console.log(jobResponse,"heloo")
          setResults(
            jobResponse.data.results.map((item,index) =>{
              return (
                [
                  item.name,
                  item.company.name,
                  item.locations.length !==0 ? item.locations[0].name : false,
                  item.publication_date.slice(0, 10),
                  item.refs.landing_page,
                  item.contents,
                  item.company.id,
                  item.levels.length !==0 ? item.levels[0].name : false ,
                  item.categories.length !== 0 ? item.categories[0].name : false,
                  index
                 
                ]
              )
            })

          )
        
    
          const compagnyArray= jobResponse.data.results.map((logo)=>{
            return(logo.company.id)
          });

          
          const compagnyResponse = await compagnyArray.map((logo)=> Axios.get(`https://www.themuse.com/api/public/companies${`/`+logo}?api_key=a42efee3b611d30271a8ac809f508ca8cb661320abd94f566ca5e7026a974cac`));
          Axios.all(compagnyResponse).then((response)=>{  
                  
            setLogo(response.map((logo,index)=>{
              return({
                  link:logo.data.refs.logo_image,
                  index: index,
                  image_1:logo.data.refs.f1_image,
                  image_2:logo.data.refs.f2_image,
                  mini_image:logo.data.refs.mini_f1_image,
                  company_name:logo.data.name,
                  industry:logo.data.industries,
                  company_location:logo.data.locations[0].name,
                  company_size:logo.data.size.name,
                  company_description:logo.data.description         
              })
            })
          )})

          const companyJobInfo =jobResponse.data.results.map((element)=>{
            return(element.company.name)
          });

          const compagnyJobResponseListing = await companyJobInfo.map((name)=> Axios.get(`https://www.themuse.com/api/public/jobs?api_key=a42efee3b611d30271a8ac809f508ca8cb661320abd94f566ca5e7026a974cac&company=${name}&page=1`));
          Axios.all(compagnyJobResponseListing).then((response)=>{  
                   
            setCompanyJobListing(response.map((logo,number)=>{
              return({
                  results:logo.data.results,
                  index: number,
                       
              })
            })
          )})



          const companyJson =await Axios.get(`https://www.themuse.com/api/public/companies?api_key=a42efee3b611d30271a8ac809f508ca8cb661320abd94f566ca5e7026a974cac&`,{ params: { industry:params.industry,location:params.companyLocation,size:params.companySize,page:companyPage } });
          setCompanyResults(
            companyJson.data.results.slice(0, 18).map((company,index) =>{
              return ({
                
                  link:company.refs.logo_image,
                  index: index,
                  image_1:company.refs.f1_image,
                  image_2:company.refs.f2_image,
                  mini_image:company.refs.mini_f1_image,
                  company_name:company.name,
                  industry:company.industries.length !== 0 ? company.industries[0].name :false,
                  company_location:company.locations.length !== 0 ? company.locations[0].name : null,
                  company_size:company.size.name, 
                  description:company.description
                 
              })
              
            })

          )

          const compagnyJobName= companyJson.data.results.slice(0, 18).map((name)=>{
            return(name.name)
          });

          
          
          const compagnyJobResponse = await compagnyJobName.map((name)=> Axios.get(`https://www.themuse.com/api/public/jobs?api_key=a42efee3b611d30271a8ac809f508ca8cb661320abd94f566ca5e7026a974cac&company=${name}&page=${companyJobPage}`));
          Axios.all(compagnyJobResponse).then((response)=>{  
                    
            setCompanyJob(response.map((logo,number)=>{
              return({
                  results:logo.data.results,
                  index: number,
                       
              })
            })
          )})




          setDate(
            jobResponse.data.results.map((time)=>{
            return( 
            time.publication_date.slice(0, 10)
            )
            })
          )
          
          setPage(
            jobResponse.data.page
          )

           } catch (error) {
          console.log(error)
           }
           
           setLoading(false);
           
      }
      
          if ((search||location||level !== '')||(page >= 1)){
            getJobView();          
          }

      } ,[search,location,page,level,companyPage,industry,companyLocation,companySize,companyJobPage]);
  return(
      <HomePageContext.Provider value ={{
        companyJobListing, setCompanyJobListing,companyJobPage,setCompanyJobPage,setCompanyJob,companyJob,companySize,setCompanySize,companyLocation,setCompanyLocation,companyPage,setCompanyPage,companyResults,industry,setIndustry,date,page,setPage,search,setSearch,results,
        setResults,location,setLocation,logo,setLogo,loading,setDate,level,setLevel
      }}>
          {children}
          </HomePageContext.Provider>
  )  
}

export default HomePageContext;  