import { useEffect, useRef, useState } from "react";
import "./Slider.css";
import { fetchDataFromTMDB } from "../../api/tmdb";
import SliderCard from "../SliderCard/SliderCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = ({ type }) => {
  const [sliderItems, setSliderItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const slideRef=useRef(null);

  const fetchData = async () => {
    setLoading(true);
    let items;
    try {
      switch (type) {
        case "people": {
          const data = await fetchDataFromTMDB(
            "/person/popular?language=en-US&page=1"
          );
          items = data.results;
          console.log(items);
          break;
        }
      }
      setSliderItems(items);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
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
  }, []);
  if(loading) return (
    <div style={{height: type==="people" ? "230px" : "350px"}} className="slider shimmer"></div>
  )

  return (
    <div  
    className="slider">
     <div 
     ref={slideRef}
     className="slider-cards">
       {sliderItems.map((item)=>(
        <SliderCard key={item.id} type={type} item={item}/>
      ))}
     </div>

      <button 
      onClick={scrollLeft}
      className="slide-btn slide-left">
        <ChevronLeft size={24} />
      </button>
      <button 
      onClick={scrollRight}
      className="slide-btn slide-right">
        <ChevronRight size={24} />
      </button>
    </div>
  )
};

export default Slider;
