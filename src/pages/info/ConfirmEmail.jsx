import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

const ConfirmEmail = () => {
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
            <MarkEmailUnreadIcon fontSize="inherit" />
          </Typography>
          <Typography fontSize={"1.5rem"}>Silahkan cek email anda</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ConfirmEmail;
