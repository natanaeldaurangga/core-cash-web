import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import AppLogo from "./Utility/AppLogo";

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
  return (
    <>
      <Button href="/" variant="contained">
        Log out
      </Button>
    </>
  );
};

const Navbar = () => {
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
            <MenuBeforeLogin />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
