import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Cookies from "js-cookie";

const drawerWidth = 240;

function UserManage(props) {
 
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState([]);

  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

const [setData]=useState('')
  useEffect(() => {
    axios.get("http://localhost:3000/fetchuserdetails", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setRows(res.data.users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const handleDeleteUser = (mobile) => {
  //   console.log(mobile);
  //   const token = Cookies.get('token');
  //   axios.delete(`http://localhost:3000/deleteuser`, { mobile: mobile }, { withCredentials: true }, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       console.log("User deleted successfully.");
  //       const updatedRows = rows.filter(user => user.mobile !== mobile);
  //       setRows(updatedRows);
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting user:", error);
  //     });
  // };
 

  const handleReRegister = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReRegisterSubmit = () => {
    const data = {
      mobile: mobile,
      password: password,
      
    };
    axios.post("http://localhost:3000/re-register", data, { withCredentials: true })
      .then((res) => {
        alert("User re-registered successfully.");
        setData('');
        setRows([...rows, res.data.user]);
        setOpen(false);
      })
      .catch((error) => {
        console.error("Error re-registering user:", error);
      });
  };

  return (
    <Box sx={{ display: "flex" }}>
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
            backgroundColor: "#D9D9D9",
            flexGrow: 1,
            p: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Typography variant="h5" sx={{ p: 3 }}>
            User Management
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", marginRight: 3 }}>
            <Button variant="contained" onClick={handleReRegister}>
              
              Re-register
            </Button>
          </Box>
          <Box display= "flex" justifyContent= "flex-end">
           
          </Box>
          <Box
            sx={{
              padding: 2,
              m: 2,
              backgroundColor: "white",
            }}
          >
            <TableContainer>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><b>Sr No</b></TableCell>
                    <TableCell align="center"><b>Username</b></TableCell>
                    <TableCell align="center"><b>Mobile</b></TableCell>
                    <TableCell align="center"><b>UID</b></TableCell>
                    <TableCell align="center"><b>Wallet Amount</b></TableCell>
                    <TableCell align="center"><b>Action</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((user, index) => (
                    <TableRow key={user._id}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">{user.username}</TableCell>
                      <TableCell align="center">{user.mobile}</TableCell>
                      <TableCell align="center">{user.uid}</TableCell>
                      <TableCell align="center">{user.walletAmount}</TableCell>
                      <TableCell align="center">
                        <Button variant="contained"  /*onClick={() => handleDeleteUser(user.mobile)}*/>Delete</Button> 
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Dialog open={open} onClose={handleClose} align="center">
            <DialogTitle>Re-register User</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Mobile"
                type="text"
                fullWidth
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
           
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={handleClose}>Cancel</Button>
              <Button variant="contained" onClick={handleReRegisterSubmit}>Re-register</Button>
            </DialogActions>
          </Dialog>
          <hr />
        </Box>
      </Box>
    </Box>
  );
}

UserManage.propTypes = {
  window: PropTypes.func,
};

export default UserManage;
