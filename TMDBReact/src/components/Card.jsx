import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import error_img from "../assets/images/error_tag.jpeg";

const MediaCard = (props) => {
  const { title, overview, poster_path } = props.data;
  let baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Card
      sx={{
        maxWidth: 400, // Set the maximum width of the card
        height: 600, // Set the height of the card
        display: "inline-block",
        borderRadius: "8px",
        objectFit: "scale-down",
      }}
    >
      <CardMedia
        sx={{
          height: "60%", // Set the height of the media
          width: "100%",
          objectFit: "cover",
        }}
        image={poster_path === null ? error_img : `${baseUrl}/${poster_path}`}
        title={title}
      />
      <CardContent sx={{ height: 300, overflowY: "scroll" }}>
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
