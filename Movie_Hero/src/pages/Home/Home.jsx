import { useEffect, useState } from "react";

import axios from "axios";
import Saved_drawer from "../../components/Saved_drawer/Saved_drawer";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [hasNewMovies, setHasNewMovies] = useState(false);
  const [placement, setPlacement] = useState();
  const [newMovies, setNewMovies] = useState({});

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
      {/* <ButtonToolbar>
        <Button onClick={() => setOpen(true)}>Favorite</Button>
      </ButtonToolbar>
      <Drawer placement="right" open={open} onClose={() => setOpen(false)}>
        <Drawer.Body>
          <Saved_drawer />
        </Drawer.Body>
      </Drawer> */}
      <div>
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
