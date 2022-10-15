import React from 'react';
import { useRef, useEffect, useState } from 'react';

export default function OrderOnline() {

  const imgRef = useRef();
  const [isImgVisible, updateVisible] = useState();

  useEffect( () => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      updateVisible(entry.intersectionRatio);
    });

    observer.observe(imgRef.current);
  }, []);
  
  return (
    <div className="order--container">
      <div className={`order-para ${isImgVisible > 0 ? 'ani' : ''}`}>
        <h1>
          <span className="lg-pink">EAT, </span>
          <span className="md-pink">DRINK </span>
          <br></br>
          <span className="pink">WORK</span>
          <span className="lg-pink">, </span>
          <span className="dk-pink">PLAY</span>
        </h1>
        <h4>Little Pecks is a neighborhood all-day cafe with a passion for tasty bites and quality beans. We're also the perfect place to meet up with friends, take care of business, or just kick back and relax!</h4>
        <button className="solid-button pink">order online</button>
      </div>
      <img className={`order-image ${isImgVisible > 0 ? 'ani' : ''}`} src="./images/coffee.jpeg" ref={imgRef}></img>
    </div>
  );
}