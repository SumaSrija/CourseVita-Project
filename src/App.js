
import './App.css';

import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';


import CarouselFadeExample from './components/Main';
import Hero from './components/Hero';

import Carding from './Cards/Carding';
import Cardis from './components/Services';
import Cardss from './components/Cardss';
import Contact from './Contact';
import {useState} from 'react';
import Login from './components/login/login';
import Register from './components/register/register';

import Picture from './components/Picture';
import Footer from './components/Footer';
import Rating from './components/Rating';



function App() {
  const [user,setLoginUser]=useState({})
  return (

    <div className="App">

<Router>
      <Navbar/>
  <div className='container my-3'>
        <Switch>


<Route exact path="/">
            {
              user && user._id ? <CarouselFadeExample setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>

          <Route exact path="/about"><About/></Route>
          <Route exact path="/home"><CarouselFadeExample/> <Cardss/> </Route>
           <Route exact path="/login"><Login/></Route>
          <Route exact path="/contact"><Contact/></Route>
          <Route exact path="/rating"><Rating/></Route>
          <Route exact path="/services"> <Cardis/> </Route>
    </Switch>

        </div>
        <Route exact path="/main">
        
          <Hero/> <Footer/>
        
      </Route>
        </Router>
    </div>
  );
}

export default App;
