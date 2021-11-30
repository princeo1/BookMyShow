import React from 'react';
import './ButtonDropdown.css';
import { AiOutlineClose } from "react-icons/ai";

const ButtonDropdown = ({text,btnColor}) =>{
    return(
        <div>
            <button class="btn-dropdown"><AiOutlineClose/></button>
        </div>
    );
}

export default ButtonDropdown;