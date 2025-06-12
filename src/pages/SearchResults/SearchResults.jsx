import { useEffect, useRef, useState } from "react";
import "./SearchResults.css";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchDataFromTMDB } from "./../../api/tmdb";
import SearchResultCard from "../../components/SearchResultCard/SearchResultCard";
import Pagination from "../../components/Pagination/Pagination";
import { isPresentInSessionStorage, saveToSessionStorage } from "../../utils/utilityFunctions";

const SearchResults = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  let totalPagesRef = useRef(null);
  

  const fetchSearchResults = async () => {
    setLoading(true);
    const query=searchQuery.toLowerCase();
    try {
      const data = await fetchDataFromTMDB(
        `/search/multi?query=${query}&include_adult=false&language=en-US&page=${currPage}`
      );
      setSearchResults(data);
      if (totalPagesRef.current === null && data.total_pages) {
        totalPagesRef.current = data.total_pages;
      }
      saveToSessionStorage(query, data)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchResults=()=>{
    const query=searchQuery.toLowerCase();
    const item=isPresentInSessionStorage(query,currPage);
    if(item){
      setSearchResults(item)
       if (totalPagesRef.current === null && item.total_pages) {
        totalPagesRef.current = item.total_pages;
      }
    }
    else{
      fetchSearchResults();
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
     const pageFromUrl = parseInt(params.get("page")) || 1;
    setSearchQuery(query || "");
    setCurrPage(pageFromUrl)
  }, [location.search]);

  useEffect(() => {
    console.log(searchQuery);
    console.log(totalPagesRef.current);
    totalPagesRef.current = null;
    if (currPage == 1) {
      fetchResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.length > 0 && currPage !== null) {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("page", currPage);
    navigate(`${location.pathname}?${queryParams.toString()}`, { replace: true });

    fetchResults();
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPage]);

  return (
    <div className="search-results-container">
      {loading || searchResults?.results.length > 0 ? (
        <h3 style={{ textAlign: "center" }}>
          Search results for "{searchQuery}"
        </h3>
      ) : (
        <h1 style={{ textAlign: "center" }}>No Results {":("}</h1>
      )}

      {loading || searchResults === null ? (
        <div className="search-results-content">
          {new Array(20).fill(0).map((item, idx) => (
            <div key={idx} className="skeliton-item shimmer"></div>
          ))}
        </div>
      ) : (
        <div
          style={{
            justifyContent:
              searchResults.results.length < 4 ? "flex-start" : "center",
          }}
          className="search-results-content"
        >
          {searchResults.results.map((item) => (
            <SearchResultCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {totalPagesRef.current && searchResults?.total_pages > 1 && (
        <Pagination
          totalPages={totalPagesRef.current}
          currentPage={currPage}
          setCurrentPage={setCurrPage}
        />
      )}
    </div>
  );
};

export default SearchResults;
