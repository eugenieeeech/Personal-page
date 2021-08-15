import React, { useEffect, useState } from 'react';
import {makeStyles, useTheme } from '@material-ui/core/styles';
import PageTemplate from "../../components/PageTemplate";
import routes, { RoutedComponentProps } from "../../routes";
import { Collapse, Grid, IconButton } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
// import backendApi from "../../backendApi";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    //color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    //color: '#5AFF3D',
    fontSize: '4rem',
  },
}));
const Home: React.FC<RoutedComponentProps> = (props) => {
  
  console.log("welcome")
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
    (async () => {
    })().then();

  }, []);

  return (
    <PageTemplate 
      appBarTitle={props.routeDetail.title}
      selectedId={props.routeDetail.id}
    >
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            My<span>Page.</span>
          </h1>
          <Link to={'/about'}>
              <IconButton>
              <ExpandMoreIcon className={classes.goDown}></ExpandMoreIcon>
            </IconButton> </Link>
        </div>
      </Collapse>
    </PageTemplate>
  );
}

export default Home;