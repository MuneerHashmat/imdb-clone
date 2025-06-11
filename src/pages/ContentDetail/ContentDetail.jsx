import { useParams } from "react-router-dom";
import "./ContentDetail.css";
import { useEffect, useState } from "react";
import { fetchDataFromTMDB } from "./../../api/tmdb";
import toast from "react-hot-toast";

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
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Details not found");
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

    return (
      <div className="content-detail-container">
        <h2>{type} id {id}</h2>
      </div>
    )
};

export default ContentDetail;
