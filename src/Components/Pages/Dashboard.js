import React from "react";
import { Grid, Paper, Typography,Box } from "@mui/material";
import { useState,useEffect } from "react";
import axios from "axios";

const BoxGrid = () => {
  const [data,setData]= useState([]);
const dat = [
  { heading: "Today User Join", value: data},
  { heading: "Today's Recharge", value: 0 },
  { heading: "Today's Withdrawal", value: 0 },
  { heading: "User Balance", value: 0 },
  { heading: "Total User", value: 0 },
  { heading: "Pending Recharges", value: 0 },
  { heading: "Success Recharge", value: 0 },
  { heading: "Total Withdrawal", value: 0 },
  { heading: "Withdrawal Requests", value: 0 },
  { heading: "Website Mode", value: 0 },
  { heading: "Withdrawal Status", value: 0 },
  { heading: "Pending Complaints", value: 0 },
];
useEffect(() => {
  axios.get('https://skbm55g7-3000.inc1.devtunnels.ms/todays-registrations')
  .then((res)=>{
      console.log(res.data.countOfDailyUsers);
      setData(res.data.countOfDailyUsers);
  })
.catch ((error)=>{
  console.log(error);
  alert("Something went wrong");})
},[])
  return (
    <Box sx={{
      display: 'flex',
    justifyContent: "flex-end",
    width: { sm: `calc(100% - 240px)` }, // Adjusted width calculation
    position: "absolute", // Added position to make sure it's positioned relative to the parent
    right: 0 // Positioned at the right>
    }}>
    <Grid container spacing={3}>
      {dat.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            style={{
              padding: "25px",
              textAlign: "left",
              backgroundColor: " #C62828 ",
              color: "#FFFFFF",
            }}
          >
            <Typography variant="h6">{item.heading}</Typography>
           <Typography variant="h6">{item.value}</Typography>
           
           
          </Paper>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};
export default BoxGrid;
