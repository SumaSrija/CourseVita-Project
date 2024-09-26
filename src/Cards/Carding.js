import React from 'react';
import './card.css';
import CardItem from './CardItem';


function Carding() {
  return (
    
    <div className='cards'>
      <h1>Explore Vendors</h1>
      <div className='cards__container '>
  <div className='cards__wrapper'>
<ul className='cards__items'>
            <CardItem
              src='https://images.pexels.com/photos/3649344/pexels-photo-3649344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              text='A thing that you see in my pictures is that I was not afraid to fall in love with these people.'
              label='Photographers'
              
            />
            <CardItem
              src='https://www.lakme-academy.com/blog/wp-content/uploads/2019/11/n-makeup_artist_2.jpg'
              text='I believe that all women are pretty without makeup, but the right makeup can be pretty powerful'
              label='Makeup-Artist'
              
            />
            <CardItem
              src='https://www.kovaiweddingdecorator.com/wp-content/uploads/2020/09/slide1-1280x560.jpg'
              text='Some people look for a beautiful place,but we make a place beautiful.'
              label='Decorators'
              
            />
            <CardItem
              src='http://www.hamaraevent.com/uploads/blog/0076248001475654338.jpg'
              text='Mehindi is the first love of every'
              label='Mehindi'
              
            />
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Carding;