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

const TrxAddress = () => {
  const [trx_address, setTrx_address] = useState("");
  const [qrCodeImageAddress, setQrCodeImageAddress] = useState("");
  const [error, setError] = useState("");
  const [get, setGet] = useState("");
  const [get1, setGet1] = useState("");
  const [label, setLabel] = useState("TRX Address");
  const [label1, setLabel1] = useState("QR Code Image Address");
  const handleInsert = async (event) => {
    event.preventDefault();
    const response = {
      TRXAddress: trx_address,
      qrCodeImageAddress: qrCodeImageAddress,
    };
    axios
      .post("http://localhost:3000/CreateAddress", response, {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
        setTrx_address("");
        setQrCodeImageAddress("");
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
        console.log(res.data.addresses[0].TRXAddress);
        setGet(res.data.addresses[0].TRXAddress);
        setGet1(res.data.addresses[0].qrCodeImageAddress);
        setLabel("");
        setLabel1("");
        console.log(get);
        console.log(get1);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    const data1 = {
      TRXAddress: trx_address,
      qrCodeImageAddress: qrCodeImageAddress,
    };
    axios
      .put("http://localhost:3000/updateAddress", data1, {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
        setTrx_address("");
        setQrCodeImageAddress("");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        component="main"
        sx={{
          marginTop: 8,
          backgroundColor: "#D9D9D9",
          flexGrow: 2,
          p: 2,
        }}
      >
        <Box
          component="main"
          sx={{
            backgroundColor: "white",
            flexGrow: 2,
            p: 1,
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
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="trx_address"
                label={label}
                name="trx_address"
                placeholder={get}
                autoComplete="trx_address"
                autoFocus
                value={trx_address}
                onChange={(event) => setTrx_address(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="qrCodeImageAddress"
                label={label1}
                name="qrCodeImageAddress"
                placeholder={get1}
                autoComplete="qrCodeImageAddress"
                autoFocus
                value={qrCodeImageAddress}
                onChange={(event) => setQrCodeImageAddress(event.target.value)}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  m: 3,
                  mb: 2,
                }}
              >
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ m: 1 }}
                  onClick={handleInsert}
                >
                  Insert
                </Button>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ m: 1 }}
                  onClick={handleGet}
                >
                  Get
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ m: 1 }}
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TrxAddress;
