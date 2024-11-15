import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import { getCredits, getRecommendedMovies } from "../../api/tmdb-api";
import CastCard from "../castCard";
import { useQuery } from "react-query"; 
import Spinner from '../spinner';
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

const MovieDetails = ({ movie }) => {  
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {data: credits, isLoading, isError} = useQuery(["movieCredits", movie.id], () => getCredits(movie.id));

  const {data: reccomendations, isRLoading, isRError} = useQuery(["movieRecommendation", movie.id], () => getRecommendedMovies(movie.id));

  if (isLoading || isRLoading) {
    return <Spinner />;
  } 

  if (isError) {
    return <Typography>Error loading credits</Typography>;
  }

  if ( isRError) {
    return <Typography>Error loading reccomendations</Typography>
  }
 
  const cast = credits.cast;

  const reccomendation = reccomendations?.results || [];

    return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}

      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      <Paper component="ul" sx={{...root}}>
      <li>
          <Chip label="Production Countries" sx={{...chip}}
          color="primary"/>
        </li>
        {movie.production_countries.map((countries) => (
          <li key={countries.name}>
            <Chip label={countries.name} sx={{...chip}} />
          </li>
        ))}
        </Paper>
        <Paper>
        <Typography variant="h6" component="h4" sx={{ marginTop: 3 }}>
        Cast
        </Typography>
        <Grid container spacing={2}>
          {cast.slice(0,10).map((castMember) => (
            <Grid item key={castMember.id} xs={12} sm={6} md={4} lg={3}>
              <CastCard cast={castMember} />
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Reccomendations:
      </Typography>
      <Paper>
        <Grid container spacing={2}>
          {reccomendation.slice(0, 15).map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <SmallMovieCard movie={movie} />
        </Grid>
        ))}
        </Grid>
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;