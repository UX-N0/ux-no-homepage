import './NavBar.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

 export default function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleCLick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)
  return(
  <>
    <div className='navbar'>
      <div className="navbar-container">
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
          <img alt="UX-NO logo" className="fa-typo3" src="./images/logo.svg"/>
        </Link>
        <div className='menu-icon' onClick={handleCLick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/info' className='nav-links' onClick={closeMobileMenu}>
              Info
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </div>
  </>
  )
 }