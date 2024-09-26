import React from 'react';
import './HeroStyles.css';
import video from '../assets/Video2.mp4';


function Hero() {
  return (
    <div className='hero'>
<video autoPlay loop muted
style={{
    width: '100%', 
  height: '100vh', 
  color: '#fff',
  position: 'absolute',
  objectFit:'cover',
  top:'47%',
  left:'50%',
  transform:"translate(-50%,-50%)",
  zIndex:"-1"
    

}}
   
   
   >
     <source src={video} type='video/mp4' />
      </video>
      <div className='content'>
         <h1>First Class Wedding</h1>
         <div className='cod'>
         <h1>Top Class Event Organizer</h1>
         </div>
       
      </div>
    </div>
  )
}

export default Hero;