import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import Saved_drawer from "../../components/Saved_drawer/Saved_drawer";
import { motion } from "framer-motion";
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
      params: { limit: "5" },
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

  // TODO: search function

  return (
    <div>
      <input placeholder="Search"></input>
      <Button onClick={toggleDrawer(true)}>Saved</Button>
      <Drawer anchor={"right"} open={drawerState} onClose={toggleDrawer(false)}>
        <Saved_drawer />
      </Drawer>

      <div>
        <h2>Newly Released</h2>
        <motion.div className="carousel">
          <motion.div className="inner-carousel"></motion.div>
        </motion.div>
        {hasNewMovies === true &&
          newMovies.map((newMovie) => {
            <div>
              <h2>Hello</h2>
              <h1>{newMovie.titleText.text}</h1>
            </div>;
          })}
        {/* console.log(newMovie.primaryImage.url); */}
      </div>
    </div>
  );
}
