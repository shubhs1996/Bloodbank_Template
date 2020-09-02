import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import image from '../../images/blood1.jpg'

const useStyles = makeStyles({
  root: {
    Width:200,
  },

media: {
      height:100,
  },
  content:{
    height:100,
  },

  action: {
      height:10,
  }
});

export default function ImgMediaCard(props) {

   const classes = useStyles();

 
  return (
    <Card className={classes.root}>
     <CardActionArea>
   {props.isdimension?<CardMedia className={classes.media} component="img" alt="Contemplative Reptile" height="140" image={image} title="Contemplative Reptile"/>:null}
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
