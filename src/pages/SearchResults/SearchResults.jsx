import { useEffect, useState } from "react";
import "./SearchResults.css";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    console.log(query);
    setSearchQuery(query || "");
  }, [location.search]);

  return <div className="search-results-container">SearchResults</div>;
};

export default SearchResults;
