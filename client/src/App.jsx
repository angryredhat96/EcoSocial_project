import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import MainPage from './components/pages/MainPage';
import LKPage from './components/pages/LKPage';
import NavBar from './components/ui/NavBar';


function App() {
  return (
      <Container maxWidth="lg">
     <NavBar />
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/lk" element={<LKPage />} />
      </Routes>
      </Container>
  );
}

export default App;