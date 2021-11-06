import React from 'react';
import { useContext,useState} from 'react';
import HomePageContext from '../../context/HomePageContext';
import './search-params-levels.styles.scss';

const SearchParamsLevels =()=> {
    const {level,setLevel} =useContext(HomePageContext);
    const [isChecked, setIsChecked] = useState(false);
    const levels =[ "Entry Level","Senior Level",
    "Internship","Mid Level","management"
    ];

    const handleOnChange = (e:any) => {
        for (let i = 0; i < levels.length; i++){
            if (e===level){
                 setIsChecked(!isChecked) 
                 return (setLevel(""))
            }  else if (e===levels[i]){
                setIsChecked(isChecked)
            
                return setLevel(e)
            } 
            
            (isChecked===true ? setLevel(""): setLevel(e))
            
        }
        
        
      };

    return (
        <div className="params-level">
            <div>
        <h1 className="Levels-title">Experience</h1>
        </div>
        <div className="checkbox-levels">
        <input type="checkbox" id="Entry Level" name="source" value="Entry Level" checked={(level ==="Entry Level") ? true : false}
         onChange={()=>handleOnChange("Entry Level")}/>
        <label htmlFor="Entry Level">Entry Level</label>
         </div>

         <div className="checkbox-levels">
        <input type="checkbox" id="Mid Level" name="source" value="Mid Level" checked={(level ==="Mid Level") ? true : false}
         onChange={()=>handleOnChange("Mid Level")}/>
        <label htmlFor="Mid Level">Mid Level</label>
         </div>

         <div className="checkbox-levels">
        <input type="checkbox" id="Senior Level" name="source" value="Senior Level" checked={(level ==="Senior Level") ? true : false}
         onChange={()=>handleOnChange("Senior Level")}/>
        <label htmlFor="Senior Level">Senior Level</label>
         </div>

         <div className="checkbox-levels">
        <input type="checkbox" id="Internship" name="source" value="Internship" checked={(level ==="Internship") ? true : false}
         onChange={()=>handleOnChange("Internship")}/>
        <label htmlFor="Internship">Internship</label>
         </div>

         <div className="checkbox-levels">
        <input type="checkbox" id="management" name="source" value="management" checked={(level ==="management") ? true : false}
         onChange={()=>handleOnChange("management")}/>
        <label htmlFor="management">management</label>
         </div>


        </div>
    )

}

export default SearchParamsLevels;