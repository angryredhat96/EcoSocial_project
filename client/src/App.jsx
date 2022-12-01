import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import MainPage from './components/pages/MainPage';
import LKPage from './components/pages/LKPage';
import EventPage from './components/pages/EventPage';
import NavBar from './components/ui/NavBar';
import LocationPage from './components/pages/LocationPage';
import NewPage from './components/pages/NewPage';



function App() {
  return (
      <Container maxWidth="lg">
     <NavBar />
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/lk" element={<LKPage />} />
          <Route path="/location/:id" element={<LocationPage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/new" element={<NewPage />} />
      </Routes>
      </Container>
  );
}

export default App;