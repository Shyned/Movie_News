import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Skeleton } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const [genres, setGenres] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState(true);
  const [open, setOpen] = useState(false);
  const [serachResults, setSearchResults] = useState({});
  const [searchTitle, setSearchTitle] = useState("");
  const [loadingResults, setLoadingResults] = useState(true);
  const navigate = useNavigate();

  async function search(event) {
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
    setSearchResults(response.data.Search);
    document.getElementById("search").value = " ";
    setLoadingResults(false);
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
  const [tester, setTester] = useState("");

  return (
    <div className="space-x-1.5 ">
      <button
        onClick={handleOpen}
        className="hover:scale-125 hover:border-8 hover:border-black rounded-md bg-red-400"
      >
        Search
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <input
            className="border-4 border-black "
            id="search"
            placeholder="Search"
            onChange={(event) => {
              setSearchTitle(event.target.value);
            }}
          />

          <button
            onClick={search}
            className="border-4 border-black hover:bg-black hover:border-slate-200 hover:text-slate-200 w-1/12 rounded-md ml-5"
          >
            Find
          </button>
          <div className="w-9/12 mt-20 h-9/12 ml-auto mr-auto">
            {loadingResults === true ? (
              <Skeleton className="w-5/12" />
            ) : serachResults == undefined ? (
              <h1>No results were found</h1>
            ) : (
              <Carousel className="w-6/12 border-4 border-black bg-slate-200 ">
                {serachResults.map((result) => {
                  return (
                    <div
                      key={result.imdbID}
                      className="w-full h-auto hover:bg-white flex"
                    >
                      <img
                        width={"50%"}
                        className=""
                        src={result.Poster !== null ? result.Poster : ""}
                        alt="movie poster image"
                        key={result.id}
                      />
                      <div className="space-y-20">
                        <p className="font-bold">{result.Title}</p>

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
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
