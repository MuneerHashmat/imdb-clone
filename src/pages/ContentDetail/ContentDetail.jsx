import { useParams } from "react-router-dom";
import "./ContentDetail.css";
import { useEffect, useState } from "react";
import { fetchDataFromTMDB } from "./../../api/tmdb";
import { ORIGINAL_IMG_BASE_URL, SMALL_IMG_BASE_URL } from "./../../utils/constants";

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
        <div className="details">
          <div className="basic-details">
            <h1>{details?.title || details?.name}</h1>
            <div>
            <p>{type=="tv" ? "TV Show" : "Movie"}</p><span>|</span>
            <p>{type=="movie" ? details.release_date.slice(0,4) : details.first_air_date.slice(0,4)}</p><span>|</span>
            <p
            style={{
              color: details.adult ? "red" :"green"
            }}
            >{details.adult ? "18+" : "PG-13"}</p>
            </div>
          </div>
          <div className="poster-and-trailers">
            <img src={details.poster_path ? `${SMALL_IMG_BASE_URL}${details.poster_path}` : "/poster.png"} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
