import React from 'react';
import './Card.css';                                                
import { AiTwotoneLike } from "react-icons/ai";

const Card = ({imageLink,rDate,wtsCount}) =>{                           // This component accepts each card's information and returns a card
    const arr = rDate.split(" ");
    const month = arr[0];
    const year = arr[arr.length-1];

    return(
        <div>
            <div className="imgArea"  style={{backgroundImage:`url(${imageLink})`}}>
                <nav className="imgNav">
                    <div className="circle">
                       <span>{`${month}`}</span>
                       <span>{`${year}`}</span>
                    </div>
                </nav>
                <div className="btn-area">
                    <div className="btn-circle">
                        <div className="btn-tri"></div>
                    </div>
                </div>
                <div className="imgFoot">
                       <span><AiTwotoneLike />100%</span>
                       <span>{`${wtsCount}`}</span>
                </div>
            </div>
            <footer style={{width:"180px"}}>{`NoteBook NoteBook NoteBook NoteBook NoteBook`}</footer>
        </div>
    )
}

export default Card;