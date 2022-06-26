import './HeroSection.css'
import '../App.css'
import React from 'react';
import { Button } from './Button'

function HeroSection() {
  return(
    <div className='hero-container'>
      <video src='/videos/society.mp4' autoPlay loop muted />
      <h1>Community Safety</h1>
      <h2>is our priority</h2>
      <p>What are you waiting for</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>Get Started</Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>Watch trailer
        <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
};

export default HeroSection