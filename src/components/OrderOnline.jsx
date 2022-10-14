import React from 'react';
import { useRef, useEffect, useState } from 'react';

export default function OrderOnline() {

  const imgRef = useRef();
  const [isImgVisible, updateVisible] = useState();

  useEffect( () => {
    console.log('imgRef', imgRef.current);
  
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      
      updateVisible(entry.intersectionRatio);
    });

    observer.observe(imgRef.current);
  }, []);
  
  return (
    <div className="order--container">
      <div className={`order-para ${isImgVisible > 0 ? 'ani' : ''}`}>
        <h1>EAT, DRINK <br></br>WORK, PLAY</h1>
        <h4>Little Pecks is a neighborhood all-day cafe with a passion for tasty bites and quality beans. We're also the perfect place to meet up with friends, take care of business, or just kick back and relax!</h4>
        <button className="solid-button pink">order online</button>
      </div>
      <img className={`order-image ${isImgVisible > 0 ? 'ani' : ''}`} src="./images/coffee.jpeg" ref={imgRef}></img>
    </div>
  );
}