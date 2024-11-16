import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatch from '../components/cardIcons/addToWatch'
import Spinner from '../components/spinner';
import { useQuery } from "react-query";
import { Pagination } from "@mui/material";

const UpcomingMovies = (props) => {
  const [page, setPage] = useState(1);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading, isError } = useQuery(['upcoming',page],() => getUpcomingMovies(page))
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movies, setMovies] = useState([]);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 

  const upcomingMovies = data.results;

  const handlePageChange = (event,value) => {
    setPage(value);
  }

  return (
    <>
    <PageTemplate
      title='Upcoming Movies'
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToWatch movie={movie} />
      }}
    />
      <Pagination
      count={data.total_pages}
      page={page}
      onChange={handlePageChange}
      sx={{ display: "flex", justifyContent: "center"}}
    />
    </>
  );
};
export default UpcomingMovies;