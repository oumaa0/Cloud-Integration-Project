import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

// Styles for the map container
const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '15px',
  overflow: 'hidden',
};

// Center coordinates for the map
const center = {
  lat: 40.748817,
  lng: -73.985428,
};

const MapComponent = () => {
  // Load Google Maps script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // Handle loading errors
  if (loadError) return <div>Error loading maps</div>;
  
  // Display a loading spinner while the map is loading
  if (!isLoaded) return <CircularProgress />;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </Box>
  );
};

export default MapComponent;
