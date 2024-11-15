import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import img from '../../images/film-poster-placeholder.png';
import { CardContent } from "@mui/material";

const SmallMovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 150, margin: 1 }}>
        <CardMedia
          sx={{ height: 225 }}
          image={
            movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: img }
        />
        <CardContent>
            <Typography variant="subtitle1" component="p" noWrap>
              {movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {movie.release_date || "Unknown Date"}
            </Typography>
          </CardContent>
      </Card>
    </Link>
  );
};

export default SmallMovieCard;