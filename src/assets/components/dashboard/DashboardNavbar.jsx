import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AppLogo from "../Utility/AppLogo";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

const MenuAfterLogin = () => {
  return (
    <>
      <Button
        href="/"
        variant="contained"
        size="small"
        startIcon={<LogoutIcon />}
      >
        <Typography fontSize={"0.875rem"}>Logout</Typography>
      </Button>
    </>
  );
};

const DashboardNavbar = ({ onClickMenu }) => {
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
          <Box
            sx={{
              display: "flex",
              gap: "1.125rem",
            }}
          >
            <MenuAfterLogin />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DashboardNavbar;
