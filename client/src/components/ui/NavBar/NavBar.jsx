import React from 'react';
import {
  AppBar, Box, Toolbar,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontFamily: 'Monospace',
  fontSize: 20,
};

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#689f38' }}>
        <Toolbar>
          <Box ml={20}>
            <NavLink to="/" style={linkStyle}>Home</NavLink>
          </Box>
          {/* {!user ? (
            <> */}
          <Box ml={20}>
            <NavLink to="/reg" style={linkStyle}>Reg</NavLink>
          </Box>
          <Box ml={20}>
            <NavLink to="/log" style={linkStyle}>Log</NavLink>
          </Box>
          {/* </>
        ) : (
            <> */}
          <Box ml={20}>
            <NavLink to="#" style={linkStyle}>LK</NavLink>
          </Box>
          <Box ml={20}>
            <NavLink to="#" style={linkStyle}>LogOut</NavLink>
          </Box>
          {/* </>
        )} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
