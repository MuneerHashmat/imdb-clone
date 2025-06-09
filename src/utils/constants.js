export const RESPONSIVE = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export const SMALL_IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const ORIGINAL_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

export const SLIDERS=[
  {
    title: "Popular Movies",
    type: "popular-movies",
    endpoint:"/movie/popular?language=en-US&page=1"
  },
  {
    title: "Top Rated Movies",
    type: "top-rated-movies",
    endpoint:"/movie/top_rated?language=en-US&page=1"
  },
  {
    title: "Popular TV Shows",
    type: "popular-tv",
    endpoint:"/tv/popular?language=en-US&page=1"
  },
  {
    title: "Top Rated TV shows",
    type: "top-rated-tv",
    endpoint:"/tv/top_rated?language=en-US&page=1"
  }

]
