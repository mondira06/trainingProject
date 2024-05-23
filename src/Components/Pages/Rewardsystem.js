import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const drawerWidth = 240;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  '7318930111',
  '1238930789',
  '1234567890',
  '5843189621',
  '7419638527',
  '8529637410',
  '7539518524',
  '9517538524',
  '4561237896',
  '7894561238',
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function AmountSetup(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [minRechargeAmount1, setMinRechargeAmount1] = React.useState("");
  const [minRechargeAmount2, setMinRechargeAmount2] = React.useState("");
  const [rewardAmount, setRewardAmount] = React.useState("");
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const handleMinRechargeAmount1Change = (event) => {
    setMinRechargeAmount1(event.target.value);
  };
  const handleMinRechargeAmount2Change = (event) => {
    setMinRechargeAmount2(event.target.value);
  };
  const handleRewardAmountChange = (event) => {
    setRewardAmount(event.target.value);
  };
  const handleSelectChange = (event) => {
    const { target: { value } } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{
      display: 'flex',
    justifyContent: "flex-end",
    width: { sm: `calc(100% - 240px)` },// Adjusted width calculation
    position: "absolute", // Added position to make sure it's positioned relative to the parent
    right: 0 // Positioned at the right>
    }}>
      <Box
        component="main"
        sx={{
          backgroundColor: '#D9D9D9',
          flexGrow: 1,
          p: 1,
          width: 800,
          width: { xs: `calc(100% - 24px)` },
        }}
      >
        <Typography variant="h5" sx={{ p: 3 }}>Reward System</Typography>
        <Box
          sx={{
            padding: 2,
            m: 2,
            backgroundColor: 'white',
          }}
        >
          <Box display="flex" justifyContent="space-between" sx={{ m: 1 }}>
            <Box>
              <Typography paragraph sx={{ m: 2 }}>Reward Amount</Typography>
              <FormControl sx={{ m: 1, width: 300, mt: 3,width: { xs: 150 } }}>
            <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleSelectChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Select Mobile No.</em>;
                }
                return selected.join(', ');
              }}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem disabled value="">
                <em>Select Mobile No.</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
            </Box>
            <Box>
              <Typography paragraph sx={{ m: 2 }}>Reward Amount</Typography>
              <TextField
                label="Amount"
                value={minRechargeAmount1} // Assuming this should be the same as the first one, if not create another state variable.
                onChange={handleMinRechargeAmount1Change}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-around" sx={{ mt: 3 }}>
            <Button variant="contained" sx={{ color: 'white' }}>Submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}
AmountSetup.propTypes = {
  window: PropTypes.func,
};
export default AmountSetup;