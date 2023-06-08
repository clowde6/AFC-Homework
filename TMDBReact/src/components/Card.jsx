// Functional Import
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

//Styling Import
import Typography from "@mui/material/Typography";
import error_img from "../assets/images/error_tag.jpeg";

const MediaCard = (props) => {
  const { title, overview, poster_path } = props.data; // Destructure the data props to extract title, overview, and poster_path
  let baseUrl = "https://image.tmdb.org/t/p/w500"; // Define the base URL for fetching movie poster images

  return (
    <Card
      sx={{
        width: "calc(30% - 16px)", // Set the width to 30% minus the horizontal margins (16px)
        display: "inline-block",
        borderRadius: "8px",
        objectFit: "scale-down",
        margin: "8px", // Add horizontal margins
      }}
    >
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "100%", // Maintain a square aspect ratio
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        // Set the image source to either the poster_path or the error image //
        image={poster_path === null ? error_img : `${baseUrl}/${poster_path}`}
        title={title} // Set the image title to the movie title
      />
      <CardContent sx={{ height: 250, overflowY: "scroll" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
