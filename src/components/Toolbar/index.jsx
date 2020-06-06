import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = (theme) => ({
  grow: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: '#4e4e4e',
  },
  title: {
    color: 'white',
    fontSize: '33px',
    fontWeight: '100',
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link: {
    color: 'white',
  },
  tab: {
    opacity: '1',
  },
});

const ToolbarComponent = ({ classes, openDrawerHandler }) => {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleProfileMenuOpen = () => {
    setAnchorEl(false);
  };

  const menuId = 'primary-search-account-menu';

  return (
    <div className={classes.grow}>
      <AppBar className={classes.bar} position='static'>
        <Toolbar>
          <Link to='/'>
            <Typography className={classes.title} variant='h6' noWrap>
              Aram Ceballos
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Tabs aria-label='simple tabs example'>
              <Link className={classes.link} to='/projects'>
                <Tab className={classes.tab} label='Projects' />
              </Link>
              <Link className={classes.link} to='/certificates'>
                <Tab className={classes.tab} label='Certificates' />
              </Link>
              <Link className={classes.link} to='/about'>
                <Tab className={classes.tab} label='About me' />
              </Link>
            </Tabs>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={openDrawerHandler}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(ToolbarComponent);
