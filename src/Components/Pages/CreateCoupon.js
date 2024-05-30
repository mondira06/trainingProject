import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  CssBaseline
} from "@mui/material";
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Coupon = () => {
  const [code, setCode] = useState("");
  const [bonusAmount, setBonusAmount] = useState("");
  const [redemptionLimit, setRedemptionLimit] = useState("");
  const [error, setError] = useState("");
  const { Coupon } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = {
        code: code,
        bonusAmount: bonusAmount,
        redemptionLimit: redemptionLimit,
      };
      axios.post('http://localhost:3000/create-coupon', response, { withCredentials: true })
      .then(function (response) {
        alert("Successful");
        console.log(response);
        setCode('');
        setBonusAmount('null');
        setRedemptionLimit('null');
      })
      .catch(function (error) {
        setError("Coupon creation failed. Please check your inputs and try again.")
          });
  };
  
//     try {
//       const response = await axios.post('http://localhost:3000/create-coupon', { 
//         code, 
//         bonusAmount: parseFloat(bonusAmount), 
//         redemptionLimit: parseInt(redemptionLimit, 100) 
//       });
//       if (response.status === 200) {
//       }
//     } catch (error) {
//       setError("Coupon creation failed. Please check your inputs and try again.");
//     }
//   };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        justifyContent: "flex-end",
        width: { sm: `calc(100% - 240px)` },
        position: "absolute", 
        right: 0, 
      }}>
        <Box 
          component="main"
          sx={{
            marginTop: 8,
            backgroundColor:'#D9D9D9',
            flexGrow: 1, p:1, 
            width:800, 
            width: { xs: `calc(100% - 24px)` }
          }}           
        >
          <Box 
            component="main"
            sx={{
              backgroundColor:'white',
              flexGrow: 2, p:2, 
            }}
          >
            <Box
              sx={{
                marginTop: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Create Coupon
              </Typography>
              {error && <Typography color="error">{error}</Typography>}
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="code"
                  label="Code"
                  name="code"
                  autoComplete="code"
                  autoFocus
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="bonusAmount"
                  label="Bonus Amount"
                  type="number"
                  id="bonusAmount"
                  autoComplete="bonus-amount"
                  value={bonusAmount}
                  onChange={(e) => setBonusAmount(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="redemptionLimit"
                  label="Redemption Limit"
                  type="number"
                  id="redemptionLimit"
                  autoComplete="redemption-limit"
                  value={redemptionLimit}
                  onChange={(e) => setRedemptionLimit(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"

                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Coupon;
