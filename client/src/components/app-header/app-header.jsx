import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { serverUrl } from "../../config";
import './app-header.css';

const logOut = () => {
  window.open(`${serverUrl}/auth/logout`, '_self');
};

const AppHeader = () => (
  <AppBar position="static" style={{ backgroundColor:'#7e57c2' }}>
    <Toolbar className='app-header-container'>
      <Typography variant="h6" >
        Films Api
      </Typography>
      <Button color="inherit" onClick={logOut}>Logout</Button>
    </Toolbar>
  </AppBar>
);

export default AppHeader;