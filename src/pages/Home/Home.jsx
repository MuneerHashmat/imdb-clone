import Hero from "../../components/Hero/Hero"
import Slider from "../../components/Slider/Slider"
import "./Home.css"

const Home = () => {
  return (
    <div className='home-container'>
      <Hero />
      <div className="home-content">
        <div className="slider-container">
          <div className="slider-title">
            <div></div>
            <h2>Most Popular Celebrities</h2>
          </div>
          <Slider type={"people"} />
        </div>
      </div>
    </div>
  )
}

export default Home