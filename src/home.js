import React from "react";
import { ReactDOM } from "react";
import './home.css';
import email from './gamil.png';


const Home = () => {
    return(
  
    <div className="sr">
   
        <h2> N.Srinivasan Bsc(cs),MCA <small>(DDA)</small></h2>

        <h3> Programmer , Web Developer</h3>

        <p> Hi,I am  Srinivasan , Web Developer.  First of All..<br></br>Thanks for visiting my profile.
          I am currently pursing MCA.<br></br>I started My career in Web developing.Currently Doing projects 
          and frontend frameworks for free launchers..
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
         
        <div>
        <b >Email: srinivascenaa@gamil.com</b>
       <div id="rea">
       <img src={email} className="img7"/> 
       </div>
          </div>
            </p>
            </div>
            
    
    )
  };

export default Home;