import React from 'react';
import './ButtonNormal.css';

const ButtonNormal = ({text,btnColor})=>{                       // This button accepts text and colour of button and displays the button
    return(
        <div>
            <button style={{backgroundColor:`${btnColor}`}}className="btn-normal ">{`${text}`}</button>
        </div>
    )
}

export default ButtonNormal;
