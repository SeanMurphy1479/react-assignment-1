import React from "react";
import Grid from "@mui/material/Grid2";
<<<<<<< HEAD

const HomePage = (props) => {
<<<<<<< HEAD
  const movies = props.movies;
=======
  //const movies = props.movies;
>>>>>>> 12f25ef17baf7c0bc55f2521dfc693cb7c3bd194
=======
import MovieCard from '../components/movieCard'

const HomePage = (props) => {
  const movies = props.movies;
>>>>>>> a2bdbd2 (Movie card component created)
    
  return (
  <Grid container>
      <Grid size={12}>
          <h1> HomePage </h1>
      </Grid>
<<<<<<< HEAD
=======
      <Grid size={3}>
        <MovieCard movie={movies[0]} />
      </Grid>
>>>>>>> a2bdbd2 (Movie card component created)
    </Grid>
  );
};
export default HomePage;