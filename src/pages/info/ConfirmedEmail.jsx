import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

const ConfirmedEmail = () => {
  return (
    <>
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
            width: "350px",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography fontSize={"10rem"}>
            <MarkEmailReadIcon fontSize="inherit" />
          </Typography>
          <Typography fontSize={"1.5rem"}>
            Email anda berhasil diverifikasi silahkan login
          </Typography>
          <Button
            href="/login"
            sx={{ marginTop: "1.5rem", width: "10rem" }}
            variant="outlined"
          >
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ConfirmedEmail;
