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
