import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";
import axios from "axios";

const drawerWidth = 240;

function UpdateWithdrawRequest(props) {
  const { window } = props;
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [disabledRows, setDisabledRows] = useState({});

  useEffect(() => {
    const token = Cookies.get("token");

    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/all-withdraw-history-admin_only",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

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
        localStorage.setItem("withdrawals", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    };

    // Clear localStorage and fetch fresh data from the server always
    localStorage.removeItem("withdrawals");
    fetchData();

    const storedDisabledRows = localStorage.getItem("disabledRows");
    if (storedDisabledRows) {
      setDisabledRows(JSON.parse(storedDisabledRows));
    }
  }, []);

  const updateRowStatus = (id, newStatus) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, status: newStatus, updatedAt: new Date().toISOString() } : row
    );

    setRows(updatedRows);
    setFilteredRows(updatedRows);
    localStorage.setItem("withdrawals", JSON.stringify(updatedRows));
  };

  const handleAccept = async (id) => {
    const token = Cookies.get("token");

    try {
      const res = await axios.post(
        "http://localhost:3000/update-withdraw-status",
        {
          withdrawId: id,
          acceptanceType: "Completed",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(res.data);
      setDisabledRows((prev) => {
        const newDisabledRows = { ...prev, [id]: "accepted" };
        localStorage.setItem("disabledRows", JSON.stringify(newDisabledRows));
        return newDisabledRows;
      });
      updateRowStatus(id, "Completed");
    } catch (error) {
      console.error("Error updating withdraw status:", error);
    }
  };

  const handleReject = async (id) => {
    const token = Cookies.get("token");

    try {
      const res = await axios.post(
        "http://localhost:3000/update-withdraw-status",
        {
          withdrawId: id,
          acceptanceType: "Rejected",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(res.data);
      setDisabledRows((prev) => {
        const newDisabledRows = { ...prev, [id]: "rejected" };
        localStorage.setItem("disabledRows", JSON.stringify(newDisabledRows));
        return newDisabledRows;
      });
      updateRowStatus(id, "Rejected");
    } catch (error) {
      console.error("Error updating withdraw status:", error);
    }
  };

  const columns = [
    { field: "srNo", headerName: "Id", width: 90 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "balance", headerName: "Balance", width: 150 },
    { field: "userId", headerName: "UserId", width: 150 },
    { field: "createdAt", headerName: "Created At", width: 150 },
    { field: "updatedAt", headerName: "Updated At", width: 170 },
    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            disabled={disabledRows[params.row.id]}
            onClick={() => handleAccept(params.row.id)}
            sx={{
              backgroundColor: disabledRows[params.row.id] === "accepted" ? "grey" : "primary.main",
            }}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            disabled={disabledRows[params.row.id]}
            onClick={() => handleReject(params.row.id)}
            sx={{
              backgroundColor: disabledRows[params.row.id] === "rejected" ? "grey" : "secondary.main",
            }}
          >
            Reject
          </Button>
        </Box>
      ),
    },
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
        </Box>
      </Box>
    </Box>
  );
}

UpdateWithdrawRequest.propTypes = {
  window: PropTypes.func,
};

export default UpdateWithdrawRequest;
