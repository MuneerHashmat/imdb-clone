import { useEffect, useRef, useState } from "react";
import "./SearchResults.css";
import { useLocation } from "react-router-dom";
import { fetchDataFromTMDB } from "./../../api/tmdb";
import SearchResultCard from "../../components/SearchResultCard/SearchResultCard";

const SearchResults = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  let totalPagesRef = useRef(null);

  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      const data = await fetchDataFromTMDB(
        `/search/multi?query=${searchQuery}&include_adult=false&language=en-US&page=${currPage}`
      );
      console.log(data);
      setSearchResults(data);
      if (totalPagesRef.current === null && data.total_pages) {
        totalPagesRef.current = data.total_pages;
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    setSearchQuery(query || "");
  }, [location.search]);

  useEffect(() => {
    console.log(searchQuery);
    console.log(totalPagesRef.current);
    totalPagesRef.current = null;
    if (currPage == 1) {
      fetchSearchResults();
    }
    setCurrPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetchSearchResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPage]);

  if (loading || searchResults === null)
    return (
      <div className="search-results-container">
        <h3  style={{ textAlign: "center" }}>Search results for "{searchQuery}"</h3>
        <div className="search-results-content">
          {new Array(8).fill(0).map((item, idx) => (
            <div key={idx} className="skeliton-item shimmer"></div>
          ))}
        </div>
      </div>
    );

  if (searchResults.results.length == 0)
    return (
      <div className="search-results-container">
        <h1 style={{ textAlign: "center" }}>No Results {":("}</h1>
      </div>
    );
  return (
    <div className="search-results-container">
    <h3  style={{ textAlign: "center" }}>Search results for "{searchQuery}"</h3>
      <div 
      style={{justifyContent: searchResults.results.length<4 ? "flex-start":"center"}}
      className="search-results-content">
        {searchResults.results.map((item) => (
          <SearchResultCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
