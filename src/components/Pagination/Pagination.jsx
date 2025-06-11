import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPages } from "../../utils/utilityFunctions";
import "./Pagination.css";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pages = getPages(totalPages, currentPage);
  return (
    <div className="pages-container">
      <button
        disabled={currentPage == 1 ? true : false}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="page-button"
        style={{ cursor: currentPage==1 && "not-allowed" }}
      >
        <ChevronLeft color={currentPage == 1 ? "gray" : "white"}/>
      </button>
      {pages.map((page, index) =>
        page === "..." ? (
          <p key={index}>{page}</p>
        ) : (
          <button
            key={index}
            className="page"
            style={{
              backgroundColor: page == currentPage ? "#f5c518" : null
            }}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        )
      )}
      <button
        disabled={currentPage == totalPages ? true : false}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="page-button"
        style={{ cursor: currentPage==totalPages && "not-allowed" }}
      >
        <ChevronRight color={currentPage == totalPages ? "gray" : "white"}/>
      </button>
    </div>
  );
};

export default Pagination;
