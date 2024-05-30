import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import axios from "axios";
const drawerWidth = 240;
function UpdateWithdrawRequest(props) {
  const { window } = props;
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/all-withdraw-history-admin_only",{withCredentials:true}
      )
      .then((res) => {
        const data = res.data.withdrawals.map((result, index) => ({
          id: result._id,
          srNo: index + 1,
          status: result.status,
          balance: result.balance,
          userId: result.userId,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
        }));
        setRows(data);
        setFilteredRows(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleFilter = (string) => {
    if (string === "all") {
      setFilteredRows(rows);
    } else {
      setFilteredRows(rows.filter((row) => row.status === string));
    }
  };
  const columns = [
    { field: "srNo", headerName: "Id", width: 90 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "balance", headerName: "Balance", width: 150 },
    { field: "userId", headerName: "UserId", width: 150 },
    { field: "createdAt", headerName: "Created At", width: 150 },
    { field: "updatedAt", headerName: "Updated At", width: 150 },
  ];
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
            Withdraw Status
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
            <Button variant="contained" onClick={() => handleFilter("Completed")}>
              Accepted
            </Button>
            <Button variant="contained" onClick={() => handleFilter("Pending")}>
              Rejected
            </Button>
          </Box>
          <Box
            sx={{
              padding: 2,
              m: 2,
              backgroundColor: "white",
              height: 600, // Adjust height as needed
            }}
          >
            <DataGrid
              rows={filteredRows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10, 20, 50]}
              sortingOrder={["asc", "desc"]}
              disableSelectionOnClick
            />
          </Box>
          <hr />
        </Box>
      </Box>
    </Box>
  );
}
UpdateWithdrawRequest.propTypes = {
  window: PropTypes.func,
};
export default UpdateWithdrawRequest;