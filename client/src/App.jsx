import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import MainPage from './components/pages/MainPage';
import NavBar from './components/ui/NavBar';


function App() {
  return (
      <Container maxWidth="lg">
     <NavBar />
      <Routes>
          <Route path="/" element={<MainPage />} />
      </Routes>
      </Container>
  );
}

export default App;