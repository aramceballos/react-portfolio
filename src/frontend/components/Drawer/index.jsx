import React from 'react';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import withStyles from '@material-ui/core/styles/withStyles';
import { List, ListItem, ListItemText } from '@material-ui/core';

const styles = () => ({
  list: {
    width: 170,
  },
  fullList: {
    width: 'auto',
  },
});

const DrawerComponent = ({
  classes,
  toggleDrawerHandler,
  right,
  openDrawer,
}) => {
  const sideList = () => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawerHandler}
      onKeyDown={toggleDrawerHandler}>
      <List>
        <Link to='/projects'>
          <ListItem button>
            <ListItemText primary='Projects' />
          </ListItem>
        </Link>
        <Link to='/certificates'>
          <ListItem button>
            <ListItemText primary='Certificates' />
          </ListItem>
        </Link>
        <Link to='/about'>
          <ListItem button>
            <ListItemText primary='About me' />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <SwipeableDrawer
      onOpen={openDrawer}
      anchor='right'
      open={right}
      onClose={toggleDrawerHandler}>
      {sideList('right')}
    </SwipeableDrawer>
  );
};

export default withStyles(styles)(DrawerComponent);
