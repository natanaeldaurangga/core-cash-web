import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import UserProfile from "./UserProfile";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/services/AuthProvider";
import { useGlobalContext } from "../../../context/services/GlobalProvider";

const DashboardNavbar = ({ onClickMenu }) => {
  const [openUserProfile, setOpenUserProfile] = useState(false);

  const { AuthServices } = useAuthContext();

  const [userData, setUserData] = useState({
    userId: "",
    fullName: "",
    email: "",
    role: "",
    profilePicture: "",
  });

  useEffect(() => {
    setUserData(AuthServices.authData());
  }, [AuthServices]);

  const { ApiAttribute } = useGlobalContext();

  const { ToggleDialog } = useGlobalContext();

  return (
    <>
      {/* START: Navbar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            boxShadow: "0px 0.5px 3px black",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={onClickMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>

            {/* START: User Profile */}
            <Tooltip title="Open profile">
              <IconButton
                onClick={() => setOpenUserProfile(true)}
                sx={{ p: 0, marginRight: "1.125rem" }}
              >
                <Avatar
                  alt="Remy"
                  src={
                    userData?.profilePicture &&
                    ApiAttribute.getImage(userData?.profilePicture)
                  }
                />
              </IconButton>
            </Tooltip>
            {/* END: User Profile */}

            {/* START: Logout button */}
            <Tooltip title="Logout">
              <IconButton
                component="a"
                onClick={() => ToggleDialog.logout.setLogoutDialog(true)}
                color="primary"
              >
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
