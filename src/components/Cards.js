import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out thes EPIC Destinations</h1>
        <div className='cards__container'>
            <div className="cards__wrapper">
                <ul className="cards__items">
                  <CardItem 
                  src='/images/img-9.jpg'
                  text='Explore the hidden waterfall deep
                  inside the amazon jungle'
                  label='Adventure'
                  path='/'/>
                  <CardItem 
                  src='/images/img-2.jpg'
                  text='Travel through the islands of Bali'
                  label='Luxury'
                  path='/services'/>
                </ul>
                <ul className="cards__items">
                <CardItem 
                  src='/images/img-3.jpg'
                  text='Set Sail in the Atlantic Ocean'
                  label='Mystery'
                  path='/'/>
                  <CardItem 
                  src='/images/img-4.jpg'
                  text='Experience FootBall'
                  label='Adventure'
                  path='/services'/>
                  <CardItem 
                  src='/images/img-8.jpg'
                  text='Ride through the Sahara Desert'
                  label='Adrenaline'
                  path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards