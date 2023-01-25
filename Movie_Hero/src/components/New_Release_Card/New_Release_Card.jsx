import no_image from "../../assets/no_image.jpg";
export default function New_Release_Card(title, releaseDate, image, key) {
  return (
    <div>
      <img src={image == null ? no_image : image} alt={title}></img>
    </div>
  );
}
