import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import stream from '../stream.json'
import { useNavigate } from "react-router-dom";
import '../index.css';
import './style.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0)',
    margin: '20px',
    textalign: 'center',
  },
  media: {
    display:'flex',
    height: 240,
    marginLeft: '15px',
    marginRight: '15px',
    width: 240,
    alignContent: 'center',
    justifyContent: 'center',
    textalign: 'center',
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
    textalign: 'center',
    
    marginLeft: '15px',
    marginRight: '15px',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
    textalign: 'center',
  },
});


export default function ImageCard() {
  const classes = useStyles();
    let navigate = useNavigate(); 
  const routeChange = (name) =>{ 
    let path = `DisplayTable${name}`; 
    navigate(path);
  }
  return (
    <Grid container lg={12} xs={12} spacing={3}  justify = "center" justifyContent="flex-end">
        {
          stream && stream.map(stream => {
            return (
              <div onClick={()=> routeChange(stream.caption)}>
              <Grid item lg={6} xs={4} sm={4}  textalign="center" justify = "center" className={classes.root} key={stream.id}>
                <img src={stream.icon} class='thumbnail' justify = "center" className={classes.media}/>
                <div>
                  <Typography
                    gutterBottom
                    variant="h5"
                      component="h1"
                    className={classes.title}
                  >
                  {stream.caption}
                    </Typography>
                </div>
                </Grid>
                </div>
            )
          })
        }
      </Grid>
  );
}
