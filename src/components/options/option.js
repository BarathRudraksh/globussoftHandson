import React from "react";
import './option.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Options(props) {
    const {icon, title} = props;
    return(
        <div className="option-main-div"> 
            <FontAwesomeIcon icon = {icon}></FontAwesomeIcon>
            <div className="option-content">
                {title}
            </div>
        </div>
       
    )

}

export default Options;