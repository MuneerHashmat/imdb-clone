import { CirclePlay } from "lucide-react";
import {
  ORIGINAL_IMG_BASE_URL,
  SMALL_IMG_BASE_URL,
} from "../../utils/constants";
import "./CarouselCard.css";
import { useNavigate } from "react-router-dom";

const CarouselCard = ({ item, idx }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/detail/${item.media_type}/${item.id}`);
  };
  return (
    <div
      onClick={handleOnClick}
      style={{
        backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0.14) 56%, rgba(10, 13, 12, 1) 86%)`,
      }}
      className="carousel-card-container"
    >
      <picture>
        <source
          media="(min-width: 600px)"
          srcSet={`${ORIGINAL_IMG_BASE_URL}${item.backdrop_path}`}
        />
        <img
          src={`${SMALL_IMG_BASE_URL}${item.backdrop_path}`}
          alt="backdrop"
          loading={idx == 0 ? "eager" : "lazy"}
          className="backdrop"
        />
      </picture>
      <div className="carousel-content">
        <img src={`${SMALL_IMG_BASE_URL}${item.poster_path}`} alt="poster" />

        <div className="details-container">
          <div>
            <CirclePlay size={50} className="play-icon" />
          </div>
          <div>
            <p className="title" style={{ fontWeight: "normal" }}>
              {item.title || item.name}
            </p>
            <p className="overview" style={{ fontWeight: "lighter" }}>
              {item.overview.length > 200
                ? item.overview.slice(0, 200) + "..."
                : item.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
