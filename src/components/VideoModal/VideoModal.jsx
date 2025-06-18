import { X } from "lucide-react";
import "./VideoModal.css";
import ReactPlayer from "react-player/youtube";

const VideoModal = ({ currVideo, handleVideoClose }) => {
  if (currVideo)
    return (
      <div className="video-modal-container">
        <div className="video-container">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${currVideo}`}
            controls
            width="100%"
            height="100%"
            playing={true}
          />
          <button onClick={handleVideoClose}><X /></button>
        </div>
      </div>
    );
};

export default VideoModal;
