import React from 'react';
import { useRef, useEffect, useState } from 'react';
export default function Footer() {
  const footerRef = useRef();
  const [isVisible, setIsVisible] = useState();

  useEffect( ()=> {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
      console.log(entry.isIntersecting)
    });
    observer.observe(footerRef.current);
  }, []);

  return (
    <footer>
      <h1>CONTACT US</h1>
      <img 
        ref={footerRef}
        className={`footer-logo ${isVisible ? 'ani' : ''}`}
        src="./images/littlePeck.svg"
      ></img>
      <h4>VISIT</h4>
      <h5>211 BROADWAY, TROY, NY, 12180</h5>
      <h4>CALL</h4>
      <h5>518-326-3450</h5>
      <h4>FOLLOW</h4>
      <h5>instagram facebook</h5>
      <p className="small">WEB DESIGN BY KRUM, MARKETING</p>
    </footer>
  );
}