import React from 'react';
import { useRef, useEffect, useState } from 'react';
export default function Sandwich() {
  const imgRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [initScroll, setInitScroll] = useState(0);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {

    // setOffsetY(window.pageYOffset);
    setOffsetY((prevOffsetY) =>  window.pageYOffset);
    console.log(window.pageYOffset + ", " + offsetY);
  } 


  useEffect( () => {  
    //window.addEventListener("scroll", handleScroll);

    // const handleScroll = (event) => {
    // //function handleScroll(event) {

    //   //console.log("state " + scrollValue)
    //   isVisible && console.dir("realValue " + window.scrollY);
    //   //console.dir(titleRef.current.style);
    //   if (isVisible) {
    //     titleRef.current.style.left= (scrollValue - window.scrollY)*2 + 'px';
    //   }

    // }
    
    //window.addEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
      console.log(isVisible)

      if (entry.isIntersecting) {
        setInitScroll(window.pageYOffset);
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }

    });
    observer.observe(imgRef.current);
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [isVisible]);

  return (
    
     <section className="sandwich--container"> 
     
        <div className="sandwich-para">
          <img 
            ref={imgRef} 
            className="sandwich-img" 
            src="./images/sandwich.jpeg"
          ></img>
          <h1 
              style={{transform: `translateX(${(initScroll - offsetY)*1.6}px)`}}
              className="huge-heading"
          > LOST IN PARADISE
          </h1>
        </div>
        <div className="bowl-images">
            <img 
              style={{transform: `translateY(${(initScroll - offsetY) * 0.1}px)`}}
              className="bowl-img bowl1" 
              src="./images/bowl1.jpg"
            />
            <img className="bowl-img bowl2" src="./images/bowl2.jpg"></img>
            <img
              style={{transform: `translateY(${(initScroll - offsetY) * 0.05}px)`}}
              className="bowl-img bowl3" 
              src="./images/bowl3.jpg"
            />
        </div>
    </section>
  );
}