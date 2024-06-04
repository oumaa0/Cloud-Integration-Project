import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import MapComponent from './MapComponent';

// Styled component for the background
const Background = styled.div`
  background: linear-gradient(135deg, #ece9e6, #ffffff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LandingPage = () => {
  return (
    <Background>
      <Container maxWidth="sm" style={{ textAlign: 'center', padding: '20px', }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Our Landing Page
        </Typography>
        <MapComponent />
      </Container>
    </Background>
  );
};

export default LandingPage;
