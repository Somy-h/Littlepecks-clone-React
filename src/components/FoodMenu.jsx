import React from 'react';
import { useRef, useEffect, useState } from 'react';
import MenuItem from './MenuItem'
import BreakfastData from "./breakfast"
import AllDayData from "./allDay"

export default function FoodMenu() {
  const menuRef = useRef();
  const [isVisible, updateVisible] = useState();
  
  useEffect( () => {  
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      updateVisible(entry.intersectionRatio);
    });

    observer.observe(menuRef.current);
  }, []);

  const breakfastEl = BreakfastData.map((breakfastItem, i) => {
    return <MenuItem key={i} {...breakfastItem} color='yellow' />
  });
  const allDayEl = AllDayData.map((allDayItem, i) => {
    return <MenuItem key = {i} {...allDayItem} color='pink' />
  })

  return (
    <section id="menu" className="foodMenu--container">
      <div className="foodMenu-white-div">
        <h1 className="center" ref={menuRef}>FOOD MENU</h1>
        <div className="food-menu">
          <div className={`grid-item ${isVisible > 0 ? 'active' : ''}`}>
            {/* <div className="div-block yellow"></div> */}
            <h3 className="menu-yellow">BREAKFAST (8AM-4PM)</h3>
            <div className="food-menu-items">
              {breakfastEl}
            </div>
          </div>
          <div className={`grid-item ${isVisible > 0 ? 'active' : ''}`}>
            {/* <div className="div-block pink"></div> */}
            <h3 className="menu-pink">ALL DAY (M-F 11AM-CLOSE)</h3>
            <div className="food-menu-items">
              {allDayEl}
            </div>
          </div>
        </div>
        <p className="center small">(all that and a bag of chips $3)</p>
      </div>
      <button className="line-button">order online!</button>
    </section>
  );
}