import React from 'react';
import ReactPlayer from 'react-player';
import { AiTwotoneLike } from "react-icons/ai";
import './Trailer.css';

function Trailer() {
    return (
        <div className="trailer-container">
            <div className="video-container">
            <ReactPlayer  width='100%' height='100%'controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </div>
            <div className="video-info">
                <h3>Venom</h3>
                <h5>ENGLISH</h5>
                <div>
                    <button>Action</button>
                    <button>SCI-FI</button>
                </div>
                <div className="imgFoot">
                       <span><AiTwotoneLike />100%</span>
                       <span>{`Votes`}</span>
                </div>
                <p>lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum </p>
            </div>
        </div>
    )
}
export default Trailer
