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

function Commission_rates() {
    const [level1, setLevel1] = useState('');
    const [level2, setLevel2] = useState('');
    const [level3, setLevel3] = useState('');
    const [level4, setLevel4] = useState('');
    const [level5, setLevel5] = useState('');

  
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            level1: level1,
            level2: level2,
            level3: level3,
            level4: level4,
            level5: level5,
        };

        axios.put('http://localhost:3000/update-commission-rates', formData, { withCredentials: true })
            .then(function (response) {
                console.log(response);
                // Reset the form fields after successful submission
                setLevel1('');
                setLevel2('');
                setLevel3('');
                setLevel4('');
                setLevel5('');
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    useEffect(() => {
        // Fetch existing commission rates from the database using PUT request
        axios.put('http://localhost:3000/fetch-commission-rates', {}, { withCredentials: true })
            .then(response => {
                const { data } = response;
                // Set state variables with existing values
                console.log(data);
                setLevel1(data.level1);
                setLevel2(data.level2);
                setLevel3(data.level3);
                setLevel4(data.level4);
                setLevel5(data.level5);
            })
            .catch(error => {
                console.error('Error fetching commission rates:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once, on component mount
    

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
                            Commission Rates
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="level1"
                                label="level1"
                                name="Level1"
                                autoComplete="level1"
                                autoFocus
                                value={level1}
                                onChange={(e) => setLevel1(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="level2"
                                label="level2"
                                name="Level2"
                                autoComplete="level2"
                                autoFocus
                                value={level2}
                                onChange={(e) => setLevel2(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="level3"
                                label="level3"
                                name="level3"
                                autoComplete="level3"
                                autoFocus
                                value={level3}
                                onChange={(e) => setLevel3(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="level4"
                                label="level4"
                                name="Level4"
                                autoComplete="level4"
                                autoFocus
                                value={level4}
                                onChange={(e) => setLevel4(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="level5"
                                label="level5"
                                name="level5"
                                autoComplete="level5"
                                autoFocus
                                value={level5}
                                onChange={(e) => setLevel5(e.target.value)}
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
        </Container>
    );
}

export default Commission_rates;
