import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import "./styles.css";
import { Link, Outlet } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PublicIcon from "@mui/icons-material/Public";

const drawerWidth = 240;

const TheLayout = () => {
  const drawer = (
    <div className="sidebarStyle">
      <Toolbar />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            {" "}
            <DashboardIcon />{" "}
          </ListItemIcon>
          <Link to="/thelayout/dashboard" className="linkStyle">
            Dashboard
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            {" "}
            <AccountCircleIcon />{" "}
          </ListItemIcon>
          <Link to="/thelayout/jobapplications" className="linkStyle">
            Job Applications
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            {" "}
            <CalendarTodayIcon />{" "}
          </ListItemIcon>
          <Link to="/thelayout/customer-appointments" className="linkStyle">
            Customer Appointments
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            {" "}
            <ManageAccountsIcon />{" "}
          </ListItemIcon>
          <Link to="/thelayout/emp-details" className="linkStyle">
            Employee Details
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            {" "}
            <InventorySharpIcon />{" "}
          </ListItemIcon>
          <Link to="/thelayout/storeroom-details" className="linkStyle">
            Storeroom Details
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {" "}
            <EngineeringIcon />{" "}
          </ListItemIcon>
          <Link to="/thelayout/services" className="linkStyle">
            Services
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {" "}
            <PublicIcon />{" "}
          </ListItemIcon>
          <Link to="/thelayout/web-setting" className="linkStyle">
            Web Settings
          </Link>
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* RM service Bar starts **/}
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar className="toolbarStyle">
            <Typography variant="h6" noWrap component="div">
              RM Service Center
            </Typography>
            <Avatar className="avatarStyle" />
            <SettingsIcon className="settingiconStyle" />
          </Toolbar>
        </AppBar>
        {/* RM service Bar ends **/}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
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
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

TheLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default TheLayout;
