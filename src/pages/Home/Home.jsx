import { lazy, Suspense } from "react";
import Hero from "../../components/Hero/Hero";
import { SLIDERS } from "../../utils/constants";
import "./Home.css";
const Slider = lazy(() => import("../../components/Slider/Slider"));

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
          <Suspense
            fallback={
              <div style={{ height: "230px" }} className="slider shimmer"></div>
            }
          >
            <Slider
              type={"people"}
              endpoint={"/person/popular?language=en-US&page=1"}
            />
          </Suspense>
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
            <Suspense
              fallback={
                <div
                  style={{ height: "230px" }}
                  className="slider shimmer"
                ></div>
              }
            >
              <Slider type={item.type} endpoint={item.endpoint} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
