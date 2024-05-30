import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SecurityIcon from "@mui/icons-material/Security";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Link } from "react-router-dom";


import { Hidden } from "@mui/material";

const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // const handleLogout = async () => {
  //   await logout();
  //   navigate("/login");
  // };
  const drawer = (
    <div>
      <Box
        sx={{
          backgroundColor: "#F44336",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            color: "white",
          }}
        >
          Admin
        </Typography>
        <Toolbar />
      </Box>
      <Box sx={{ backgroundColor: "#000000", height: "100%" }}>
        <List>
          {[
            <Link
              to="/dashboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              Dashboard
            </Link>,
            <Link
              to="/manage_admin"
              style={{ color: "white", textDecoration: "none" }}
            >
              Manage Admin
            </Link>,
            <Link
              to="/website_setting"
              style={{ color: "white", textDecoration: "none" }}
            >
              Website Setting
            </Link>,
            <Link
            to="/upi"
            style={{ color: "white", textDecoration: "none" }}
          >
           UPI Address
          </Link>,
          
            <Link
              to="/user_management"
              style={{ color: "white", textDecoration: "none" }}
            >
              User Management
            </Link>,
            
           
            <Link
            to="/game_history"
            style={{ color: "white", textDecoration: "none" }}
          >
            Game History
          </Link>,
            <Link
              to="/create_coupon"
              style={{ color: "white", textDecoration: "none" }}
            >
              Create Coupon
            </Link>,
            <Link
            to="/commission"
            style={{ color: "white", textDecoration: "none" }}
          >
            Commission
         
            </Link>,
            <Link
              to="/notification"
              style={{ color: "white", textDecoration: "none" }}
            >
              Notification
            </Link>,
            <Link
            to="/K3"
            style={{ color: "white", textDecoration: "none" }}
          >
            K3 Game History
          </Link>,
            <Link
            to="/withdrawal_status"
            style={{ color: "white", textDecoration: "none" }}
          >
            Withdrawal Status
          </Link>,
            <Link
              to="/withdrawal_management"
              style={{ color: "white", textDecoration: "none" }}
            >
              Withdrawal Management
            </Link>,
          
            <Link
              to="/reward_management"
              style={{ color: "white", textDecoration: "none" }}
            >
              Reward Management
            </Link>,
           
          <Link
          to="/commission_level"
          style={{ color: "white", textDecoration: "none" }}
        >
          Commission Level
        </Link>,
        <Link
        to="/trx_address"
        style={{ color: "white", textDecoration: "none" }}
      >
        TRX Address
      </Link>,
       <Link
       to="/wingo_result"
       style={{ color: "white", textDecoration: "none" }}
     >
       Wingo Result
     </Link>,
      <Link
      to="/update_withdraw_request"
      style={{ color: "white", textDecoration: "none" }}
    >
      Update Withdraw Request
    </Link>,
            <Link
            to="/logout"
            style={{ color: "white", textDecoration: "none" }}
          >
            <b>LogOut</b>
          </Link>,
          ].map((text, inde) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>
                  {inde === 0 ? (
                    <ScheduleIcon />
                  ) : inde === 1 ? (
                    <SecurityIcon />
                  ) : (
                    <TextSnippetIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#D14444", 
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              color: "white",
            }}
          ></Typography>
          {/* <Box>
          <Link to="/login">
            <Button variant="contained" sx={{backgroundColor:'#b71c1c',color:'white' }} onClick={handleLogout}>Log Out</Button>
            </Link>
            </Box> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};
export default ResponsiveDrawer;
