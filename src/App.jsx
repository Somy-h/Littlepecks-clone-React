import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import OrderOnline from './components/OrderOnline'
import FoodMenu from './components/FoodMenu'
import DrinkVive from './components/DrinkVive'
import DrinkMenu from './components/DrinkMenu'
import Brunch from './components/Brunch'
import Sandwich from './components/Sandwich'
import Footer from './components/Footer'

function App() {

  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, []);

  return (
    <div className="App">
      <div id="home" className="init--screen">
        <img className="left-bird-img" src="./images/leftBird.jpg"/>
        <img className="right-bird-img" src="./images/rightBird.jpg"/>
      </div>
      <Navbar />
      <Main />
      <OrderOnline />
      <FoodMenu />
      <DrinkVive />
      <DrinkMenu />
      <Brunch />
      <Sandwich/>
      <Footer />
    </div>

  )
}

export default App
