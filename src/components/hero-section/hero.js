import React from 'react';
import './hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import img from '../../assets/present.png';
import starImg from '../../assets/star.png';
import LoveLike from '../loveLike/loveLike';
import image from '../../assets/graph.png';
import dashImg from '../../assets/dash.PNG';
import Progress from '../progresbar/progressbar';
import Meeting from '../meeting/meeting';
import pic1 from '../../assets/4.jpg';
import pic2 from '../../assets/2.jpg';
import pic3 from '../../assets/3.jpg';

function Hero(){
    return(
        <div className='heroMain'>
            <div className='topRightBell'>
                <FontAwesomeIcon icon ={faBell}></FontAwesomeIcon>
            </div>
        <div className='heroDiv'>
            <div className='hero1'>
            <div className='msgDiv'>
                <p className='heading'>Hi John,</p>
                <p className='subHeading'>Welcome back!</p>
                <p className = 'para'>This page is designed to give some important inormation about the application. let's make something together!</p>
                <img className='pimg' src={img} alt='Presentation Animation'></img>
            </div>
            <div className='bluBox'>
                <div className='star'><img className='starImg' src={starImg} alt='StarLogo'></img></div>
                <div className='star'><h1>Congratulations John</h1></div>
                <div className='bluBoxMsg'><p>You have completed 75% of your profile. Your current progress is great.</p></div>
                <div className='whiteDiv'><div className='whiteBox'><p className='viewProf'>View Profile</p></div></div>
            </div>
            </div>
            <div className='hero2'>
                <div className='love-tiles-div'>
                    <LoveLike icon = 'fa-thumbs-up' count = '26,789' title = 'Likes' caret = 'fa-caret-up'></LoveLike>
                    <LoveLike icon = 'fa-heart' count = '26,789' title = 'Love' caret = 'fa-caret-right'></LoveLike>
                    <LoveLike icon = 'fa-face-smile' count = '26,789' title = 'Smiles' caret = 'fa-caret-down'></LoveLike>
                </div>
                <div className='views'>
                    <p className='viu'>Views</p>
                    <p className='number'>6,967,431</p>
                    <img src={image} alt='graph' className='graphimg'></img>
                    <div className='viewDash'>
                        <div className='dashIconRound'>
                            <img src={dashImg} alt='dash' className='dashImg'></img>
                        </div>
                        <div>
                            <p className='dashText'>View Dashboard</p>
                        </div>
                        <div className='chevron'>
                            <FontAwesomeIcon icon ={faChevronRight}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hero3'>
                <div className='target'>
                    <p className='targetword'>Targets</p>
                    <Progress title='Views' value = '75' percent = '75%' bar='bar1'></Progress>
                    <Progress title='Folowers' value = '50' percent = '50%' bar='bar2'></Progress>
                    <Progress title='Income' value = '25' percent = '25%' bar='bar3'></Progress>
                </div>
                <div className='meeting'>
                    <p className='meetingword'>Meetings</p>
                    <Meeting name ='Emmy Anderson' time='8:00 - 10:00' avatar={pic1}></Meeting>
                    <Meeting name ='Joy McGlynn' time='8:00 - 10:00' avatar={pic2}></Meeting>
                    <Meeting name ='Mara Dach' time='8:00 - 10:00' avatar={pic3}></Meeting>
                    <div className='plus'>
                        <FontAwesomeIcon icon ={faPlus}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero