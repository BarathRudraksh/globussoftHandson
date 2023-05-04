import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHouse,faChartSimple,faUserGroup,faCalendarDay,faDiagramProject,faCircleQuestion,faCircleUser,
    faGear,faBell,faThumbsUp,faHeart,faFaceSmile,faCaretUp,faCaretDown,faCaretRight,faChevronRight} from '@fortawesome/free-solid-svg-icons'


library.add(faHouse,faChartSimple,faUserGroup,faCalendarDay,faDiagramProject,faCircleQuestion,faCircleUser,
    faGear,faBell,faThumbsUp,faHeart,faFaceSmile,faCaretUp,faCaretDown,faCaretRight,faChevronRight);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
