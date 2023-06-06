import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActions, useTheme } from "@mui/material";
import error_img from "../assets/images/error_tag.jpeg";

const MediaCard = (props) => {
  console.log(props);

  const { title, image_path, overview, poster_path } = props.data;
  let baseUrl = "https://image.tmdb.org/t/p/w500";
  console.log(image_path);

  return (
    <Card sx={{ maxWidth: 400, display: "inline-block" }}>
      <CardMedia
        sx={{ height: 400 }}
        image={poster_path === null ? error_img : `${baseUrl}/${poster_path}`}
        title={title}
      />
      <CardContent sx={{ height: 200, overflowY: "auto" }}>
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
