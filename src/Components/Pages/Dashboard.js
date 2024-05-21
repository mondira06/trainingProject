import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
const data = [
  { heading: "Website Mode", value: 10 },
  { heading: "Withdrawal Status", value: 20 },
  { heading: "Pending Complaints", value: 30 },
  { heading: "No. of Deposits", value: 40 },
  { heading: "No. of Withdrawal ", value: 50 },
  { heading: "Total Earning", value: 60 },
  { heading: "Today Bet Amount", value: 70 },
  { heading: "Today total win", value: 80 },
  { heading: "Today Profit", value: 90 },
  { heading: "Level1 Commision", value: 100 },
  { heading: "Level2 Commision", value: 110 },
  { heading: "Bonus Wallet", value: 0 },
];
const BoxGrid = () => {
  return (
    <Grid container spacing={3}>
      {data.map((item, index) => (
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
            <Typography variant="h7">{item.value}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
export default BoxGrid;
