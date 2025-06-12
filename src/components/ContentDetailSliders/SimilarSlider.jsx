import { ChevronLeft, ChevronRight } from "lucide-react";
import "../Slider/Slider.css";
import { useRef } from "react";
import SliderCard from "../SliderCard/SliderCard";

const SimilarSlider = ({ loading,type, similarContent}) => {
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
    return <div style={{ height: "350px" }} className="slider shimmer"></div>;

  return (
    <div 
    className="slider">
      <div ref={slideRef} className="slider-cards">
        {similarContent.map((item) => (
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

export default SimilarSlider;
