import React from "react";
import "./SliderCard.css";
import { SMALL_IMG_BASE_URL } from "../../utils/constants";
import { BookmarkPlus, Star } from "lucide-react";
import { Link } from "react-router-dom";

const SliderCard = ({ type, item }) => {
  if (type === "people")
    return (
      <div className="slider-card-people">
        <img src={item.profile_path ? `${SMALL_IMG_BASE_URL}${item.profile_path}` : "/profile.png"} alt="person" />

        <div>
          <p>{item.name}</p>
          <p>
            Rank: <span>#{Math.round(item.popularity)}</span>
          </p>
        </div>
      </div>
    );

  return (
    <Link to={`/detail/${type}/${item.id}`} className="slider-card">
      <div className="slider-card-content">
      <img src={item.poster_path ? `${SMALL_IMG_BASE_URL}${item.poster_path}`: "/noposter.png"} alt="poster" />
      <div className="bookmark">
        <BookmarkPlus />
      </div>

      <div className="slider-card-details">
        <div className="rating">
           <img src="/star.png" alt="star" width={17} height={17}/>
           <p>{item.vote_average.toFixed(1)}</p>
           <div style={{marginLeft:"20px"}}><Star color="#5799ef" size={15}/></div>
        </div>
        <h3>{item.title || item.name}</h3>
        
      </div>
      </div>
    </Link>
  );
};

export default SliderCard;
