import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatch from '../components/cardIcons/addToWatch'
import Spinner from '../components/spinner';
import { useQuery } from "react-query";

const upcomingMovies = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movies, setMovies] = useState([]);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 

  const upcomingMovies = data.results;

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToWatch movie={movie} />
      }}
    />
  );
};
export default upcomingMovies;