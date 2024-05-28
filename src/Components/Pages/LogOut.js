import React from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LogOut = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Box display='flex' justifyContent="space-around">
      <Link to="/logout">
      <Button
          variant="contained"
          sx={{ backgroundColor: '#b71c1c', color: 'white' }}
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </Link>
    </Box>
  );
};

export default LogOut;
