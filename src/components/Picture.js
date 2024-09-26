import React from 'react'
import './Picture.css';
function Picture() {
  return (
    <div className="row">
  <div className="column">
    <img src="https://static.businessworld.in/article/article_extra_large_image/1598015126_YvTjER_banquet_hall.jpg" alt="Snow" width={300} />
    <figcaption className="desc">Party Halls</figcaption>
    
  </div>
  <div className="column">
    <img src="https://m.weddingz.in/wedz-img/images/5e4ecaf4f6a4aa2e2c9ff20401d3fb09/maharaja-banquet-hall-thane-west-mumbai-2.jpg" alt="Forest" width={300} />
     <figcaption className="desc">Marriage Halls</figcaption>
   
  </div>
  <div className="column">
    <img src="https://static.businessworld.in/article/article_extra_large_image/1598015126_YvTjER_banquet_hall.jpg" alt="Mountains" width={300}/>
     <figcaption className="desc">Banquet Halls</figcaption>
    
  </div>
  
  <div className="column">
    <img src="https://www.ileafritz.com/images/Home1.webp " alt="Mountains" width={300} />
     <figcaption className="desc">Cocktail Venues</figcaption> 
  </div>
  
</div>
  )
}

export default Picture