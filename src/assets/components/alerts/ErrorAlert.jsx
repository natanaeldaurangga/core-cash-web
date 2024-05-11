import React from "react";
import { useGlobalContext } from "../../../context/services/GlobalProvider";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const ErrorAlert = ({ title, message }) => {
  const { ToggleDialog } = useGlobalContext();

  const handleClose = () => {
    ToggleDialog.error.setErrorDialog(false);
  };

  return (
    <>
      <Dialog
        open={ToggleDialog.error.errorDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent
          sx={{ width: { xs: "200px", sm: "350px", md: "400px" } }}
        >
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ErrorAlert;
