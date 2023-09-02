import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import LogoutAlert from "./assets/components/alerts/LogoutAlert";
import SessionEndAlert from "./assets/components/alerts/SessionEndAlert";
import AppRouter from "./routes/AppRouter";

// TODO: Lanjut bikin landing page
function App() {
  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        height: "100%",
        overflowX: "hidden",
        backgroundColor: "#F0F0F0",
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>

      {/* START:ALERTS */}
      <LogoutAlert />
      <SessionEndAlert />
      {/* END:ALERTS */}
    </Box>
  );
}

export default App;
