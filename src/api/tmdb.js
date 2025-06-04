export const fetchDataFromTMDB = async (endpoint) => {
  const baseUrl = "https://api.themoviedb.org/3";
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
    },
  };
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


