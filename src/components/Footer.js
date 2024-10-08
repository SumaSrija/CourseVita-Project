import React from 'react'
import './Footer.css';
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import {BsInstagram } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {BsFillTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='foot'>
      
      <section id="contact" className='row' style={{paddingTop:40}}>

      
      <div class="col-lg-4 col-md-6 mt-3" style={{paddingLeft:120,paddingBottom:70}}>
      <h3 class="h3-style">About Us</h3>
      <p style={{paddingtop:20,fontweight:100}}>Our bot is designed to enhance various aspects of college life by providing seamless academic support and promoting events. It offers personalized event suggestions and enables social connections through virtual buddy systems and group chats. This makes it easier for students to stay informed, engaged, and connected with their peers, contributing to a more vibrant campus life. </p>
      <BsTwitter size={30} style={{paddingLeft:5}}/>
      <BsFacebook size={30} style={{paddingLeft:5}}/>
      <BsInstagram size={30} style={{paddingLeft:5}}/>
      </div>
      <div class="col-lg-4 col-md-6 mt-3" style={{paddingLeft:150}}>
      <h3 class="h3-style">Contact Us</h3>
      <ul style={{paddingTop:20}}>
        <li style={{marginLeft:-30,marginBottom:10}}>
         <FaMapMarkerAlt/>
        <span style={{paddingLeft:5}}>198 West 19th Street</span>
        </li>

        <li style={{marginLeft:-30,marginBottom:10}}>
        <GrMail/>
        <span style={{paddingLeft:5}}>learn.course@gmail.com</span>
        </li>

        <li style={{marginLeft:-30,marginBottom:10}}>
        <BsFillTelephoneFill/>
        <span style={{paddingLeft:5}}>1234567890</span>
        </li>

      </ul>
      </div>
      <div class="col-lg-4 col-md-6 mt-3" style={{paddingLeft:120}}>
      <h3 class="h3-style">FeedBack</h3>
      <p>We all need people who will give us feedback.That’s how we improve.</p>
      <button type="button" class="btn btn-outline-warning"><Link to="/rating" style={{textDecoration: 'none'}}>FeedBack</Link></button>
      </div>

      </section>






    </div>

      






   
  )
}

export default Footer