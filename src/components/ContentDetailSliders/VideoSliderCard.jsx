import { CirclePlay } from "lucide-react";
import "./VideoSliderCard.css";

const VideoSliderCard = ({ item, handleVideoClick }) => {
  return (
    <div className="video-card-container">
      <div
       onClick={()=>handleVideoClick(item.key)}
        style={
          item.key && {
            backgroundImage: item.key
              ? `url(https://img.youtube.com/vi/${item.key}/mqdefault.jpg)`
              : "url(/poster.png)",
          }
        }
        className="video-card-bg"
      >
        <div>
          <CirclePlay size={60} className="play-icon"/> 
        </div>
      </div>
       <div className="title">
        <p>{item.name}</p>
       </div>
    </div>
  );
};

export default VideoSliderCard;
