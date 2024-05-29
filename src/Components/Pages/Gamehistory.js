import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const drawerWidth = 240;

function GameHistory(props) {
  const { window } = props;
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/trxresult', { withCredentials: true })
      .then((res) => {
        const data = res.data.Result.map((result, index) => ({
          id: result._id,
          srNo: index + 1,
          timer: result.timer,
          periodId: result.periodId,
          colorOutcome: result.colorOutcome,
          numberOutcome: result.numberOutcome,
          sizeOutcome: result.sizeOutcome,
          trxBlockAddress: result.trxBlockAddress,
          blockTime: result.blockTime,
          hash: result.hash,
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
      setFilteredRows(rows.filter(row => row.timer === string));
    }
  };

  const columns = [
    { field: 'srNo', headerName: 'Id', width: 90 },
    { field: 'timer', headerName: 'Timer', width: 150 },
    { field: 'periodId', headerName: 'Period Id', width: 150 },
    { field: 'colorOutcome', headerName: 'Colour', width: 150 },
    { field: 'numberOutcome', headerName: 'No of Outcome', width: 150 },
    { field: 'sizeOutcome', headerName: 'Size Of Outcome', width: 150 },
    { field: 'trxBlockAddress', headerName: 'TrxBlockAddress', width: 200 },
    { field: 'blockTime', headerName: 'BlockTime', width: 150 },
    { field: 'hash', headerName: 'Hash', width: 200 },
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
          <Typography variant="h5" sx={{ p: 3 }}>TRX Result History</Typography>
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

GameHistory.propTypes = {
  window: PropTypes.func,
};

export default GameHistory;
