import React from 'react';
import './NavBar.scss'

 export default function NavBar() {


  return(
    <div className="navbar">
        <img alt="UX-NO logo" className="logo-navbar" src="../UX-NO.png"/>
        <a>
          <i className="home huge icon"/>
        </a>
        <a>
          <i className="info huge icon" />
        </a>
        <a>
          <i className="mail huge icon" />
        </a>
        <a>
          Donate
        </a>
    </div>
  )
 }