import React from 'react';
import {
  AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/system';
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
          <Box>
            <NavLink to="/" style={linkStyle}>HOME</NavLink>
          </Box>
          {!user ? (
            <>
              <Box>
                <NavLink to="/reg" style={linkStyle}>REG</NavLink>
              </Box>
              <Box>
                <NavLink to="/log" style={linkStyle}>LOG</NavLink>
              </Box>
            </>
          ) : (
            <>
              {/* <Box>
                <NavLink to="/lk" style={linkStyle}>LK</NavLink>
              </Box> */}
              <Box>
                <Button
                  variant="text"
                  onClick={() => {
                    dispatch(logoutUser());
                    navigate('/');
                  }}
                  style={linkStyle}
                >
                  LOGOUT

                </Button>
              </Box>
              <Box>
                <IconButton
                  onClick={() => navigate('/lk')}
                  sx={{ p: 0 }}
                >
                  <Avatar alt="kakoytochel" src={`http://localhost:3001/${user?.image}`} />
                </IconButton>
                {/* <Typography variant="h6" sx={{ my: 2 }}>
                    {user.image} */}
                {/* Hi,
                    {' '}
                    {user.name} */}
                {/* </Typography> */}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
