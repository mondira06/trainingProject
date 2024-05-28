import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Box, Button } from '@mui/material';

const drawerWidth =240;

function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex',justifyContent:'space-around' }}>
          <Button variant="contained" onClick={handleLogout}>Logout</Button>
    </Box>
  );
}

export default Logout;
