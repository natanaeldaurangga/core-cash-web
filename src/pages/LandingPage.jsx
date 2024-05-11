import { Box, CardMedia, Typography } from "@mui/material";
import Navbar from "../assets/components/Navbar";
import banner from "../assets/img/banner-image.png";
import { useAuthContext } from "../context/services/AuthProvider";
import { useEffect } from "react";

function LandingPage() {
  const { AuthServices } = useAuthContext();

  return (
    <>
      {/* START: Navbar */}
      <Navbar />
      {/* END: Navbar */}

      {/* START: Banner */}
      <CardMedia width={"full"} image={banner}>
        <Box
          sx={{
            width: "100%",
            minHeight: "537px",
            alignItems: "center",
            textAlign: "center",
            padding: 5,
            background: "linear-gradient(to right, #FFFFFF, rgba(255,0,0,0))",
            display: "flex",
            justifyContents: "start",
          }}
        >
          <Box
            sx={{
              width: "700px",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Typography fontSize={"2.25rem"} fontWeight={400}>
              Terencana. Terukur.
            </Typography>
            <Box sx={{ display: "flex", gap: "0.625rem" }}>
              <Typography
                fontSize={"3.5rem"}
                display={"inline"}
                fontWeight={600}
              >
                Core
              </Typography>
              <Typography
                display={"inline"}
                color={"#4153AF"}
                fontSize={"3.5rem"}
                fontWeight={600}
              >
                Cash
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardMedia>
      {/* END: Banner */}
    </>
  );
}

export default LandingPage;
