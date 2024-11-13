import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import StarRateIcon from "@mui/icons-material/StarRate";
import img from '../../images/film-poster-placeholder.png';
import React from "react";
import { Link } from "react-router-dom";

const CastCard = ({ cast }) => {
    return (
    <Link to={`/person/${cast.id}`} style={{ textDecoration: "none"}}>
        <Card>
            <CardHeader
            avatar = {
                <Avatar sx ={{ backgroundColor: 'blue'}}>
                    {cast.popularity >= 40 ? <StarRateIcon /> : null}
                </Avatar>
            }
            title={
                <Typography variant="h6" component="p">
                    {cast.name}
                </Typography>
            }
            subheader={`as ${cast.character}`}
            />
            <CardMedia 
            sx = {{height: 400}}
            image = {cast.profile_path ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`: img}
            alt={cast.name}
            />
        </Card>
    </Link>
    );
};
export default CastCard;