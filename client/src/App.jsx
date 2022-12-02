import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import LKPage from './components/pages/LKPage';
import EventPage from './components/pages/EventPage';
import LocationPage from './components/pages/LocationPage';
import NewPage from './components/pages/NewPage';
import MainPage from './components/pages/MainPage/MainPage';
import NavBar from './components/ui/NavBar/NavBar';
import RegPage from './components/pages/RegPage/RegPage';
import LogPage from './components/pages/LogPage/LogPage';
import { checkUser } from './redux/actions/userActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lk" element={<LKPage />} />
        <Route path="/location/:id" element={<LocationPage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/reg" element={<RegPage />} />
        <Route path="/log" element={<LogPage />} />
      </Routes>
    </Container>
  );
}

export default App;
