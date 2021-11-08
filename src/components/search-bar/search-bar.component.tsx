import React from 'react';
import { useContext} from 'react';
import HomePageContext from '../../context/HomePageContext';
import { ReactComponent as SearchIcon} from '../../assets/search-icon.svg';
import './search-bar.styles.scss';
import { useState } from 'react';

const SearchBar =() => {
    const {search,location,setLocation,setSearch} =useContext(HomePageContext);
    const [searchHolder, setSearchHolder]=useState("");
    const [locationHolder, setLocationHolder]=useState("");

    return(
        <div style={{margin:"0 auto",width:"93%"}}>
            <form className="search-bar"
       onSubmit={(e:React.ChangeEvent<any>) => {
        e.preventDefault();
        setSearch(searchHolder);
        setLocation(locationHolder);
         }}
      >
      <SearchIcon className="search-icon"/>
      <input 
      className ="search-input"
      type="text"
      value={searchHolder}
      placeholder={"Find a carrer in ..."}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setSearchHolder(e.target.value)}
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
    )
}

export default SearchBar;