import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  CssBaseline, Avatar
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import Cookies from 'js-cookie';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [mobile, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  // const [token, setToken] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { mobile, password });
      if (response.status === 200) {
        // Save the token in a cookie
        login(response.data.token);
     
        navigate('/dashboard');
      }
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };
 

  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box 
          component="main"
          sx={{
            marginTop: 8,
            backgroundColor:'#D9D9D9',
             flexGrow: 2, p:2, }}
        >
          <Box 
          component="main"
          sx={{
            backgroundColor:'white',
             flexGrow: 2, p:2, }}
        >
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar color="primary" size="lg" variant="solid" 
         >  <PersonIcon /></Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="phonenumber"
              label="Phonenumber"
              name="phonenumber"
              autoComplete="phonenumber"
              autoFocus
              value={mobile}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
            </Box>
      </Box>
      </Box>
      </Box>
    </Container>
  );
};

export default Login;

