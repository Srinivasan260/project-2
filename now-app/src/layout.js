import React from "react";
import { Outlet, Link } from "react-router-dom";
import './home.css';
import favimg from './IMG_4699 (2).JPG';
import asimg from './IMG_4558.JPG';
import { IconName } from "react-icons/fa";
import twitter from './tttt.png';
import facebook from './facebok.png';
import instagram from './instagram.jpg';
import { FaList } from "react-icons/fa"




const Layout = () => {
  return (
    
  <div className="br">
     
     <img src={favimg}   className="imgh"/><b className="cw">Srinivasan N </b><br></br>
   
     <div className="cr">
   
    <>
      <nav>
     


            <br></br><Link to="/" exact className="re"><b>Home </b></Link>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
            <Link to="/blogs" className="re"><b>Courses & Studies</b></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
         
            <Link to="contact" className="re"><b>Projects</b></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <Link to="skill" className="re"><b>Skills</b></Link><br></br>
              <img src={asimg} className="img2"/> 

              <br></br><br></br><br></br><br></br><br></br><br></br>
            &nbsp;&nbsp; 
                             <hr id="rti"></hr><br></br>
            
            <div id="wq">
              <b>follow me on</b> </div>
           
              <a href="https://twitter.com/Sriniva91959734?s=09"> <div id="wq1">
              <img src={twitter} className="img3"/> </div> </a>

              
             
             
             <a href="https://www.instagram.com/invites/contact/?i=ut7qansrxhbf&utm_content=2vf8amh">  <div id="wq3"><img src={instagram} className="img5"/> </div></a> 

            
        
            <div id="wq4">Privacy policy....   @2022 .All rights reserved.</div>
              
           
           




           

            <Outlet />
             </nav>
             
             
   
    </>
   
    </div>
    </div>






  
  )
};

export default Layout;