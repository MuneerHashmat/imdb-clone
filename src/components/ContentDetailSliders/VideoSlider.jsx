import { ChevronLeft, ChevronRight } from "lucide-react";
import "../Slider/Slider.css";
import { useEffect, useRef, useState } from "react";
import VideoSliderCard from "./VideoSliderCard";
import VideoModal from "../VideoModal/VideoModal";

const VideoSlider = ({ loading, videos }) => {
  const slideRef = useRef(null);
  const [currVideo, setCurrVideo]=useState("");

  const handleVideoClick=(videoId)=>{
    setCurrVideo(videoId)
  }

  const handleVideoClose=()=>{
    setCurrVideo("");
  }

  useEffect(()=>{
    console.log(currVideo)
  },[currVideo])

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
        {videos.map((item) => (
          <VideoSliderCard key={item.id} item={item} handleVideoClick={handleVideoClick}/>
        ))}
      </div>

      <button onClick={scrollLeft} className="slide-btn slide-left">
        <ChevronLeft size={24} />
      </button>
      <button onClick={scrollRight} className="slide-btn slide-right">
        <ChevronRight size={24} />
      </button>
      <VideoModal currVideo={currVideo} handleVideoClose={handleVideoClose}/>
    </div>
  );
};

export default VideoSlider;
