import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import no_image from "../../assets/no_image.jpg";

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
        return (
          <Carousel>
            <img
              src={
                resultedMovie.primaryImage === null
                  ? no_image
                  : resultedMovie.primaryImage.url
              }
            ></img>
          </Carousel>
        );
      })}
    </div>
  );
}
