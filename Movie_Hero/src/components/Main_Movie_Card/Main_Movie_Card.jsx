import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import no_image from "../../assets/no_image.jpg";

export default function MainMovieCard({ searches }) {
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  const [hasMovieResults, setHasMovieResults] = useState(false);
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
        setHasMovieResults(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className=" ">
      {hasMovieResults === true ? (
        <Carousel className="">
          {movieSearchResults.map((resultedMovie, i) => {
            return (
              <div className="">
                <img
                  key={resultedMovie.id}
                  width={200}
                  height={"auto"}
                  src={
                    resultedMovie.primaryImage === null
                      ? no_image
                      : resultedMovie.primaryImage.url
                  }
                />
                <h3>{resultedMovie.titleText.text}</h3>
                <h3>
                  {resultedMovie.releaseDate !== null
                    ? resultedMovie.releaseDate.year
                    : "No date Available"}
                </h3>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <div></div>
      )}
    </div>
  );
}
