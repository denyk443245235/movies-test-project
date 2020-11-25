import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import './movie-card.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginTop: 15,
  },
  cardContainer : {
    display: 'flex'
  },
  media: {
    height: 250,
    width: 350
  },
  text: {
    width: 300
  },
});

const MovieCard = ({movie}) => {
  const classes = useStyles();
  const history = useHistory();
  const {Title, Poster, imdbID, Year} = movie;

  const openMoviePage = () => {
    history.push(`details/${imdbID}`)
  };

  return (
    <Card className={classes.root} onClick={openMoviePage}>
      <CardActionArea className={classes.cardContainer}>
        <CardMedia
          className={classes.media}
          image={Poster}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Title}
          </Typography>
          <Typography  className={classes.text} variant="body2" color="textSecondary" component="p">
            Year {Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;