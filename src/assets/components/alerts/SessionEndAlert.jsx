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

const SessionEndAlert = () => {
  const { ToggleDialog } = useGlobalContext();
  const { AuthServices } = useAuthContext();
  return (
    <>
      <Dialog
        open={ToggleDialog.session.sessionDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{"Session telah berakhir"}</DialogTitle>
        <DialogContent sx={{ width: { sm: "150px", md: "300px" } }}>
          <DialogContentText>
            Session anda telah berakhir, silahkan login kembali
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => AuthServices.logout()}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SessionEndAlert;
