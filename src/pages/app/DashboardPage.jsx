import { Box, Card } from "@mui/material";
import Dashboard from "./Dashboard";
import AppLogo from "../../assets/components/Utility/AppLogo";

const DashboardPage = () => {
  return (
    <>
      <Dashboard>
        <Card
          variant="outlined"
          sx={{
            margin: "0.5rem",
            borderRadius: "0.5rem",
            minHeight: "75vh",
            padding: "0.25rem",
            display: "grid",
            placeItems: "center",
          }}
        >
          <AppLogo />
        </Card>
      </Dashboard>
    </>
  );
};

export default DashboardPage;
