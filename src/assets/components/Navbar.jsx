import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AppLogo from "./Utility/AppLogo";
import { useAuthContext } from "../../context/services/AuthProvider";
import LogoutIcon from "@mui/icons-material/Logout";
import { useGlobalContext } from "../../context/services/GlobalProvider";
import PersonIcon from "@mui/icons-material/Person";

const MenuBeforeLogin = () => {
  return (
    <>
      <Button href="/register" variant="outlined">
        Sign up
      </Button>
      <Button href="/login" variant="contained">
        Log in
      </Button>
    </>
  );
};

const MenuAfterLogin = () => {
  const { ToggleDialog } = useGlobalContext();

  return (
    <>
      {/* START: User Profile */}
      <Tooltip title="Open dashboard">
        <IconButton component="a" href="/app">
          <PersonIcon />
        </IconButton>
      </Tooltip>
      {/* END: User Profile */}

      {/* START: Logout button */}
      <Tooltip title="Logout">
        <IconButton
          onClick={() => ToggleDialog.logout.setLogoutDialog(true)}
          color="primary"
        >
          <LogoutIcon />
        </IconButton>
      </Tooltip>
      {/* END: Logout button */}
    </>
  );
};

const Navbar = () => {
  const { AuthServices } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          boxShadow: "0px 0.5px 3px black",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <AppLogo sx={{ height: "2.5rem" }} />
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "1.125rem",
            }}
          >
            {AuthServices.getAuthorization() ? (
              <MenuAfterLogin />
            ) : (
              <MenuBeforeLogin />
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
