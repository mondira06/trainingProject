import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

function ManageWinner(props) {
    const theme = useTheme();
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
       
        <Typography variant="h5" sx={{p:3}}>Game Winning Setting</Typography>
        <Box
      sx={{
        padding: 2, // Space between outer and inner box
        m:2,
        backgroundColor:'white',
      }}
    >
     <Box align="center" >
        <Typography paragraph sx={{m:2,fontSize:20}}>Which mode you want to run?</Typography>
    <Box sx={{marginTop:8,marginBottom:4}}>
        <Button variant="contained" sx={{color:'white',backgroundColor:'#D14444',p:2,fontSize:18,marginRight:4,
          [theme.breakpoints.down('sm')]: {
            p:1,
            marginRight:1,
            fontSize:10
        }
        }}>High Profit Mode </Button>
        <Button variant="contained" sx={{color:'white',backgroundColor:'#D14444',p:2,fontSize:18,
 [theme.breakpoints.down('sm')]: {
    p:1,
    marginRight:1,
    fontSize:10
}

        }}>Low Profit Mode</Button>
        </Box>
        <Typography paragraph sx={{m:2}}>[<b>Note:-</b> On <Box component="span" sx={{ color:'#D14444'}}>Low Profit Mode</Box> manual result option may be <Box component="span" sx={{ color:'#D14444' }}>interrupted</Box>,so do accordingly]</Typography>
    </Box>
    </Box>
    </Box>
    </Box>
  );
}

ManageWinner.propTypes = {
  window: PropTypes.func,
};

export default ManageWinner;
