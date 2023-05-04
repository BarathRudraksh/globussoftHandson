import React from "react";
import './loveLike.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function LoveLike(props){
    const{icon,count,title,caret} = props
    return(
        <div className="lovelike-div"> 
        <div className={`${title} round`} >
        <FontAwesomeIcon icon = {icon}></FontAwesomeIcon>
        </div>
            <div className="lovelike-content">
                <div className="count">
                    {count}
                </div>
                <div>
                    {title}
                </div>
            </div>
            <div className = {`${caret} caret`}>
                <FontAwesomeIcon icon = {caret}></FontAwesomeIcon>
            </div>
        </div>
       
    )
}

export default LoveLike;