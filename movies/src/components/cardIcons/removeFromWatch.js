import { useContext } from "react"
import { MoviesContext } from "../../context/movieContext"
import { IconButton } from "@mui/material";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove"

const RemoveFromWatchIcon = ({movie}) => {
    const context = useContext(MoviesContext);

    const handleRemoveFromWatch = (e) => {
        e.preventDefault();
        context.removeFromToWatch(movie)
    };


    return (
        <IconButton
            aria-label="remove from watchlist"
            onClick={handleRemoveFromWatch}
            >
                <PlaylistRemoveIcon/>
            </IconButton>
    )
}
export default RemoveFromWatchIcon;