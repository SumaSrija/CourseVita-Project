import React from 'react';
import './card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            
          </ul>
          <ul className='cards__items'>
           
            <CardItem

         
src='https://static.businessworld.in/article/article_extra_large_image/1598015126_YvTjER_banquet_hall.jpg'
  text='Party Halls'
  

  
  
/>
            
           
            <CardItem 
              src='https://www.oyorooms.com/blog/wp-content/uploads/2018/01/features.jpg'
              text='Marriage Halls'
             
              
              
            />
            <CardItem
              src='https://www.ileafritz.com/images/Home1.webp'
              text='Banquet Halls'
              
          
            />
            <CardItem
              src='https://static.businessworld.in/article/article_extra_large_image/1598015126_YvTjER_banquet_hall.jpg'
              text='Cocktail Venues'
              
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;