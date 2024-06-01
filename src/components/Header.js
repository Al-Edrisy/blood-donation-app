// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    marginLeft: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home" component={RouterLink} to="/">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          شريان العطاء
          </Typography>
          <Button color="inherit" className={classes.navButton} startIcon={<InfoIcon />} component={RouterLink} to="/about">
            حول
          </Button>
          <Button color="inherit" className={classes.navButton} startIcon={<ContactMailIcon />} component={RouterLink} to="/contact">
            اتصل بنا
          </Button>
          <Button color="inherit" className={classes.navButton} startIcon={<FavoriteIcon />} component={RouterLink} to="/donate">
            تبرع
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
