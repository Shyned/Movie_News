import { useState, useEffect } from "react";
import no_image from "../../assets/no_image.jpg";
import { Skeleton } from "@mui/material";

export default function New_Release_Card({ title, releaseDate, image }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <Skeleton variant="rectangular" width={210} height={60} />
      ) : (
        <div className="">
          <img src={image == null ? no_image : image.url} alt={title} />
          <h3>{title}</h3>
          <h3>Release Date</h3>
          <h3>
            {releaseDate[0]} /{releaseDate[1]} /{releaseDate[2]}
          </h3>
        </div>
      )}
    </div>
  );
}
