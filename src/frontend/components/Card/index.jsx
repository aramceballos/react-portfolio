import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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

export const MediaCard = (props) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  const { title, description, src, repository, url } = props;

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [element]);

  const classes = useStyles();

  const handleClick = (link) => {
    var win = window.open(link, '_blank');
    win.focus();
  };

  return (
    <MediaCardContainer ref={element}>
      {show && (
        <>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={src} title={title} />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {url && (
                <Button
                  size='small'
                  color='primary'
                  onClick={() => handleClick(url.toString())}>
                  Go to page
                </Button>
              )}
              {repository && (
                <Button
                  size='small'
                  color='primary'
                  onClick={() => handleClick(repository.toString())}>
                  Repository
                </Button>
              )}
            </CardActions>
          </Card>
        </>
      )}
    </MediaCardContainer>
  );
};
