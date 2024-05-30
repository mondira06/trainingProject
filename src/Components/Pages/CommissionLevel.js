import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const Coupon = () => {
  const [minAmount, setMinAmount] = useState("");
  const [bonusAmount, setBonusAmount] = useState("");
  const [awarded, setAwarded] = useState("");
  const [error, setError] = useState("");
  const { Coupon } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      levels: [
        {
          minAmount: parseFloat(minAmount),
          bonusAmount: parseFloat(bonusAmount),
          awarded: awarded,
          _id: "664f402d0bac56ee61b9c592"
        }
      ]
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: 'include' // If needed to send cookies for cross-origin requests
    };

    try {
      const response = await fetch("http://localhost:3000/update-unlock-commission", requestOptions);
      if (response.ok) {
        const result = await response.text();
        console.log(result);
        alert("Successful");
        setMinAmount('');
        setBonusAmount('');
        setAwarded('');
        setError(""); // Clear any previous errors
      } else {
        setError("Commission level update failed. Please check your inputs and try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: { sm: `calc(100% - 240px)` },
          position: "absolute",
          right: 0,
        }}
      >
        <Box
          component="main"
          sx={{
            marginTop: 8,
            backgroundColor: "#D9D9D9",
            flexGrow: 1,
            p: 1,
            width: { xs: `calc(100% - 24px)` }, // Removed duplicate width property
          }}
        >
          <Box
            component="main"
            sx={{
              backgroundColor: "white",
              flexGrow: 2,
              p: 2,
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
                Levels
              </Typography>
              {error && <Typography color="error">{error}</Typography>}
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="minAmount"
                  label="Min Amount"
                  type="number"
                  name="minAmount"
                  autoComplete="minAmount"
                  autoFocus
                  value={minAmount}
                  onChange={(e) => setMinAmount(e.target.value)}
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
                  name="awarded"
                  label="Awarded"
                  id="awarded"
                  autoComplete="awarded"
                  value={awarded}
                  onChange={(e) => setAwarded(e.target.value)}
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
