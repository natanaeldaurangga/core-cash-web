import React from "react";
import Dashboard from "../Dashboard";
import { Card } from "@mui/material";

const CashPage = () => {
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
          CashPage
        </Card>
      </Dashboard>
    </>
  );
};

export default CashPage;
