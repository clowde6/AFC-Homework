import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Card = (props) => {
    let styles = {
        height: 250,
        border: "solid green 5px"
    }

const {title, image_path, overview, poster_path} = props.data
let baseUrl = "https://image.tmdb.org/t/p/w500"
console.log(image_path)

  return (
    <Card sx={{ maxWidth: 300, display: "inline-block" }}>
      <CardMedia
        // sx={{ height: 400 }}
        sx={styles}
        image={`${baseUrl}/${poster_path}`}
        title={title}
      />
      <CardContent sx={{height: 100, overflowY: "auto"}}>
        <Typography gutterBottom variant="h5" component="div" >
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

export default Card;