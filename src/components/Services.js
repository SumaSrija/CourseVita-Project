import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
const Cardis= () => {
     return (
     <React.Fragment>
      <h1 className="text-center text-danger text-capitalize my-5">
        {" "}
        
        </h1>  
        <div className="container ">
  <div className="row">
    <div className="col">
    <div class="card" >
  <img src="https://www.teachrequest.com/wp-content/uploads/2020/07/one-to-one-teaching.jpg" class="card-img-top" alt="..."
  height="200px"/>
  <div class="card-body">
    <h5 class="card-title">One to One teaching</h5>
    <p class="card-text">One-to-one teaching offers personalized attention, tailoring lessons to the individual student's pace and learning style. It allows for deeper engagement, immediate feedback, and a stronger student-teacher relationship. This approach enhances understanding and promotes more effective learning outcomes.</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIa8Z29nDBPGTNW6qWSSlZZC0K9AECiAd6yw&s" class="card-img-top" alt="..."
  height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Online teaching</h5>
    <p class="card-text">Online teaching enables education through digital platforms providing flexibility in learning anytime and anywhere It uses various tools like video conferencing recorded lessons, and interactive materials to engage students. This method broadens access to education but requires self-discipline and digital literacy from learners</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BgxB8gronAao-BSpch2p8r6AtP7hGXetQA&s" class="card-img-top" alt="..."
  height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Online Course by AI assistant and bots</h5>
    <p class="card-text">AI and bots in website teaching provide personalized learning experiences, adapting content to individual needs and preferences. They offer real-time assistance, answering questions and guiding users through interactive lessons. This technology enhances accessibility and efficiency, making education more engaging and scalable.</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  </div>
</div>
     </React.Fragment>
     ); 
    }; 
export default Cardis;