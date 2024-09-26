
import "./contact.css";

const Contact = () => {
//   const history=useHistory()
//   const [user,setUser]=useState({
//      Name:"",
//      PartnersName:"",
//      Email:"",
//      Contact:"",
//      Weddingdate:Date
//     })
//     const handleChange=e=>{
//       const {Name,value}=e.target
//     setUser({
// ...user,
// [Name]:value
//     })
//   }

  // const Contact1=()=>{
  //   const {Name,PartnersName,Email,Contact,Weddingdate}=user
  //   if(Name && PartnersName && Email && Contact && Weddingdate){
  //     axios.post('http://localhost:9002/contact',user)
  //     .then(res=>{
  //       alert(res.data.message);
  //       history.push("/contact")
  //     })
  //   }else{
  //       alert("invalid output")
      
        

  // }
  // }
    
  return (
    <>
      {/* Contact Header */}
      <div className="contacts">
        {/* {console.log("User",user)} */}
        <div>
          <div className="img">
            <img src="https://burst.shopifycdn.com/photos/contact-us-lettering.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="ContactContent">
          {/*  */}
          <form action="sign_up " method="POST">
            <h6>Get in Touch</h6>
            <center><p className="lion"> we can't wait to start your special day</p></center>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>


            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <input
              
                className="form-control"
                placeholder="Contact"
                required
              />
            </div>

           
            
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                placeholder="Weddingdate"
                required
              />
            </div>

            <button className="btn">Submit Now</button>
          </form>
          {/*  */}
        </div>
      </div>
    </>
  );
};
export default Contact;