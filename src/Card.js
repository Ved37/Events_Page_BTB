import './Card.css';
import React from "react";
import rectangle from "./img/rectangle.jpg"
export default function Card() {
  return (
      <div className="Event-card">
        <img className="rectangle" src={rectangle} alt="rectangle"></img>
        <p className="line-1">Public Speaking Communic....</p>
        <p className="light-gray">Speaker: <span className="line-2-name">Vandan Gohil</span></p>
        <p className="light-gray">Date: <span className="line-2-name">28/04/2022</span></p>
        <button className='red-btn'>Register Now</button>
      </div> 
  );
}
