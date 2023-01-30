import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
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
    }
    Upcoming_Movies();

    async function MainCardListOptions() {
      const optionsforlist = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/utils/lists",
        headers: {
          "X-RapidAPI-Key":
            "f635c5492emshb2e6721adc62d5fp1c5272jsn1187fe17f294",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
      const response = await axios.request(optionsforlist);
      setMainCardList(response.data.results);
    }

    MainCardListOptions();
    setHasNewMovies(true);
  }, []);

  return (
    <div>
      <Search />
      <Button onClick={toggleDrawer(true)}>Saved</Button>
      <Drawer anchor={"right"} open={drawerState} onClose={toggleDrawer(false)}>
        <Saved_drawer />
      </Drawer>

      <p className="text-2xl">To be released</p>
      {hasNewMovies ? (
        <Carousel className="w-2/12 border-2 content-center">
          {newMovies.map((newMovie) => {
            return (
              <New_Release_Card
                title={newMovie.titleText.text}
                releaseDate={[
                  newMovie.releaseDate.month,
                  newMovie.releaseDate.day,
                  newMovie.releaseDate.year,
                ]}
                image={newMovie.primaryImage}
                key={newMovie.id}
              />
            );
          })}
        </Carousel>
      ) : (
        <></>
      )}
      <div>{hasNewMovies ? <MainMovieCard /> : <></>}</div>
    </div>
  );
}
