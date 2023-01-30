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
        "X-RapidAPI-Key": "f635c5492emshb2e6721adc62d5fp1c5272jsn1187fe17f294",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
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
    <div>
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
