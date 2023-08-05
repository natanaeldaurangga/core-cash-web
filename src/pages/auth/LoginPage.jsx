import { Box, Button, TextField, Typography } from "@mui/material";
import coreCashLogo from "../../assets/img/core-cash-logo.png";

const LoginPage = () => {
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
        <Box component={"img"} src={coreCashLogo} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            width: "100%",
            marginTop: "2rem",
          }}
        >
          <TextField variant="outlined" type="email" label="Email" />
          <TextField variant="outlined" type="password" label="Password" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              width: "100%",
              height: "1.25rem",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecoration: "underline",
                  color: "#1C568E",
                },
              }}
              component={"a"}
              href="/forgot-password"
              color={"#2A81D6"}
              fontSize={"0.875rem"}
            >
              Lupa password?
            </Typography>
          </Box>
          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
          >
            Login
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            width: "100%",
            height: "1.25rem",
            alignItems: "center",
            placeSelf: "end",
            marginTop: "3rem",
          }}
        >
          <Typography fontSize={"0.875rem"}>
            Belum punya akun?
            <Typography
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecoration: "underline",
                  color: "#1C568E",
                },
              }}
              component={"a"}
              href="/register"
              color={"#2A81D6"}
              marginLeft={"0.25rem"}
              fontSize={"0.875rem"}
            >
              Daftar
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
