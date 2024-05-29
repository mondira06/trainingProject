import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Button from '@mui/material/Button';

const drawerWidth = 240;

function K3History(props) {
  const { window } = props;
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/k3result', { withCredentials: true })
      .then((res) => {
        const data = res.data.Result.map((result, index) => ({
          id: result._id,
          srNo: index + 1,
          timerName: result.timerName,
          periodId: result.periodId,
          totalSum: result.totalSum,
          size: result.size,
          parity: result.parity,
          diceOutcomes: result.diceOutcome,
        
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
      setFilteredRows(rows.filter(row => row.timerName === string));
    }
  };

  const columns = [
    { field: 'srNo', headerName: 'Id', width: 90 },
    { field: 'timerName', headerName: 'timerName', width: 150 },
    { field: 'periodId', headerName: 'Period Id', width: 150 },
    { field: 'totalSum', headerName: 'totalSum', width: 150 },
    { field: 'size', headerName: 'size', width: 150 },
    { field: 'parity', headerName: 'parity', width: 150 },
    { field: 'diceOutcomes', headerName: 'diceOutcomes', width: 150 },
  
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        justifyContent: "flex-end",
        width: { sm: `calc(100% - 240px)` },
        position: "absolute",
        right: 0,
      }}>
        <Box
          component="main"
          sx={{
            backgroundColor: '#D9D9D9',
            flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }
          }}
        >
          <Typography variant="h5" sx={{ p: 3 }}>K3 Result History</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button  variant="contained"  onClick={() => handleFilter('1min')}>1min</Button>
              <Button  variant="contained" onClick={() => handleFilter('3min')}>3min</Button>
              <Button  variant="contained" onClick={() => handleFilter('5min')}>5min</Button>
              <Button  variant="contained" onClick={() => handleFilter('10min')}>10min</Button>
              <Button  variant="contained" onClick={() => handleFilter("all")}>All</Button>
            </Box>
          <Box
            sx={{
              padding: 2,
              m: 2,
              backgroundColor: 'white',
              height: 600, // Adjust height as needed
            }}
          >
            <DataGrid
              rows={filteredRows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10, 20, 50]}
              sortingOrder={['asc', 'desc']}
              disableSelectionOnClick
            />
          </Box>
          <hr />
        </Box>
      </Box>
    </Box>
  );
}

K3History.propTypes = {
  window: PropTypes.func,
};

export default K3History;