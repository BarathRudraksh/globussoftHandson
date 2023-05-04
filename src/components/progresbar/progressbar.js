import React from "react";
import './progressbar.css';

function Progress(props){
    const{title,value,percent,bar} = props;
    return(
        <div className="progressbar">
            <div className="progressinfo"> 
                <div className="title">{title}</div>
                <div className="percent">{percent}</div>
            </div>
            <div>
             <progress value={`${value}`} max="100" className={`${bar}`}> {percent} </progress>
            </div>
        </div>
    )
}

export default Progress;