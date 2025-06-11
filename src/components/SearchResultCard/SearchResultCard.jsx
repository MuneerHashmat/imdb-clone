import { Link } from "react-router-dom"
import { SMALL_IMG_BASE_URL } from "../../utils/constants"
import "./SearchResultCard.css"

const SearchResultCard = ({item}) => {
    if(item.media_type=="person") return (
        <div className="result-card">
            <div className="result-card-content">
                <img src={ item.profile_path ? `${SMALL_IMG_BASE_URL}${item.profile_path}` : "/profile.png"} alt="profile" />

                <div className="result-card-details">
                    <p>Type: <span>Person</span></p>
                    <h3>{item.name}</h3>
                </div>
            </div>
        </div>
    )
  return (
    <Link to={`/detail/${item.media_type}/${item.id}`} className="result-card">
            <div className="result-card-content">
                <img src={item.poster_path ? `${SMALL_IMG_BASE_URL}${item.poster_path}` :"/poster.png"} alt="poster" />

                <div className="result-card-details">
                    <p>Type: <span>{item.media_type=="movie" ? "Movie" : "TV show"}</span></p>
                    <h3>{item.name || item.title}</h3>
                </div>
            </div>
        </Link>
  )
}

export default SearchResultCard