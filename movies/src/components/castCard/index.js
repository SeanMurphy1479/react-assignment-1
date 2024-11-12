import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import StarRateIcon from "@mui/icons-material/StarRate";
import img from '../../images/film-poster-placeholder.png';
import React from "react";

const CastCard = ({ cast }) => {
    return (
        <Card>
            <CardHeader
            avatar = {
                <Avatar sx ={{ backgroundColor: 'blue'}}>
                    {cast.popularity >= 50 ? <StarRateIcon /> : null}
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
            />
        </Card>
    );
};
export default CastCard;