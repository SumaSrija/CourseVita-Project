import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-secondary bg-secondary">
  <Link class="navbar-brand" to="/main">Academic Learning Portal</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/services">Services</Link>
      </li>
      
      
      
    </ul>

    







    <form class="form-inline my-2 my-lg-0">
      

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
        <Link class="nav-link" to="/contact">Contact<span class="sr-only">(current)</span></Link>
      </li>
       <li class="nav-item active">
        <Link class="nav-link" to="/login">Login <span class="sr-only">(current)</span></Link>
      </li> 
      </ul>
      </div>
    </form>
  </div>

  
  


        </nav>

  )
}

export default Navbar