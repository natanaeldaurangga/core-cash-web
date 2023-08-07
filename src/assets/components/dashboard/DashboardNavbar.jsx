import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AppLogo from "../Utility/AppLogo";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import UserProfile from "./UserProfile";
import { useState } from "react";

const DashboardNavbar = ({ onClickMenu }) => {
  const [openUserProfile, setOpenUserProfile] = useState(false);

  return (
    <>
      {/* START: Navbar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="transparent"
          sx={{
            boxShadow: "0px 0.5px 3px black",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={onClickMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <AppLogo sx={{ height: "2.5rem" }} />
            </Typography>

            {/* START: User Profile */}
            <Tooltip title="Open settings">
              <IconButton
                onClick={() => setOpenUserProfile(true)}
                sx={{ p: 0, marginRight: "1.125rem" }}
              >
                <Avatar alt="Remy" />
              </IconButton>
            </Tooltip>
            {/* END: User Profile */}

            {/* START: Logout button */}
            <Tooltip title="Logout">
              <IconButton component="a" href="/" color="primary">
                <LogoutIcon />
              </IconButton>
            </Tooltip>
            {/* END: Logout button */}
          </Toolbar>
        </AppBar>
      </Box>
      {/* END: Navbar */}
      {/* START: UserProfile */}
      <UserProfile
        open={openUserProfile}
        handleClose={() => setOpenUserProfile(false)}
      />
      {/* END: UserProfile */}
    </>
  );
};

export default DashboardNavbar;
