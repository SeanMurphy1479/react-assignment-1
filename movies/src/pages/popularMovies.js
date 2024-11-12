import React, { useState } from 'react';
import PageTemplate from '../components/templateMovieListPage';
import { getPopularMovies } from '../api/tmdb-api';
import AddToWatch from '../components/cardIcons/addToWatch';
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';

const PopularMovies = (props) => {

    const { data, error, isLoading, isError } = useQuery('popular', getPopularMovies)


    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const popular = data.results;

    return (
        <PageTemplate
            title='Popular Movies'
            movies={popular}
            action={(movie) => {
                return <AddToWatch movie={movie} />
            }}
        />
    );
};

export default PopularMovies;