import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import MainPage from './components/pages/MainPage/MainPage';
import NavBar from './components/ui/NavBar/NavBar';
import RegPage from './components/pages/RegPage/RegPage';
import LogPage from './components/pages/LogPage/LogPage';

function App() {
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reg" element={<RegPage />} />
        <Route path="/log" element={<LogPage />} />
      </Routes>
    </Container>
  );
}

export default App;
