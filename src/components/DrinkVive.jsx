import React from 'react';
import { useRef, useEffect, useState } from 'react';

export default function DrinkVive() {
  const drinkRef = useRef();
  const [isVisible, setIsVisible] = useState();

  useEffect( ()=> {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(drinkRef.current);
  }, []);

  return (
    <div className="drink-vive--section">
      <div className={`drink-container ${isVisible ? 'ani' : ''}`}>
        <div className="drink-para">
          <h2 ref={drinkRef}>LICENSED TO CHILL</h2>
          <p className="drink-desc">We like our days &#38; our drinks cold. Stop by and cool off!</p>
          <button className="solid-button blue">DRINK MENU</button>
        </div>
        <div className="drink-img-container">
          <img 
            src="./images/drink.png" 
            className="drink-img" 
          />
        </div>
      </div>
      <div className="vive-container">
        <img 
          src="./images/play.jpeg" 
          className={`vive-img ${isVisible > 0 ? 'ani' : ''}`}
        />
        <div className="vive-para">
          <h1>CATCH OUR VIBE</h1>
          <p className="drink-desc">Keep it groovy all day with the little pecks signature Spotify playlist! </p>
            <button className="solid-button orange">TUNE IN</button>
        </div>
      </div>
    </div>
  )
}