import react from 'react';
import { ReactDOM } from 'react';
import './home.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import html from './ht2.png';
import css from './css.png';
import js from './js.png';
import react2 from './react1.png'; 
import php from './p5.png';
import mysql from './sq2.png';
import python from './py3.png';
import r1 from './r1.png';
import bootstrap from './bootstrap.png';
function Skills(){
    return(
        <div className='skill'>
          <h2>WEB TECHNOLOGIES</h2>
          <h4>Front end</h4>
          <ul><img src={html}   className="img9"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={css} className="img9"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={bootstrap} className="img9"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={js} className="img9"/>&nbsp;&nbsp;&nbsp;
          <img src={react2} className="img9"/>
</ul>
          <h4>Backend </h4>
          <ul><img src={php}   className="img12"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={mysql} className="img12"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</ul>
          <h2>DATA SCIENCE</h2>
          <ul><img src={r1}   className="img12"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={python} className="img12"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</ul>
        </div>
    )

}


export default Skills;