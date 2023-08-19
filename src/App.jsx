import { BrowserRouter, useNavigate } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { useGlobalContext } from "./context/services/GlobalProvider";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useAuthContext } from "./context/services/AuthProvider";

// TODO: Lanjut bikin landing page
function App() {
  const { ToggleDialog } = useGlobalContext();
  const { AuthServices } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>

      <Dialog
        open={ToggleDialog.session.sessionDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{"Session telah berakhir"}</DialogTitle>
        <DialogContent>
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
}

export default App;
