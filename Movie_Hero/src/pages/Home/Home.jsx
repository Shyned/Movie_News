import { useEffect, useState } from "react";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import axios from "axios";
import Saved_drawer from "../../components/Saved_drawer/Saved_drawer";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [hasNewMovies, setHasNewMovies] = useState(false);
  const [placement, setPlacement] = useState();
  const [newMovies, setNewMovies] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
      params: { limit: "5" },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_MOVIE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_MOVIE_API,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setNewMovies(response.data);
        setHasNewMovies(true);
        console.log(newMovies.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, newMovies);

  // TODO: search function

  return (
    <div>
      <input placeholder="Search"></input>
      <ButtonToolbar>
        <Button onClick={() => setOpen(true)}>Favorited</Button>
      </ButtonToolbar>
      <Drawer placement="right" open={open} onClose={() => setOpen(false)}>
        <Drawer.Body>
          <Saved_drawer />
        </Drawer.Body>
      </Drawer>
      <div></div>
    </div>
  );
}
