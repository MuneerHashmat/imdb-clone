import { SMALL_IMG_BASE_URL } from "../../utils/constants";
import "../SliderCard/SliderCard.css";

const CastSliderCard = ({ item }) => {
  return (
    <div className="slider-card-people">
      <img src={item.profile_path ? `${SMALL_IMG_BASE_URL}${item.profile_path}`: "/profile.png"} alt="person" />

      <div>
        <p>{item.name}</p>
      </div>
    </div>
  );
};

export default CastSliderCard;
