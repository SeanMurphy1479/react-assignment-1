import React, { useState } from 'react';
import PageTemplate from '../components/templateMovieListPage';
import { getPopularMovies } from '../api/tmdb-api';
import AddToWatch from '../components/cardIcons/addToWatch';
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
import { Pagination } from '@mui/material';

const PopularMovies = (props) => {
    const [page, setPage] = useState(1);

    const { data, error, isLoading, isError } = useQuery(['popular',page], () => getPopularMovies(page))


    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const popular = data.results;

    const handlePageChange = (event,value) => {
        setPage(value);
      }

    return (
        <>
        <PageTemplate
            title='Popular Movies'
            movies={popular}
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

export default PopularMovies;