import React from 'react';
import { useRef, useEffect, useState } from 'react';

export default function Brunch() {
  const brunchRef = useRef();
  const [isVisible, updateVisible] = useState();

  useEffect( ()=> {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      updateVisible(entry.intersectionRatio);
    });
    observer.observe(brunchRef.current);
  }, []);

  return (
    <div className="brunch--container">
      <div className={`brunch-para ${isVisible > 0 ? 'ani' : ''}`}> 
          <p className="brunch-desc">BEST MEALS START WITH B</p>
          <h1 ref={brunchRef}>BRUNCH<br></br>
          <span className="yellow">LIFE IS</span><br></br>
          <span className="gray">BAE</span></h1>
          <p className="brunch-desc">Did somebody say brunch?! No one throws a patio party like we do! Bloodys, Mimosas and your favorite brunch munchies are the name of the game.<br></br>
          Brunch is served Saturday and Sunday 8-3, but we like to say you can have brunch any day of the week.
          </p>
      </div>
      <img src="./images/cooldrink.jpeg" className="cooldrink-img"/>
    </div>
  )
}