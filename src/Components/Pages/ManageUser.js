import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function ManageUser(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const StyledButton = styled(Button)(({ theme }) => ({
      backgroundColor: theme.palette.action.hover,
  }));
 
  
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{
      display: 'flex',
    justifyContent: "flex-end",
    width: { sm: `calc(100% - 240px)` }, // Adjusted width calculation
    position: "absolute", // Added position to make sure it's positioned relative to the parent
    right: 0 // Positioned at the right>
    }}>
      <Box 
        component="main"
        sx={{
          backgroundColor:'#D9D9D9',
           flexGrow: 1, p:1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
       
        <Typography variant="h5" sx={{p:3}}>Manage AdminUser</Typography>
        <Box
      sx={{
        padding: 2, // Space between outer and inner box
        m:2,
        backgroundColor:'white',
      }}
    >
      <Box display="flex" justifyContent="flex-end" >
        <Button variant="contained" sx={{marginBottom: 2,backgroundColor:'#D14444',color:'black'}}>Add New</Button>
        </Box>
        <hr/>
        <Box display="flex" justifyContent="flex-end"  >
        <Typography paragraph sx={{marginTop:2,marginRight:2}}>Search</Typography>
        <TextField
        value={value}
        onChange={handleChange}
        // Add styles here if needed
      />
    </Box>
    <hr/>
        <Typography paragraph>
        <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell><b>Sr No&nbsp;&nbsp;</b></StyledTableCell>
            <StyledTableCell align="right"><b>Role&nbsp;&nbsp;</b></StyledTableCell>
            <StyledTableCell align="right"><b>Task&nbsp;&nbsp;</b></StyledTableCell>
            <StyledTableCell align="right"><b>Action&nbsp;&nbsp;</b></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell align="right">xyz</StyledTableCell>
              <StyledTableCell align="right">xyz</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                2
              </StyledTableCell>
              <StyledTableCell align="right">xyz</StyledTableCell>
              <StyledTableCell align="right">xyz</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </Typography>
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between', // Adjusts space between items
        alignItems: 'center' // Vertically centers items if they have different heights
      }}
    >
        <Typography paragraph>
          Showing 1 to 2 of 2 entries
        </Typography>
        <Typography paragraph >
        <StyledButton variant="text" sx={{border:1,color:'#D9D9D9'}}>Previous</StyledButton>
<Button variant="contained">1</Button>
<Link to= "/manage_role">
<StyledButton variant="text" sx={{border:1,color:'black'}}>Next</StyledButton></Link>

</Typography>
      </Box>
      <hr/>
    </Box>
    </Box>
    </Box>
    </Box>
  );
}

ManageUser.propTypes = {
  window: PropTypes.func,
};

export default ManageUser;
