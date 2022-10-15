import React from 'react';
import { useRef, useEffect, useState } from 'react';
import DrinkData from "./drink";
import MenuItem from './MenuItem';

export default function DrinkMenu () {

  const coffeeEl = DrinkData.COFFEE.map((coffeeItem, i) => {
    return <MenuItem key={i} {...coffeeItem} color='blue' />
  });
  const teaEl = DrinkData.TEA.map((teaItem, i) => {
    return <MenuItem key={i} {...teaItem} color='green'/>
  });
  const cocktailsEl = DrinkData.TEA.map((cocktailItem, i) => {
    return <MenuItem key={i} {...cocktailItem} color='yellow'/>
  });

  return (
    <section className="drink-menu--container">
      <div className="foodMenu-white-div">
        <h1 className="center">DRINK MENU</h1>
        <div className="food-menu">
          <div className="drink-items">
            <h3 className="menu-blue">COFFEE</h3>
            <div className="food-menu-items">
              {coffeeEl}
            </div>
          </div>
          <div className="drink-items">
            <h3 className="menu-green">TEA</h3>
            <div className="food-menu-items">
              {teaEl}
            </div>
            <h3 className="menu-yellow">COCKTAILS</h3>
            <div className="food-menu-items">
              {cocktailsEl}
            </div>  
          </div>    
        </div>
      </div>
      <button className="line-button">order online!</button>
    </section>
  );
}