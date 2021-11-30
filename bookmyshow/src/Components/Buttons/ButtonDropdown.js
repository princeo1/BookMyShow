import React from 'react';
import './ButtonDropdown.css';
import { BiChevronDown } from "react-icons/bi";

const ButtonDropdown = ({text,arr,addFilter}) =>{      // onclick of this button filter is added
    return(
        <div className="dropdown">
            <button className="btn-dropdown">{`${text}`}<BiChevronDown style={{marginLeft:"auto"}}/></button>
            <div className="dropdown-content">
                {
                    arr.map((val)=>{
                        return (<a onClick={()=>addFilter(val)}href="#">{`${val}`}</a>)
                    })
                }
            </div>
        </div>
    );
}
export default ButtonDropdown;