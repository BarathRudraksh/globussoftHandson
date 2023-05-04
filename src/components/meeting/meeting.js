import React from "react";
import'./meeting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Meeting(props){
    const{name,time,avatar} = props;
    return(
        <div className='meetingtile'>
            <div>
                <img src={`${avatar} avatar`}  alt='avatar' className='avatar'></img>
            </div>
            <div className="info">
                <div className="nameDiv">
                    <p className='name'>{name}</p>
                </div>
                <div>
                    <p className='time'>{time}</p>
                </div>
            </div>
            <div className="caret">
                <FontAwesomeIcon icon ={faChevronRight}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Meeting;