import React, { useState, useEffect } from 'react';
import {
    TextField,
    Button,
    Box,
    Typography,
    Container,
    CssBaseline
} from "@mui/material";
import axios from 'axios';

function UPIAddress() {
    const [upi, setUpi] = useState('');
    const [qr, setqr] = useState('');
    const [get1, setGet1] = useState(0);
    const [get2, setGet2] = useState(0);
    const [label1, Setlabel1] = useState('UPI Address');
    const [label2, Setlabel2] = useState('Qr CodeImage Address');
  

    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            Upi:upi,
            qrCodeImageAddress:qr
        }
        axios.post('http://localhost:3000/createupiaddress', data, { withCredentials: true })
            .then(function (response) {
                alert("Successful");
                console.log(response);
                // Reset the form fields after successful submission
                setUpi("")
                setqr('')
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        const data1={
            Upi:upi,
            qrCodeImageAddress:qr
        }
        axios.put('http://localhost:3000/updateupiaddress', data1, { withCredentials: true })
            .then(function (response) {
                alert("Successful");
                console.log(response);
                // Reset the form fields after successful submission
                setUpi("")
                setqr("")
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    const handleGet = () => {
        axios.get('http://localhost:3000/getupiaddress', { withCredentials: true })
            .then((res) => {
              
                    setGet1(res.data.UPIaddress[0].Upi);
                    setGet2(res.data.UPIaddress[0].qrCodeImageAddress);
                    Setlabel1('')
                    Setlabel2('')
                   console.log(get1)
                   console.log(get2)
            })
            .catch((error) => {
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
                    backgroundColor: '#D9D9D9',
                    flexGrow: 2,
                    p: 2,
                }}
            >
                <Box
                    component="main"
                    sx={{
                        backgroundColor: 'white',
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
                           UPI Address
                        </Typography>
                        <Box component="form"  noValidate sx={{ mt: 1 }}>
                            <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="upi"
                        label={label1}
                        name="upi"
                        autoComplete="upi"
                        autoFocus
                        value={upi}
                        placeholder={get1} // Use `get` as the placeholder value
                        onChange={(e) => setUpi(e.target.value)}
    />
  <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="qr"
                        label={label2}
                        name="qr"
                        autoComplete="qr"
                        autoFocus
                        value={qr}
                        placeholder={get2} // Use `get` as the placeholder value
                        onChange={(e) => setqr(e.target.value)}
    />
<Box sx={{display:"flex",justifyContent:"space-around",m:3}} >
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                               sx={{m:1}}
                               onClick={handleSubmit}
                             
                            >
                                Insert
                            </Button>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{m:1}}
                                onClick={handleGet}
                            >
                               Get
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{m:1}}
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
}

export default UPIAddress;
