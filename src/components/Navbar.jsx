import React from 'react';

export default function NavBar() {
  const [isActive, setIsActive] = React.useState(false)

  function handleToggle() {
    setIsActive(prevActive => !prevActive)
  }

  return (
    <nav className= {isActive? 'mini':'blank'}>
      <ul>
        <li className="nav--item"><a href="#home" target="_blank">home</a></li>
        <li className="nav--item collapse"><a href="#menu" target="_blank">menu</a></li>
        <li className="logo-item"><img className="logo" src="./images/bird.svg"></img></li>
        <li className="nav--item collapse"><a href="#giftCards" target="_blank">gift cards</a></li>
        <li className="nav--item collapse"><a href="#orderOnline" target="_blank">order online</a></li>
      </ul>
      <div className= "hamburger_container">
        <button 
          className={`hamburger ${isActive? 'active':''}`}
          onClick={handleToggle}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </button>
      </div>
    </nav>
  )
}