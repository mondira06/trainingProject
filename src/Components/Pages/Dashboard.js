import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";

const gridStyle = {
  padding: "25px",
  textAlign: "left",
  backgroundColor: "#C62828",
  color: "#FFFFFF",
};
  const staticData = [
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

  const BoxGrid = () => {
    const [todayUserJoin, setTodayUserJoin] = useState(0);  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios
        .get(
          "https://skbm55g7-3000.inc1.devtunnels.ms/todays-registrations"
        );
        setTodayUserJoin(data.countOfDailyUsers);
      } catch (err) {
        console.error("Error occurred fetching daily users:", err);
      }
    };
    fetchData();
  }, []);
  const combinedData = [
    { heading: "Today User Join", value: todayUserJoin },
    ...staticData,
  ];

  return (
    <Grid container spacing={3}>
      {combinedData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper style={gridStyle}>
            <Typography variant="h6">{item.heading}</Typography>
            <Typography variant="h6">{item.value}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default BoxGrid;