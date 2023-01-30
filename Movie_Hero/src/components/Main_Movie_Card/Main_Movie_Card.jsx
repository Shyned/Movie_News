import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export default function MainMovieCard({ searches }) {
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles",
      params: { list: searches },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_MOVIE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_MOVIE_API,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovieSearchResults(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {movieSearchResults.map((resultedMovie) => {
        console.log(resultedMovie.primaryImage);
      })}
    </div>
  );
}
