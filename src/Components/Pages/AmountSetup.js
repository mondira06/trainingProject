import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const drawerWidth = 240;

function AmountSetup(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  
  
  
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box 
        component="main"
        sx={{
          backgroundColor:'#D9D9D9',
           flexGrow: 1, p:1, width:800 }}
      >
       
        <Typography variant="h5" sx={{p:3}}>AmountSetup</Typography>
        <Box
      sx={{
        padding: 2, // Space between outer and inner box
        m:2,
        backgroundColor:'white',
      }}
    >
     <Box>
        <Box display="flex" justifyContent="space-between" sx={{m:1}}>
        <Box>
        <Typography paragraph sx={{m:2}}>Minimum Recharge Amount</Typography>
        <TextField
        label="Amount"
        value={value}
        onChange={handleChange}
        // Add styles here if needed
      />
    </Box>
    <Box>
        <Typography paragraph sx={{m:2}}>Minimum Recharge Amount</Typography>
        <TextField
        label="Amount"
        value={value}
        onChange={handleChange}
        // Add styles here if needed
      />
    </Box>
    </Box>
    <Box display="flex" justifyContent="space-between" sx={{m:1}}>
        <Box>
        <Typography paragraph sx={{m:2}}>Minimum Recharge Amount</Typography>
        <TextField
        label="Amount"
        value={value}
        onChange={handleChange}
        // Add styles here if needed
      />
    </Box>
    <Box>
        <Typography paragraph sx={{m:2}}>Minimum Recharge Amount</Typography>
        <TextField
        label="Amount"
        value={value}
        onChange={handleChange}
        // Add styles here if needed
      />
    </Box>
    
    </Box>
    <Box display="flex" justifyContent="space-between" sx={{m:1}}>
        <Box >
        <Typography paragraph sx={{m:2}}>Minimum Recharge Amount</Typography>
        <TextField
        label="Amount"
        value={value}
        onChange={handleChange}
        // Add styles here if needed
      />
    </Box>
    <Box>
        <Typography paragraph sx={{m:2}}>Minimum Recharge Amount</Typography>
        <TextField
        label="Amount"
        value={value}
        onChange={handleChange}
        // Add styles here if needed
      />
    </Box>
    </Box>
    </Box>
    <Box display="flex" justifyContent="space-around">
        <Button variant="contained" sx={{color:'white'}}>Submit</Button>
        </Box>
    </Box>
    </Box>
    </Box>
  );
}

AmountSetup.propTypes = {
  window: PropTypes.func,
};

export default AmountSetup;
