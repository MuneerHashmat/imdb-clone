import { ORIGINAL_IMG_BASE_URL } from "../../utils/constants"
import "./CarouselCard.css"

const CarouselCard = ({item}) => {
    console.log(item)
  return (
    <div 
    style={{backgroundImage: `linear-gradient(180deg,transparent 0,transparent 65%,rgba(0,0,0,.35) 83.5%,rgba(0,0,0,.75)), url(${ORIGINAL_IMG_BASE_URL}${item.backdrop_path})`}}
    className="carousel-card-container"></div>
  )
}

export default CarouselCard