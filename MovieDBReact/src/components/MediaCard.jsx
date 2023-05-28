import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import lizard from "../assets/images/Lizardpix.jpg"

const MediaCard = (props) => {
    let styles = {
        height: 200,
        boarder: "solid red 5px"
    }

    const {title, image_path, overview, poster_path} = props.data

    let baseUrl = "https://image.tmdb.org/t/p/w500"

  return (
    <Card sx={{ maxWidth: 300,  display: "inline-table" }}>
      <CardMedia
        sx = {styles}
        image = {`${baseUrl}/${poster_path}`}
        title = {title}
      />
      <CardContent sx={{height: 100, overflowY: "auto"}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard