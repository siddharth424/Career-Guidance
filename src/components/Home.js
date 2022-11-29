import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';

import '../index.css';
import PlaceToVisit from './PlaceToVisit';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundSize: 'cover',
  },
}));


export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}
