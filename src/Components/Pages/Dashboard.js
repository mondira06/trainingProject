// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { Box, Grid, Paper, Typography, Button } from "@mui/material";

// const gridStyle = {
//   padding: "20px",
//   textAlign: "left",
//   backgroundColor: "#C62828",
//   color: "#FFFFFF",
// };

// const staticData = [
//   // { heading: "Today's Recharge", value: todayrecharge },
//   { heading: "Today's Withdrawal", value: 0 },
//   { heading: "User Balance", value: 0 },
//   { heading: "Total User", value: 0 },
//   { heading: "Pending Recharges", value: 0 },
//   { heading: "Success Recharge", value: 0 },
//   { heading: "Total Withdrawal", value: 0 },
//   { heading: "Withdrawal Requests", value: 0 },
//   { heading: "Website Mode", value: 0 },
//   { heading: "Withdrawal Status", value: 0 },
//   { heading: "Pending Complaints", value: 0 },
// ];

// const BoxGrid = ({ combinedData }) => (
//   <Box
//     sx={{
//       display: "flex",
//       justifyContent: "flex-end",
//       width: { sm: `calc(100% - 240px)` },
//       position: "absolute",
//       right: 0,
//     }}
//   >
//     <Grid
//       container
//       spacing={3}
//       direction="row"
//       justifyContent="flex-end"
//       alignItems="center"
//     >
//       {combinedData.map((item, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <Paper style={gridStyle}>
//             <Typography variant="h6">{item.heading}</Typography>
//             <Typography variant="h6">{item.value}</Typography>
//           </Paper>
//         </Grid>
//       ))}
//     </Grid>
//   </Box>
// );

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const { logout } = useAuth();
//   const [todayUserJoin, setTodayUserJoin] = useState(0);
// const [todayrecharge, setTodayrecharge] = useState(0);
//   console.log(todayUserJoin)
//   console.log(todayrecharge)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await axios.get(
//           "https://skbm55g7-3000.inc1.devtunnels.ms/todays-registrations"
//         );
//         // console.log(data)
//         setTodayUserJoin(data.countOfDailyUsers);
//       } catch (err) {
//         console.error("Error occurred fetching daily users:", err);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await axios.get(
//           "https://skbm55g7-3000.inc1.devtunnels.ms/transactions-last-24-hours"
//         );
//         console.log(data)

//         setTodayrecharge(data.totalRechargeAmount);
//       } catch (err) {
//         console.error("Error occurred fetching daily users:", err);
//       }
//     };
//     fetchData();
//   }, []);

//   const combinedData = [
//     { heading: "Today User Join", value: todayUserJoin },
//     ...staticData,
//   ];
//   const combinedData2 = [
//     { heading: "Today's Recharge ", value: todayrecharge },
//     ...staticData,
//   ];

//   const handleLogout = async () => {
//     await logout();

//     navigate("/login");
//   };

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={handleLogout}>
//         Logout
//       </Button>
//       <BoxGrid combinedData={combinedData} />
//       <BoxGrid combinedData2={combinedData2} />

//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import axios from "axios";
// import {  useNavigate } from "react-router-dom";
// import { useAuth } from '../../context/AuthContext';
const BoxGrid = () => {
  const [data, setData] = useState(0);
  const [userBalance, setUserBalance] = useState(0);
  const [todayrecharge, setTodayrecharge] = useState(0);
  const [todayWithdrawal, setTodayWithdrawal] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  const [pendingRecharge, setPendingRecharge] = useState(0);
  const [successRecharge, setSuccessRecharge] = useState(0);
  const [totalWithdrawal, setTotalWithdrawal] = useState(0);




  useEffect(() => {
    // Fetch today's user registrations count
    axios
      .get("http://localhost:3000/todays-registrations", { withCredentials: true })
      .then((res) => {
        setData(res.data.countOfDailyUsers);
      })
      .catch((err) => {
        console.log("Error while fetching today's registration:", err);
      });
    axios
      .get("http://localhost:3000/user-balance" , { withCredentials: true })
      .then((res) => {
        setUserBalance(res.data.walletAmount);
      })
      .catch((err) => {
        console.log("Error while fetching user balance:", err);
      });
    axios
      .get("http://localhost:3000/transactions-last-24-hours", { withCredentials: true })
      .then((res) => {
        setTodayrecharge(res.data.totalRechargeAmount);
      })
      .catch((err) => {
        console.log("Error while fetching user balance:", err);
      });

    axios
      .get("http://localhost:3000/total-withdraw-amount-last-24-hours", { withCredentials: true })
      .then((res) => {
        setTodayWithdrawal(res.data.totalWithdrawAmount);
      })
      .catch((err) => {
        console.log("Error while fetching withdraw details:", err);
      });
      axios
      .get("http://localhost:3000/total-registrations", { withCredentials: true })
      .then((res) => {
        setTotalUser(res.data.count);
      })
      .catch((err) => {
        console.log("Error while fetching user details:", err);
      });
      axios
      .get("http://localhost:3000/pending-recharge", { withCredentials: true })
      .then((res) => {
        setPendingRecharge(res.data.pendingAmount);
      })
      .catch((err) => {
        console.log("Error while fetching user details:", err);
      });
      axios
      .get("http://localhost:3000/success-recharge", { withCredentials: true })
      .then((res) => {
        setSuccessRecharge(res.data.successAmount);
      })
      .catch((err) => {
        console.log("Error while fetching user details:", err);
      });
      axios
      .get("http://localhost:3000/total-withdrawl-amount", { withCredentials: true })
      .then((res) => {
        setTotalWithdrawal(res.data.completeWithdrawAmount);
      })
      .catch((err) => {
        console.log("Error while fetching user details:", err);
      });
  }, []);

  // const handleSubmit = async (event) => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:3000/total-withdraw-amount-last-24-hours", { withCredentials: true });

  //     console.log(response.data);
  //   } catch (error) {
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       alert(error.response.data.message);
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       alert("No response received from the server.");
  //     } else {
  //       // Something happened in setting up the request that triggered an Error
  //       alert("Error", error.message);
  //     }
  //   }
  // };

  // handleSubmit();
  // useEffect(() => {
  //       const fetchData = async () => {
  //         try {
  //           const { data } = await axios.get(
  //             "http://localhost:3000/transactions-last-24-hours"
  //           );
  //           console.log(data)

  //           setTodayrecharge(data.totalRechargeAmount);
  //         } catch (err) {
  //           console.error("Error occurred fetching daily users:", err);
  //         }
  //       };
  //       fetchData();
  //     }, []);
  // useEffect(() => {
  //     try {
  //       const { data } = await axios.get(
  //         "http://localhost:3000/total-withdraw-amount-last-24-hours"
  //       );
  //       console.log(data)

  //       settodayWithdrawal(data.todayWithdrawal);
  //     } catch (err) {
  //       console.error("Error occurred fetching daily users:", err);
  //     }
  //   };
  // }, []);
  const dat = [
    { heading: "Today User Join", value: data },
    { heading: "Today's Recharge", value: todayrecharge },
    { heading: "Today's Withdrawal", value: todayWithdrawal },
    { heading: "User Balance", value: userBalance },
    { heading: "Total User", value: totalUser },
    { heading: "Pending Recharges", value: pendingRecharge },
    { heading: "Success Recharge", value: successRecharge },
    { heading: "Total Withdrawal", value: totalWithdrawal},
    { heading: "Withdrawal Requests", value: 0 },
    { heading: "Website Mode", value: 0 },
    { heading: "Withdrawal Status", value: 0 },
    { heading: "Pending Complaints", value: 0 },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: { sm: `calc(100% - 240px)` }, // Adjusted width calculation
        position: "absolute", // Added position to make sure it's positioned relative to the parent
        right: 0, // Positioned at the right
      }}
    >
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
        {/* <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button> */}
      </Grid>
    </Box>
  );
};
export default BoxGrid;
