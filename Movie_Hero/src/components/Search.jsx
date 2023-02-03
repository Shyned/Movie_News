import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function Search() {
  const [genres, setGenres] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState(true);
  const [open, setOpen] = useState(false);
  const [serachResults, setSearchResults] = useState({});
  const [searchTitle, setSearchTitle] = useState("");
  const [loadingResults, setLoadingResults] = useState(false);

  async function search() {
    const options = {
      method: "GET",
      url: "https://movie-database-alternative.p.rapidapi.com/",
      params: { s: `${searchTitle}`, r: "json", page: "1" },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_MOVIE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_ALTER_MOVIE_API,
      },
    };
    const response = await axios.request(options);
    console.log(response.data);
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    height: "85%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="space-x-1.5 ">
      <Button onClick={handleOpen}>Search</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <input
            placeholder="Search"
            onChange={(event) => {
              setSearchTitle(event.target.value);
            }}
          />

          <button>Find</button>
        </Box>
      </Modal>
    </div>
  );
}
