import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getNowPlayingMovies } from "../api/tmdb-api";
import AddToWatch from '../components/cardIcons/addToWatch';
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';

const NowPlayingMovies = (props) => {

    const { data, error, isLoading, isError } = useQuery('now_playing', getNowPlayingMovies)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const playing = data.results;

    return (
        <PageTemplate title='Now Playing Movies'
        movies={playing}
        action={(movie) => {
            return <AddToWatch movie={movie} />
        }}
    />
    )
};
export default NowPlayingMovies;