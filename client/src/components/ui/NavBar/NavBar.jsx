import React, { useEffect } from 'react';
import {
  AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/system';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutUser } from '../../../redux/actions/userActions';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontFamily: 'Monospace',
  fontSize: 20,
};

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: '#689f38',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        <Toolbar sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
        >
          {!user ? (
            <>
              <Box>
                <NavLink to="/" style={linkStyle}><IconButton style={linkStyle}><HomeIcon /></IconButton></NavLink>
              </Box>
              <Box>
                <NavLink to="/log" style={linkStyle}><IconButton style={linkStyle}><HowToRegIcon /></IconButton></NavLink>
              </Box>
              <Box>
                <NavLink to="/reg" style={linkStyle}><IconButton style={linkStyle}><PersonAddIcon /></IconButton></NavLink>
              </Box>
            </>
          ) : (
            <>
              {/* <Box>
                <NavLink to="/lk" style={linkStyle}>LK</NavLink>
              </Box> */}
              <Box>
                <IconButton
                  style={linkStyle}
                  onClick={() => navigate('/lk')}
                  sx={{ p: 0 }}
                >
                  {user?.image
                    ? <Avatar alt="kakoytochel" src={`http://localhost:3001/lk/${user?.image}`} /> : <Avatar alt="kakoytochel" />}
                </IconButton>
                {/* <Typography variant="h6" sx={{ my: 2 }}>
                    {user.image} */}
                {/* Hi,
                    {' '}
                    {user.name} */}
                {/* </Typography> */}
              </Box>
              <Box>
                <NavLink to="/" style={linkStyle}><IconButton style={linkStyle}><HomeIcon /></IconButton></NavLink>
              </Box>
              <Box>
                <IconButton
                  variant="text"
                  onClick={() => {
                    dispatch(logoutUser());
                    navigate('/');
                  }}
                  style={linkStyle}
                >
                  <LogoutIcon />

                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
