import no_image from "../../assets/no_image.jpg";
export default function New_Release_Card({ title, releaseDate, image, key }) {
  console.log(releaseDate[0], releaseDate[1], releaseDate[2]);

  return (
    <div className="flex-col w-1/12">
      <img src={image == null ? no_image : image} alt={title} />
      <h3>{title}</h3>
      <h3>Release Date</h3>
      <h3>
        {releaseDate[0]} /{releaseDate[1]} /{releaseDate[2]}
      </h3>
    </div>
  );
}
