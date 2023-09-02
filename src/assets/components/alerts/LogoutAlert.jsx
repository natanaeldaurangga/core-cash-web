import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useAuthContext } from "../../../context/services/AuthProvider";
import { useGlobalContext } from "../../../context/services/GlobalProvider";

const LogoutAlert = () => {
  const { ToggleDialog } = useGlobalContext();
  const { AuthServices } = useAuthContext();

  const handleClose = () => {
    ToggleDialog.logout.setLogoutDialog(false);
  };

  return (
    <>
      <Dialog
        open={ToggleDialog.logout.logoutDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{"Anda yakin?"}</DialogTitle>
        <DialogContent
          sx={{ width: { xs: "200px", sm: "350px", md: "400px" } }}
        >
          <DialogContentText>Anda akan logout</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => AuthServices.logout()}>Logout</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LogoutAlert;
