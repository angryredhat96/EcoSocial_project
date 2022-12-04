import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import LKPage from './components/pages/LKPage';
import EventPage from './components/pages/EventPage';
import LocationPage from './components/pages/LocationPage';
import NewPage from './components/pages/NewPage';
import MainPage from './components/pages/MainPage/MainPage';
import NavBar from './components/ui/NavBar/NavBar';
import RegPage from './components/pages/RegPage/RegPage';
import LogPage from './components/pages/LogPage/LogPage';
import EditPage from './components/pages/EditPage';
import ProfilePage from './components/pages/ProfilePage';

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lk" element={<LKPage />} />
        <Route path="/location/:id" element={<LocationPage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/event/:id/edit" element={<EditPage />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/reg" element={<RegPage />} />
        <Route path="/log" element={<LogPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </Container>
  );
}

export default App;
