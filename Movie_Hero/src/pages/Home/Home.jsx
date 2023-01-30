import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import Saved_drawer from "../../components/Saved_drawer/Saved_drawer";
import { motion } from "framer-motion";
import New_Release_Card from "../../components/New_Release_Card/New_Release_Card";
import Carousel from "react-material-ui-carousel";
export default function Home() {
  const [open, setOpen] = useState(false);
  const [hasNewMovies, setHasNewMovies] = useState(false);
  const [placement, setPlacement] = useState();
  const [newMovies, setNewMovies] = useState({});
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setDrawerState(open);
  };
  useEffect(() => {
    const options = {
      method: "GET",
      url: import.meta.env.VITE_UPCOMING_URL,
      params: { limit: "9" },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_MOVIE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_MOVIE_API,
      },
    };
    async function Upcoming_Movies() {
      const response = await axios.request(options);
      setNewMovies(response.data.results);
      setHasNewMovies(true);
    }
    Upcoming_Movies();
  }, []);

  return (
    <div>
      <input placeholder="Search"></input>
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
      <div></div>
    </div>
  );
}
