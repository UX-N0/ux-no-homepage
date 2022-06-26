import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Some of the features of the app</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src="images/img-9.jpg"
            text="If you encounter a UXO you can report it with confidence"
            label="Reporting"
            path='/info'
            />
            <CardItem 
            src="images/img-2.jpg"
            text="Resources that help in what to do, how to report and who to contact in case of finding a UXO"
            label="Resources"
            path='/info'
            />
            <CardItem 
            src="images/img-8.jpg"
            text="Depending on the locaiton you can see alerts, common UXO's in the area, and contact info"
            label="Location"
            path='/info'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;