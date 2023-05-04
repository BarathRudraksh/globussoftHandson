import React from 'react'
import './sidemenu.css';
import Options from '../options/option';
import image from '../../assets/icon1.png';

function Sidemenu() {
  return (
    <div className='sidemenu'>
      <div  className='logo-image'><img src = {image} alt='logo'></img></div>
      <Options icon = 'fa-house' title = 'Home'></Options>
      <Options icon = 'fa-chart-simple' title = 'Dashboard'></Options>
      <Options icon = 'fa-user-group' title = 'Users'></Options>
      <Options icon = 'fa-calendar-day' title = 'Calendar'></Options>
      <Options icon = 'fa-diagram-project' title = 'Projects'></Options>
      <Options icon = 'fa-circle-question' title = 'Help'></Options>
      <div className='side-footer'>
        <Options icon = 'fa-circle-user' title = 'John Smith'></Options>
        <Options icon = 'fa-gear' title = 'Settings'></Options>
      </div>
    </div>
  )
}

export default Sidemenu
