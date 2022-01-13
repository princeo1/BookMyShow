import React ,{useState} from 'react';
import ButtonNormal from '../Buttons/ButtonNormal';
import ButtonDropdown from '../Buttons/ButtonDropdown';
import { AiOutlineClose } from "react-icons/ai";
import './Navbar.css';
const Navbar =({finalFilter})=>{

  let [appliedFilters,setAppliedFilters] = useState([]);

  const addFilter = (childData) =>{                                  
    const newFiltered = [...appliedFilters];
    newFiltered.push(childData);
    setAppliedFilters(newFiltered);
    finalFilter(newFiltered);
    // console.log(newFiltered);
  }

  const deleteFilter=(val)=>{
    const newFiltered = appliedFilters.filter((curr)=>curr!==val);
    setAppliedFilters(newFiltered);
    finalFilter(newFiltered);
    // console.log(newFiltered);
  }

  let popular = ['Popular','fresh'];
  let allLanguage =['Hindi','English','Marathi','Tamil','Malayalam','Kannada','Bhojpuri','Punjabi','Gujrati','Telegu','Bengali','Assamese','Rajasthani','French','Ladakh','Swedish','Arabic'];
  let allGeneres = ['Action','Adventure','Animation','Biography','Classic','Comedy','Crime','Drama','Family','Fantast','History','Horror','Musical','Mystery','Period','Psychological','Roamnce','Sci-fi','Social','Sports','suspense','Thriller','War'];
    
  return(
        <div>
        <nav className="main-nav">
        <div className="main-nav-left">
          <h5 style={{fontFamily: 'Brush Script MT',color:'white',fontSize:'20px',margin:'5px'}}>Movie Trailer</h5>
          <ButtonNormal text='Coming Soon' btnColor='#49BA8E'/>
          <ButtonNormal text='Now Showing' btnColor='rgb(51,51,51)'/>
        </div>
        <div className="main-nav-right">
          <ButtonDropdown text='Popular all'  arr={popular} addFilter={addFilter}/>
          <ButtonDropdown text='English'  arr={allLanguage} addFilter={addFilter}/>
          <ButtonDropdown text='All Genres' arr={allGeneres} addFilter={addFilter}/>
        </div>
        <button class="btn-cross"><AiOutlineClose/></button>
      </nav>
      <div class="filterApplied">
      <h5 style={{color:'grey',fontSize:'10px',margin:'5px'}}>Applied Filters are here:</h5>
      {
        appliedFilters.map((val)=>{
        return(<div className="filtered-list-each-div">{`${val}`}<button onClick={()=>deleteFilter(val)} className="btn-cross-filter"><AiOutlineClose/></button></div>)
        })
      }
      </div>
      </div>
    );
}

export default Navbar;