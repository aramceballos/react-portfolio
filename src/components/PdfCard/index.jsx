import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { MediaCardContainer } from './styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const PdfMediaCard = ({ name, src }) => {
  const classes = useStyles();

  const handleClick = () => {
    const win = window.open(src, '_blank');
    win.focus();
  };

  return (
    <MediaCardContainer onClick={handleClick}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={src} title={name} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </MediaCardContainer>
  );
};
