import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useGlobalContext } from "../../../context/services/GlobalProvider";
import { useAuthContext } from "../../../context/services/AuthProvider";

const UnauthorizedAlert = () => {
  const { ToggleDialog } = useGlobalContext();
  const { AuthServices } = useAuthContext();

  const handleLogout = () => {
    AuthServices.logout();
  };

  return (
    <>
      <Dialog
        open={ToggleDialog.unauthorized.UnauthorizedDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClose={handleLogout}
      >
        <DialogTitle>{"Unauthorized"}</DialogTitle>
        <DialogContent sx={{ width: "100%" }}>
          <DialogContentText fontSize={"0.875rem"}>
            {"Anda tidak memiliki otorisasi untuk mengakses fitur ini"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogout}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UnauthorizedAlert;
