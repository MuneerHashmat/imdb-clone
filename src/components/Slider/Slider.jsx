import { useEffect, useRef, useState } from "react";
import "./Slider.css";
import { fetchDataFromTMDB } from "../../api/tmdb";
import SliderCard from "../SliderCard/SliderCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = ({ type, endpoint }) => {
  const [sliderItems, setSliderItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const slideRef = useRef(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchDataFromTMDB(endpoint);
      setSliderItems(data.results || []);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const scrollLeft = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({
        left: -slideRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    slideRef.current.scrollBy({
      left: slideRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  if (loading)
    return (
      <div
        style={{ height: type === "people" ? "230px" : "350px" }}
        className="slider shimmer"
      ></div>
    );

  return (
    <div className="slider">
      <div ref={slideRef} className="slider-cards">
        {sliderItems.map((item) => (
          <SliderCard key={item.id} type={type} item={item} />
        ))}
      </div>

      <button onClick={scrollLeft} className="slide-btn slide-left">
        <ChevronLeft size={24} />
      </button>
      <button onClick={scrollRight} className="slide-btn slide-right">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Slider;
