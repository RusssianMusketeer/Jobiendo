import React from 'react';
import { useContext,useState} from 'react';
import HomePageContext from '../../context/HomePageContext';
import './search-params-categories.styles.scss';



const SearchParamsCategories =()=> {
    const {search,setSearch} =useContext(HomePageContext);
    const [isChecked, setIsChecked] = useState(false);
    const categories =[
        "Accounting","Data Science","Design","Software Engineer","Editor","Account Management/Customer Success","Education",
        "HR","IT","Law","Marketing","Mechanic","Mental Health","Nurses","Office Administration","Product","Project Management",
        "Public Relations","Recruiting","Retail","Sales","UX","Writer"
    ];

    const handleOnChange = (e:any) => {
        for (let i = 0; i < categories.length; i++){
            if (e===search){
                 setIsChecked(!isChecked) 
                 return (setSearch(""))
            }  else if (e===categories[i]){
                setIsChecked(isChecked)          
                return setSearch(e)
            } 

            (isChecked===true ? setSearch(""): setSearch(e))
            
        }
        
      };


return (
    
    <div className="search-params">
        <div>
    <h1 className="job-title">Job Category</h1>
    </div>
    <div className="grid-params">
    <div>
    <div className="checkbox">
    <input type="checkbox" id="Accounting" name="source" value="Accounting" checked={(search ==="Accounting") ? true : false}
        onChange={()=>handleOnChange("Accounting")}/>
    <label htmlFor="Accounting">Accounting</label>
  </div>


  <div className="checkbox">
    <input type="checkbox" id="Data Science" name="source" value="Data Science" checked={(search ==="Data Science") ? true : false}
        onChange={()=>handleOnChange("Data Science")}/>
    <label htmlFor="Data Science">Data Science</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Design" name="source" value="Design" checked={(search ==="Design") ? true : false}
        onChange={()=>handleOnChange("Design")}/>
    <label htmlFor="Design">Design</label>
  </div>
    
    <div className="checkbox">
    <input type="checkbox" id="Software Engineer" name="source" value="Software Engineer" checked={(search ==="Software Engineer") ? true : false}
        onChange={()=>handleOnChange("Software Engineer")}/>
    <label htmlFor="Software Engineer">Software Engineer</label>
    </div>

  <div className="checkbox">
    <input type="checkbox" id="Editor" name="source" value="Editor" checked={(search ==="Editor") ? true : false}
        onChange={()=>handleOnChange("Editor")}/>
    <label htmlFor="Editor">Editor</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Account Management/Customer Success" name="source" value="Account Management/Customer Success" checked={(search ==="Account Management/Customer Success") ? true : false}
        onChange={()=>handleOnChange("Account Management/Customer Success")}/>
    <label htmlFor="Account Management/Customer Success">Account Management</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Education" name="source" value="Education" checked={(search ==="Education") ? true : false}
        onChange={()=>handleOnChange("Education")}/>
    <label htmlFor="Education">Education</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="HR" name="source" value="HR" checked={(search ==="HR") ? true : false}
        onChange={()=>handleOnChange("HR")}/>
    <label htmlFor="HR">HR</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="IT" name="source" value="IT" checked={(search ==="IT") ? true : false}
        onChange={()=>handleOnChange("IT")}/>
    <label htmlFor="IT">IT</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Law" name="source" value="Law" checked={(search ==="Law") ? true : false}
        onChange={()=>handleOnChange("Law")}/>
    <label htmlFor="Law">Law</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Marketing" name="source" value="Marketing" checked={(search ==="Marketing") ? true : false}
        onChange={()=>handleOnChange("Marketing")}/>
    <label htmlFor="Marketing">Marketing</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Mechanic" name="source" value="Mechanic" checked={(search ==="Mechanic") ? true : false}
        onChange={()=>handleOnChange("Mechanic")}/>
    <label htmlFor="Mechanic">Mechanic</label>
  </div>
  </div>
  <div>
  <div className="checkbox">
    <input type="checkbox" id="Mental Health" name="source" value="Mental Health" checked={(search ==="Mental Health") ? true : false}
        onChange={()=>handleOnChange("Mental Health")}/>
    <label htmlFor="Mental Health">Mental Health</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Nurses" name="source" value="Nurses" checked={(search ==="Nurses") ? true : false}
        onChange={()=>handleOnChange("Nurses")}/>
    <label htmlFor="Nurses">Nurses</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Office Administration" name="source" value="Office Administration" checked={(search ==="Office Administration") ? true : false}
        onChange={()=>handleOnChange("Office Administration")}/>
    <label htmlFor="Office Administration">Office Administration</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Product" name="source" value="Product" checked={(search ==="Product") ? true : false}
        onChange={()=>handleOnChange("Product")}/>
    <label htmlFor="Product">Product</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Project Management" name="source" value="Project Management" checked={(search ==="Project Management") ? true : false}
        onChange={()=>handleOnChange("Project Management")}/>
    <label htmlFor="Project Management">Project Management</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Public Relations" name="source" value="Public Relations" checked={(search ==="Public Relations") ? true : false}
        onChange={()=>handleOnChange("Public Relations")}/>
    <label htmlFor="Public Relations">Public Relations</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Recruiting" name="source" value="Recruiting" checked={(search ==="Recruiting") ? true : false}
        onChange={()=>handleOnChange("Recruiting")}/>
    <label htmlFor="Recruiting">Recruiting</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Retail" name="source" value="Retail" checked={(search ==="Retail") ? true : false}
        onChange={()=>handleOnChange("Retail")}/>
    <label htmlFor="Retail">Retail</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Sales" name="source" value="Sales" checked={(search ==="Sales") ? true : false}
        onChange={()=>handleOnChange("Sales")}/>
    <label htmlFor="Sales">Sales</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="UX" name="source" value="UX" checked={(search ==="UX") ? true : false}
        onChange={()=>handleOnChange("UX")}/>
    <label htmlFor="UX">UX</label>
  </div>

  <div className="checkbox">
    <input type="checkbox" id="Writer" name="source" value="Writer" checked={(search ==="Writer") ? true : false}
        onChange={()=>handleOnChange("Writer")}/>
    <label htmlFor="Writer">Writer</label>
  </div>
  </div>
  </div>

  

    </div>
)
    }

export default SearchParamsCategories;