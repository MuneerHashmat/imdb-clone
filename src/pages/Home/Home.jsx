import Hero from "../../components/Hero/Hero";
import Slider from "../../components/Slider/Slider";
import { SLIDERS } from "../../utils/constants";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <div className="home-content">
        <div className="slider-container">
          <div className="slider-title">
            <div></div>
            <h2>Most Popular Celebrities</h2>
          </div>
          <Slider
            type={"people"}
            endpoint={"/person/popular?language=en-US&page=1"}
          />
        </div>

        <h1 style={{ color: "#f5c518", marginBottom: "40px" }}>
          What to watch
        </h1>

        {SLIDERS.map((item) => (
          <div key={item.title} className="slider-container">
            <div className="slider-title">
              <div></div>
              <h2>{item.title}</h2>
            </div>
            <Slider type={item.type} endpoint={item.endpoint} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
