import React from "react";
import Dashboard from "../Dashboard";
import { Box, Card } from "@mui/material";

const SkeletonCashPage = () => {

}

const CashPage = () => {



  return (
    <>
      <Dashboard>
        <Card
          variant="outlined"
          sx={{
            margin: { xs: "0.25rem", sm: "0.25rem", md: "0.5rem" },
            borderRadius: "0.5rem",
            minHeight: "75vh",
            padding: "0.25rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              maxWidth: "800px",
              border: "1px solid black",
              height: "200px",
              margin: "auto",
            }}
          >
            
          </Box>
        </Card>
      </Dashboard>
    </>
  );
};

export default CashPage;
