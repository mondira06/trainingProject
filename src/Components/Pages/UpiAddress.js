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
    const [get, setGet] = useState(0);
    const [label, Setlabel] = useState('UPI Address');
  

    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            Upi:upi
        }
        axios.post('http://localhost:3000/addid', data, { withCredentials: true })
            .then(function (response) {
                console.log(response);
                // Reset the form fields after successful submission
                setUpi("")
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        const data1={
            Upi:upi
        }
        axios.put('http://localhost:3000/updateupiaddress', data1, { withCredentials: true })
            .then(function (response) {
                console.log(response);
                // Reset the form fields after successful submission
                setUpi("")
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    const handleGet = () => {
        axios.get('http://localhost:3000/getid', { withCredentials: true })
            .then((res) => {
                // Assuming res.data.UPIaddress is an array and you want the last item
                if (res.data.UPIaddress && Array.isArray(res.data.UPIaddress) && res.data.UPIaddress.length > 0) {
                    const lastUPIAddress = res.data.UPIaddress[res.data.UPIaddress.length - 1];
                    
                    setGet(lastUPIAddress.Upi);
                    Setlabel('')
                   console.log(get)
                } else {
                    // Handle case where UPIaddress is not present or not an array
                    console.error('UPIaddress is not available or not in array format');
                }
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
                        label={label}
                        name="upi"
                        autoComplete="upi"
                        autoFocus
                        value={upi}
                        placeholder={get} // Use `get` as the placeholder value
                        onChange={(e) => setUpi(e.target.value)}
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
