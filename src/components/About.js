import React from 'react';
import {Link} from'react-router-dom';
import './About.css';

function About() {
  return (
    <div className='conatiner my-4 p-5' >
      <p style={{marginTop:'10px'}}>
      Our bot is designed to enhance various aspects of college life by providing seamless academic support and promoting social engagement. It is tailored to assist students in their academic journey with features such as automated answers to common queries, personalized study reminders, and course material recommendations based on their workload.

In addition to academic assistance, the bot enhances the campus experience by helping students organize and register for events. It offers personalized event suggestions and enables social connections through virtual buddy systems and group chats. This makes it easier for students to stay informed, engaged, and connected with their peers, contributing to a more vibrant campus life.

   
      </p>
     
      <div className='big'>
      <img src="https://blog.balfour.com/hs-fs/hubfs/Tuesday%20Tips/2018_Jan%2023/TT%20header_012318_academics.png?width=1440&name=TT%20header_012318_academics.png" alt="" />

      </div>
      
      <br/><br/>

      <p>Our bot is helpful in learning courses like :</p>
      <p><i class="arrow right"></i> MERN Stack</p>
      <p><i class="arrow right"></i> Spring boot </p>
      <p><i class="arrow right"></i> Django </p>
      <p><i class="arrow right"></i> Computer Science fundamentals</p>
      <p><i class="arrow right"></i> Cryptography</p>
      <p><i class="arrow right"></i> Data Science</p>
      







      <center>
      <Link to='/contact' class="btn btn-primary">Reach Us</Link>
        </center>
    </div>

  )
}

export default About