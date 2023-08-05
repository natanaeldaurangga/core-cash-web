import { Box, Button, TextField } from "@mui/material";
import AppLogo from "../../assets/components/Utility/AppLogo";

const ResetPasswordPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "300px", sm: "400px", md: "500px" },
          minHeight: "500px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "0.25rem",
          paddingX: { xs: "0.625rem", sm: "0.5rem", md: "1.25rem", lg: "2rem" },
          paddingY: "2.25rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AppLogo />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            width: "100%",
            marginTop: "2rem",
          }}
        >
          <TextField variant="outlined" type="password" label="Password" />
          <TextField
            variant="outlined"
            type="password"
            label="Repeat Password"
          />
          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPasswordPage;
