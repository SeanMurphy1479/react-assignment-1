import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import SmallMovieCard from "../smallMovieCard"; 

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
      <Paper>
        <Grid container spacing={2}>
          {movies.slice(0, 20).map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <SmallMovieCard movie={movie} />
        </Grid>
        ))}
        </Grid>
      </Paper>
    </>
  );
};

export default ActorDetails;
