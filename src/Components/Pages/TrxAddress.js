import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";

const TrxAddress = () => {
  const [trx_address, setTrx_address] = useState("");
  const [error, setError] = useState("");
  const [get, setGet] = useState("");
  const [label, setLabel] = useState("");
  const handleInsert = async (event) => {
    event.preventDefault();
    const response = {
      TRXAddress: trx_address,
    };
    const token = Cookies.get("token");
    axios
      .post("http://localhost:3000/CreateAddress", response, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then(function (response) {
        alert("Successful");
        console.log(response);
        setTrx_address("");
        setError("");
      })
      .catch(function (error) {
        console.error(error);
        setError(
          "Address creation failed. Please check your inputs and try again."
        );
      });
  };

  const handleGet = () => {
    axios
      .get("http://localhost:3000/getAddresses", { withCredentials: true })
      .then((res) => {
        // Assuming res.data.UPIaddress is an array and you want the last item
        if (
          res.data.addresses &&
          Array.isArray(res.data.addresses) &&
          res.data.addresses.length > 0
        ) {
          const lastaddresses =
            res.data.addresses[res.data.addresses.length - 1];
          setGet(lastaddresses.TRXAddress);
          setLabel("");
          console.log(get);
        } else {
          // Handle case where UPIaddress is not present or not an array
          console.error("UPIaddress is not available or not in array format");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleUpdate = async () => {
    const response = {
      TRXAddress: trx_address,
    };
    const token = Cookies.get("token");
    axios
      .put("http://localhost:3000/updateaddress", response, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then(function (response) {
        alert("Successful");
        console.log(response);
        setTrx_address("");
        setError("");
      })
      .catch(function (error) {
        console.error(error);
        setError("Update failed. Please check your inputs and try again.");
      });
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
            width: 800,
            width: { xs: `calc(100% - 24px)` },
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
                TRX Address
              </Typography>
              {error && <Typography color="error">{error}</Typography>}
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="trx_address"
                  label={label}
                  name="trx_address"
                  autoComplete="trx_address"
                  autoFocus
                  value={trx_address}
                  placeholder={get}
                  onChange={(e) => setTrx_address(e.target.value)}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 3,
                    mb: 2,
                  }}
                >
                  <Button
                    onClick={handleInsert}
                    variant="contained"
                    sx={{ mr: 1 }}
                  >
                    Insert
                  </Button>
                  <Button
                    onClick={handleGet}
                    variant="contained"
                    sx={{ mr: 1 }}
                  >
                    Get
                  </Button>
                  <Button onClick={handleUpdate} variant="contained">
                    Update
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TrxAddress;