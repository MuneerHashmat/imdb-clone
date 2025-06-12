import { ChevronLeft, ChevronRight } from "lucide-react";
import "../Slider/Slider.css";
import CastSliderCard from "./CastSliderCard";
import { useRef } from "react";

const CastSlider = ({ loading, cast }) => {
  const slideRef = useRef(null);

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

  if (loading)
    return <div style={{ height: "230px" }} className="slider shimmer"></div>;

  return (
    <div 
    className="slider">
      <div ref={slideRef} className="slider-cards">
        {cast.map((item) => (
          <CastSliderCard key={item.id} item={item} />
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

export default CastSlider;
