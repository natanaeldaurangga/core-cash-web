import { Box, Button, TextField, Typography } from "@mui/material";
import AppLogo from "../../assets/components/Utility/AppLogo";
import { useState } from "react";
import { useGlobalContext } from "../../context/services/GlobalProvider";
import { useNavigate } from "react-router-dom";

// TODO: Dari registration masuk ke halaman input gambar
const RegistrationPage = () => {
  const { RegistrationPool } = useGlobalContext();

  const [formField, setFormField] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const onRegistNext = () => {
    RegistrationPool.setRegistrationFieldPayload(formField);
    navigate("/register-picture");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "300px", sm: "400px", md: "500px" },
          minHeight: "500px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "0.25rem",
          paddingX: { xs: "0.625rem", sm: "0.5rem", md: "1.25rem", lg: "2rem" },
          paddingY: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AppLogo />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            width: "100%",
            marginTop: "2.25rem",
          }}
        >
          <TextField
            value={formField.name}
            onChange={(e) =>
              setFormField({ ...formField, name: e.target.value })
            }
            variant="outlined"
            label="Full Name"
          />
          <TextField
            value={formField.email}
            onChange={(e) =>
              setFormField({ ...formField, email: e.target.value })
            }
            variant="outlined"
            type="email"
            label="Email"
          />
          <TextField
            value={formField.password}
            onChange={(e) =>
              setFormField({ ...formField, password: e.target.value })
            }
            variant="outlined"
            type="password"
            label="Password"
          />
          <TextField
            value={formField.confirmPassword}
            onChange={(e) =>
              setFormField({ ...formField, confirmPassword: e.target.value })
            }
            variant="outlined"
            type="password"
            label="Repeat Password"
          />
          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
            onClick={onRegistNext}
          >
            Next
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            width: "100%",
            height: "1.25rem",
            alignItems: "center",
            placeSelf: "end",
            marginTop: "1.25rem",
          }}
        >
          <Typography fontSize={"0.875rem"}>
            Sudah punya akun?
            <Typography
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecoration: "underline",
                  color: "#1C568E",
                },
              }}
              component={"a"}
              href="/login"
              color={"#2A81D6"}
              marginLeft={"0.25rem"}
              fontSize={"0.875rem"}
            >
              Login
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationPage;
