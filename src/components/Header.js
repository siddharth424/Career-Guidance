import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import './style.css'
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  line: {
    color: '#fff',
    fontSize: '1rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  let navigate = useNavigate(); 
  const routeChange = (name) =>{ 
    let path = `aboutus`; 
    navigate(path);
  }
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          
          {<button class="glow-on-hover" type="button" onClick={()=> routeChange()}><b>About Us</b></button>
}
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            The best way to predict <br />
            the future<span className={classes.colorText}> is to create it.</span>
          </h1>
          <p className={classes.line}>If you have built castles in the air, your work need not be lost; that is where they should be.<br/> Now put the foundations under them.</p>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
