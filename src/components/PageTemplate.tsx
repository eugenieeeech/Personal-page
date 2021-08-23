import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import routes, { RouteId } from '../routes';
import { Link, useHistory } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, LinearProgress, Menu, MenuItem, Grid } from '@material-ui/core';

import { useSnackbar, VariantType as SnackbarVariantType } from 'notistack';
import { 
  Close as CloseIcon,
} from '@material-ui/icons';
import localStorageService from '../service/localStorageService';

const drawerWidth = 240;

export interface PageTemplateProps {
  appBarTitle?: string;
  appBarBack?: string;
  selectedId?: RouteId;
  isLoading?: boolean;  // Default: false

  errorCode?: number;

  // Return true or void if need to render children content
  init?: () => void | boolean | Promise<void | boolean>;
  createAlertRef?: (createAlert: (options?: AlertDialogOptions) => void) => void;
  createSnackbarRef?: (createSnackbar: (options: SnackbarOptions) => void) => void;
}

export interface AlertDialogOptions {
  title: string;
  message: string;
  onClose?: () => void;
}

export interface SnackbarOptions {
  message: string;
  variant?: SnackbarVariantType;
  dismissable?: boolean; // default: true
  autoHideDuration?: number;  // default: 5000
}


type ErrorDetail ={
  code: number,
  message: string
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: "#EAEAEA" , height:"100vh"
  },
  linearProgress: {
    position: 'fixed',
    width: '100%',
    height: '0.2em',
    top: 0, 
    left: 0,
    zIndex: 2000
  },
  appBar: {
    background: "#23395d",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const PageTemplate: React.FC<PageTemplateProps> = (props) => {

  const history = useHistory();

  const classes = useStyles();
  const theme = useTheme();


  const [isInit, setIsInit] = useState(false);
  // const [canUpdateUserRole, setCanUpdateUserRole] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);


  const updateDrawerOpened = (flag: boolean) => {
    setDrawerOpened(flag);
    localStorageService.drawerOpened.set(flag);
  }

  const [alertDialogOpened, setAlertDialogOpened] = React.useState(false);
  const [alertDialogOptions, setAlertDialogOptions] = React.useState({} as AlertDialogOptions)

  useEffect(() => {

    const afterInit = (shouldInit: boolean | void) => {
      setIsInit(!(shouldInit === false));
    };
        if (props.init) { 

          if (props.init.constructor.name === "AsyncFunction") {
         
            (props.init as () => Promise<boolean | void>)().then(afterInit);
          } else {
           
            afterInit((props.init as () => boolean | void)());
          }
        } else {
          setIsInit(true);
        }

  }, []);


  if (props.createAlertRef) {
    let createAlert = (options?: AlertDialogOptions) => {
      if (options) {
        setAlertDialogOptions(options);
        setAlertDialogOpened(true);
      }
    }
    props.createAlertRef(createAlert);
  }

  const alertDialog = (
    <Dialog
      open={alertDialogOpened}
      onClose={() => {
        setAlertDialogOpened(false);
      }}
      // onExit={() => {
      //   if (alertDialogOptions.onClose) {
      //     alertDialogOptions.onClose();
      //   }
      // }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{alertDialogOptions.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {alertDialogOptions.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setAlertDialogOpened(false)} color="primary">
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  )

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  if (props.createSnackbarRef) {
    let createSnackbar = (options: SnackbarOptions) => {
      console.log("Creating snackbar");
      var action; 

      if (options.dismissable !== false)
      action = (key: any) => (
        <IconButton 
          size="small" 
          style={{color: 'white'}} 
          aria-label="dismiss"
          onClick={() => {
            closeSnackbar(key);
          }}
        >
          <CloseIcon 
            fontSize="small"
          />
        </IconButton>
        
    );
      enqueueSnackbar(
        options.message, {
          variant: options.variant,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
          autoHideDuration: options.autoHideDuration || 5000,
          action
        }
      );
    }
    props.createSnackbarRef(createSnackbar);
  }


  const appBar = (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpened,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={() => updateDrawerOpened(true)}
          edge="start"
          className={clsx(classes.menuButton, drawerOpened && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        {
          props.appBarBack && 
            <IconButton
              color="inherit"
              aria-label="Back"
              onClick={() => history.push(props.appBarBack as any)}
              edge="start"
              className={classes.backButton}
            >
              <ArrowBackIcon />
            </IconButton>
        }
        
        <Typography variant="h6" noWrap>
          {props.appBarTitle}
        </Typography>       

      </Toolbar>
    </AppBar>
  );


  const drawer = (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={drawerOpened}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        Menu
        <IconButton onClick={() => updateDrawerOpened(false)}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {routes.map((routeDetail, index) => {
          let drawerItem = routeDetail.drawerItem
          if (drawerItem) {
            return (
              <ListItem 
                key={index}
                button={true}
                selected={routeDetail.id === props.selectedId}
                component={Link}
                to={routeDetail.path}
              >
                <ListItemIcon><drawerItem.icon /></ListItemIcon>
                <ListItemText primary={drawerItem.title} />
              </ListItem>
            );
          }
          return null;
        })
        }
      </List>
    </Drawer>
  );


  var errorDetail: ErrorDetail = {} as ErrorDetail;

  if (props.errorCode != null) {
    errorDetail = {
      code: props.errorCode,
      message: ""
    };
    
    switch (props.errorCode) {
      case 403: 
        errorDetail.message = "Forbidden";
      break;
  
      case 404: 
        errorDetail.message = "Page Not Found";
      break;
  
      case 500:
        errorDetail.message = "Server Error";
      break;
    }
  }


  var errorContent = errorDetail ? (
    <Grid 
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        marginTop: '5em'
      }}
    >
      <Grid item
        style={{
          fontSize: '5em',
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        {errorDetail.code}
      </Grid>
      <Grid item
        style={{
          fontSize: '1.5em',
          textAlign: 'center'
        }}
      >
        {errorDetail.message}
      </Grid>
    </Grid>
  ) : null;

  return (
    (<div className={classes.root}>
      <CssBaseline />
      {props.isLoading && <LinearProgress color="secondary" className={classes.linearProgress}/>}
      {alertDialog}
      {appBar}
      {drawer}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpened,
        })}
        // style={{background: "#EAEAEA"}}
        style={{background: "#EAEAEA" ,overflowY:"auto" }}
      >
        <div className={classes.drawerHeader}  />
        {isInit ? props.errorCode == null ? props.children:null:null}
        {errorContent}
      </main>
    </div>)
  );
}

export default PageTemplate;