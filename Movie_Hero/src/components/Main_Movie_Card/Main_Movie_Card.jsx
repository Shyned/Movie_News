import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import no_image from "../../assets/no_image.jpg";
import { useNavigate } from "react-router-dom";

export default function MainMovieCard({ searches }) {
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  const [hasMovieResults, setHasMovieResults] = useState(false);
  const navigate = useNavigate();
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
    <div>
      {hasMovieResults === true ? (
        <Carousel>
          {movieSearchResults.map((resultedMovie, i) => {
            return (
              <div>
                <img
                  className="border-8 border-black"
                  key={resultedMovie.id}
                  src={
                    resultedMovie.primaryImage === null
                      ? no_image
                      : resultedMovie.primaryImage.url
                  }
                />
                <div className="">
                  <h3 className="font-bold">{resultedMovie.titleText.text}</h3>

                  <button
                    className="ml-10  hover:drop-shadow-xl hover:scale-[1.2] ease-in-out duration-500"
                    onClick={() => navigate("/searched")}
                  >
                    <img src="https://img.icons8.com/3d-plastilina/69/null/plus--v2.png" />
                  </button>
                </div>
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
