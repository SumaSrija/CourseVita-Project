import React from "react"; 
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaRupeeSign} from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

 

const Cardss= () => {
     return (
     <React.Fragment>
      <h1 className="text-center text-danger text-capitalize my-5">
        {" "}
        Explore Courses
        </h1>  
        <div className="container ">
  <div className="row">
    <div className="col">
    <div class="card" >
  <img src="https://media.licdn.com/dms/image/D5612AQEaiidKhazp8Q/article-cover_image-shrink_600_2000/0/1700305225689?e=2147483647&v=beta&t=V1uc7dF85WtUmIMygEdZbKY4rxQraMeZ3dRdXh1dn6s" class="card-img-top" alt="..."
  height="200px"/>
  <div class="card-body">

    <p ><b>Django Course<br/>
    </b></p>
   <ratingChanged/>
     <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><br/>6
    <HiOutlineUserGroup/>15 hrs course<br/>
    <FaRupeeSign/> free course 
    
    <br/>
    <a  href="https://rzp.io/l/iKrfew09r" class="btn btn-primary my-3">Enroll Course</a> 
  </div>
</div>
    </div>
   
    <div className="col">
    <div class="card" >
  <img src="https://miro.medium.com/v2/resize:fit:600/1*ljHUhFnaBissdRBe7DIo6g.png" class="card-img-top" alt="..."
  height="200px"/>
  <div class="card-body">
    <p ><b> Spring boot course <br/>
</b></p>
    <BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/><br/>
    <HiOutlineUserGroup/> 12 hrs course<br/>
    <FaRupeeSign/>free course
    <br/>
    <a href="https://rzp.io/l/iKrfew09r" class="btn btn-primary my-3">Enroll Course</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" >
  <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/MERN_Stack_9437df2ba9_62af1dd3fc.png" alt="..."
  height="200px"/>
  <div class="card-body">
  <center><p><b>MERN Stack <br/>
       </b></p>
       <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><br/>
       <HiOutlineUserGroup/> 15 hrs course<br/>
       <FaRupeeSign/> free course
       <br/>
       <a href="https://rzp.io/l/iKrfew09r" class="btn btn-primary my-3">Enroll Course</a></center>  
       
   </div> 
</div>
    </div>
    

  </div>
  </div>

     </React.Fragment>


     ); 
    }; 

export default Cardss;