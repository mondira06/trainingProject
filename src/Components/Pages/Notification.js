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

function Notification() {
    const [title, settitle] = useState('');
    const [message, setmessage] = useState('');
    

  
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
           title:title,
           message:message
        };

        axios.post('http://localhost:3000/createNotification', formData, { withCredentials: true })
            .then(function (response) {
                alert('Notification submitted Successfully');
                console.log(response);
                // Reset the form fields after successful submission
                settitle('');
                setmessage('');
               
               
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
                            Create Notification
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                name="title"
                                autoComplete="title"
                                autoFocus
                                value={title}
                                onChange={(e) => settitle(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="message"
                                label="Message"
                                name="message"
                                autoComplete="message"
                                autoFocus
                                value={message}
                                onChange={(e) => setmessage(e.target.value)}
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

export default Notification;
