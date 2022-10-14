import React from 'react';
export default function MenuItem(props) {
  //console.log(props)
  return (
    <div className={`menu-item-container ${props.color}`}>
      <div className="menu-block flex-column">
        <div className="menu-title flex-row">
          <h4>{props.menuName}</h4><div className="fill-dots"></div> <p className="menu-price">{props.price}</p>
        </div>
        <div className="small">
          {props.description}
        </div>
      </div>
    </div>
  )
}   