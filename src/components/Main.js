import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className='big'>
        <img
          className="d-block w-100"
          src="https://media.licdn.com/dms/image/D5612AQEaiidKhazp8Q/article-cover_image-shrink_600_2000/0/1700305225689?e=2147483647&v=beta&t=V1uc7dF85WtUmIMygEdZbKY4rxQraMeZ3dRdXh1dn6s"
          alt="First slide"
        />
        </div>
        
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='big'>
        <img
          className="d-block w-100"
          src="https://miro.medium.com/v2/resize:fit:600/1*ljHUhFnaBissdRBe7DIo6g.png"
          alt="Second slide"
        />
         </div>

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
       
       
        <div className='big'>
          <img
          className="d-block w-100"
          src="https://almablog-media.s3.ap-south-1.amazonaws.com/MERN_Stack_9437df2ba9_62af1dd3fc.png"
          alt="Third slide"
        />
         </div>

        <Carousel.Caption>
          <div className='mine'>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>






  );
}

export default CarouselFadeExample;