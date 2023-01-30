import axios from "axios";
import { useEffect, useState } from "react";

export default function Search() {
  const [genres, setGenres] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState(true);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/utils/genres",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_MOVIE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_MOVIE_API,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setGenres(response.data.results);
        setLoadingGenres(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="space-x-1.5 ">
      <input placeholder="Search" />
      <select name="cars" id="cars">
        {loadingGenres == false ? (
          genres.map((genre) => {
            return <option value={genre}>{genre}</option>;
          })
        ) : (
          <option></option>
        )}
      </select>
    </div>
  );
}
