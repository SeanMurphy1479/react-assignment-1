import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import { CardContent } from "@mui/material";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};

const chip = { margin: 0.5 };

const ActorDetails = ({ actor, movies }) => {
  return (
    <>
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt={actor.name}
              src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : "/path/to/default/avatar.jpg"}
              sx={{ width: 150, height: 150 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4">{actor.name}</Typography>
            <Typography variant="h6" color="textSecondary">
              Known For: {actor.known_for_department}
            </Typography>
            <Typography variant="body1">{actor.biography}</Typography>
            <Typography variant="body2" color="textSecondary">
              Date of Birth: {actor.birthday} - Place of Birth: {actor.place_of_birth}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Appears In:
      </Typography>
      
      <Grid container spacing={2}>
        {movies.length > 0 ? (
          movies.slice(0,20).map((movie) => (
            <Grid item key={movie.id} xs={6} sm={4} md={3}>
              <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
                <Card sx={{ maxWidth: 150, margin: 1 }}>
                  <CardMedia
                    sx={{ height: 225 }}
                    image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : img}
                    title={movie.title}
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
            </Grid>
          ))
        ) : (
          <Typography>No movies found for this actor.</Typography>
        )}
      </Grid>
    </>
  );
};

export default ActorDetails;
