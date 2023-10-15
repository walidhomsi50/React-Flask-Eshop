import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import {Item} from "@mui/material";


const MovieCard = ({ movie }) => {
  //const navigate=useNavigate();

  const goTomovieDetails = () => {
    //navigate('/moviedet');
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
    <CardMedia
      sx={{ height: 180 }}
      image={movie.Poster}
      title={movie.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {movie.Title}p
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {movie.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Year: {movie.Year}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      imdb ID: {movie.imdbID}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>

);
}
export default MovieCard;
