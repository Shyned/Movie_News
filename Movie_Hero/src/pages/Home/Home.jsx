import { useEffect, useState } from "react";
import { Drawer, Skeleton } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import Saved_drawer from "../../components/Saved_drawer/Saved_drawer";
import { motion } from "framer-motion";
import New_Release_Card from "../../components/New_Release_Card/New_Release_Card";
import Carousel from "react-material-ui-carousel";
import Search from "../../components/Search";
import MainMovieCard from "../../components/Main_Movie_Card/Main_Movie_Card";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [hasNewMovies, setHasNewMovies] = useState(false);
  const [placement, setPlacement] = useState();
  const [newMovies, setNewMovies] = useState({});
  const [drawerState, setDrawerState] = useState(false);
  const [mainCardList, setMainCardList] = useState([]);

  const toggleDrawer = (open) => (event) => {
    setDrawerState(open);
  };
  useEffect(() => {
    async function Upcoming_Movies() {
      const options = {
        method: "GET",
        url: import.meta.env.VITE_UPCOMING_URL,
        params: { limit: "9" },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_MOVIE_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_MOVIE_API,
        },
      };
      const response = await axios.request(options);
      setNewMovies(response.data.results);
      setHasNewMovies(true);
    }
    Upcoming_Movies();

    async function MainCardListOptions() {
      const optionsforlist = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/utils/lists",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_MOVIE_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_MOVIE_API,
        },
      };
      const response = await axios.request(optionsforlist);
      setMainCardList(response.data.results);
    }

    MainCardListOptions();
  }, []);

  return (
    <div>
      <Search />

      <div className="mb-8 ">
        <div className=" bg-slate-900  w-4/12 mr-auto ml-auto">
          <p className="text-2xl ml-20 text-white font-bold">
            Soon To Be Released
          </p>
        </div>
        {hasNewMovies ? (
          <Carousel className="w-2/12 border-4 mt-4 ml-auto mr-auto bg-slate-50 hover:scale-105 ease-in-out duration-500 p-2 rounded-md border-black ">
            {newMovies.map((newMovie, i) => {
              return (
                <New_Release_Card
                  className="bg-orange-50 hover:drop-shadow-2xl "
                  key={(i = i + 1)}
                  title={newMovie.titleText.text}
                  releaseDate={[
                    newMovie.releaseDate.month,
                    newMovie.releaseDate.day,
                    newMovie.releaseDate.year,
                  ]}
                  image={newMovie.primaryImage}
                />
              );
            })}
          </Carousel>
        ) : (
          <Skeleton />
        )}
      </div>
      <div className="items-center flex space-x-12 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth pb-8 z-10">
        {hasNewMovies ? (
          mainCardList.map((mainCardItem, i) => {
            return (
              <div className="font-bold bg-slate-300 inline-block p-2 cursor-pointer hover:drop-shadow-2xl hover:saturate-200 hover:border-8 hover:border-white ease-in-out duration-500 w-72 min-h-80 hover:z-50 rounded-md border-4 border-black ">
                <h2 key={(i = i + 1)}>
                  {mainCardItem === "most_pop_movies"
                    ? "Popular Movies"
                    : mainCardItem === "most_pop_series"
                    ? "Popular series"
                    : mainCardItem === "top_boxoffice_200"
                    ? "Top Box office"
                    : mainCardItem === "top_boxoffice_last_weekend_10"
                    ? "Weekend Movies"
                    : mainCardItem === "top_rated_250"
                    ? "Top 10 movies"
                    : mainCardItem === "top_rated_english_250"
                    ? "Top English movies"
                    : mainCardItem === "top_rated_lowest_100"
                    ? "Lowest rated movies"
                    : mainCardItem === "top_rated_series_250"
                    ? "Top Series"
                    : "Movies"}
                </h2>
                <MainMovieCard searches={mainCardItem} key={(i = i + 1)} />
              </div>
            );
          })
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
}
