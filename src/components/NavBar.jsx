import React from 'react';
import './NavBar.scss'

 export default function NavBar() {


  return(
    <div className="navbar">
        <img alt="UX-NO logo" className="logo-navbar" src="../UX_NO.png"/>
        <i class="fa-solid fa-house"></i>
        <i class="fa-solid fa-circle-info"></i>
        <i class="fa-solid fa-envelope"></i>
    </div>
  )
 }