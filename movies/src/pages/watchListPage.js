import { useContext } from "react"
import { MoviesContext } from "../context/movieContext"
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import PageTemplate from "../components/templateMovieListPage";
import RemoveFromWatch from "../components/cardIcons/removeFromWatch";


const WatchListPage = () => {
    const {toWatch: movieIds} = useContext(MoviesContext);

    const toWatchMovieQueries = useQueries(
        movieIds.map((movieId) => ({
            queryKey: ["movie", {id: movieId}],
            queryFn: getMovie
        }))
    );

    const isLoading = toWatchMovieQueries.find((m) => m.isLoading);

    if(isLoading){
        return <Spinner />;
    }

    const movies = toWatchMovieQueries.map((m) => m.data);

    return (
        <PageTemplate
            title={"Watchist"}
            movies={movies}
            action={(movie) => <RemoveFromWatch movie={movie}/>}
            />
    )
}
export default WatchListPage;