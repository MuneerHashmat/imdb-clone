import { useParams } from "react-router-dom";
import "./ContentDetail.css";
import { useEffect, useState } from "react";
import { fetchDataFromTMDB } from "./../../api/tmdb";
import {
  ORIGINAL_IMG_BASE_URL,
  SMALL_IMG_BASE_URL,
} from "./../../utils/constants";
import { formatTime } from "../../utils/utilityFunctions";

const ContentDetail = () => {
  const { type, id } = useParams();
  const [details, setDetails] = useState(null);
  const [trailers, setTrailers] = useState([]);
  const [similarContent, setSimilarContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const [detailsData, trailerData, similarContentData] = await Promise.all([
        fetchDataFromTMDB(`/${type}/${id}?language=en-US`),
        fetchDataFromTMDB(`/${type}/${id}/videos?language=en-US`),
        fetchDataFromTMDB(`/${type}/${id}/similar?language=en-US&page=1`),
      ]);
      setDetails(detailsData);
      setTrailers(trailerData.results);
      setSimilarContent(similarContentData.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, id]);

  if (loading)
    return (
      <div className=".content-detail-container">
        <div className="content-detail-skeliton shimmer"></div>
      </div>
    );

  if (!details && trailers.length == 0 && similarContent.length == 0)
    return (
      <div className="content-detail-container">
        <h2 style={{ textAlign: "center" }}>Details not Found {": ("}</h2>
      </div>
    );

  return (
    <div className="content-detail-container">
      <div className="content-detail-main">
        <div
          className="backdrop"
          style={
            details.backdrop_path && {
              display: "block",
              backgroundImage: `url(${ORIGINAL_IMG_BASE_URL}${details.backdrop_path})`,
            }
          }
        ></div>
        <div className="details">
          <div className="poster">
            <img
              src={
                details.poster_path
                  ? `${SMALL_IMG_BASE_URL}${details.poster_path}`
                  : "/noposter.png"
              }
              alt="poster"
            />
          </div>
          <div className="main-details">
            <div className="basic-details">
              <div className="title-and-tagline">
                <h1>{details?.title || details?.name}</h1>
                <p style={{ color: "#bdbdbd" }}>{details.tagline || ""}</p>
              </div>
              <div className="general">
                <p>{type == "tv" ? "TV Show" : "Movie"}</p>
                <span>|</span>
                <p>
                  {type == "movie"
                    ? details.release_date.slice(0, 4)
                    : details.first_air_date.slice(0, 4)}
                </p>
                <span>|</span>
                <p
                  style={{
                    color: details.adult ? "red" : "green",
                  }}
                >
                  {details.adult ? "18+" : "PG-13"}
                </p>
                <span>|</span>
                {details.vote_average && (
                  <p
                  style={{
                    color:"#f5c518"
                  }}><img src="/star.png" alt="star" width={15}/>{details.vote_average.toFixed(1)}</p>
                )}
              </div>

              <div className="genres">
                {details.genres && details.genres.map((item)=>(
                  <div key={item.id}>{item.name}</div>
                ))}
              </div>
            </div>
            <p className="overview">{details.overview || "No Overview"}</p>
           <div className="other-details">
             {details.status && (
              <div className="other-details-item">
                <div>
                <p>Status: <span>{details.status}</span></p>
                {details.runtime && (
                  <>
                    <p>|</p>
                    <p>Runtime: <span>{formatTime(details.runtime)}</span></p>
                  </>
                )}
                </div>
              </div>
            )}
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
