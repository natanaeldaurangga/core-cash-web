import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import coreCashLogo from "../../assets/img/core-cash-logo.png";
import { useState } from "react";
import { useAuthContext } from "../../context/services/AuthProvider";
import { useNavigate } from "react-router-dom";
import FieldError from "../../utilities/FieldError";

const LoginPage = () => {
  const { AuthServices } = useAuthContext();

  const navigate = useNavigate();

  const loginPayloadsTemplate = {
    email: "",
    password: "",
  };

  const fieldErrorsTemplate = {
    Email: [],
    Password: [],
  };

  const [loginPayloads, setLoginPayloads] = useState(loginPayloadsTemplate);

  const [fieldErrors, setFieldErrors] = useState(fieldErrorsTemplate);

  const [nonFieldErrors, setNonFieldErrors] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const clearFields = () => {
    setLoginPayloads(loginPayloadsTemplate);
    setFieldErrors(fieldErrorsTemplate);
  };

  const onLoginSubmit = () => {
    console.log(loginPayloads);
    setIsLoading(true);
    setFieldErrors(fieldErrorsTemplate);
    AuthServices.login(loginPayloads)
      .then((res) => {
        console.log(res);
        // navigate("/app");
        window.location.href = "/app";
        clearFields();
      })
      .catch((err) => {
        const status = err?.response?.status;
        if (status === 400) {
          const errors = err?.response?.data?.errors;
          setFieldErrors({ ...fieldErrors, ...errors });
        }

        if (status > 400 && status < 500) {
          const errors = err.response.data;
          setNonFieldErrors(errors);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
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
          paddingY: "2.25rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box component={"img"} src={coreCashLogo} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            width: "100%",
            marginTop: "2rem",
          }}
        >
          {nonFieldErrors && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {nonFieldErrors}
            </Alert>
          )}
          <TextField
            variant="outlined"
            type="email"
            label="Email"
            value={loginPayloads.email}
            onChange={(e) =>
              setLoginPayloads({ ...loginPayloads, email: e.target.value })
            }
            error={fieldErrors?.Email?.length !== 0}
            helperText={<FieldError errors={fieldErrors?.Email} />}
          />
          <TextField
            variant="outlined"
            type="password"
            label="Password"
            value={loginPayloads.password}
            onChange={(e) =>
              setLoginPayloads({ ...loginPayloads, password: e.target.value })
            }
            error={fieldErrors?.Password?.length !== 0}
            helperText={<FieldError errors={fieldErrors?.Password} />}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              width: "100%",
              height: "1.25rem",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecoration: "underline",
                  color: "#1C568E",
                },
              }}
              component={"a"}
              href="/forgot-password"
              color={"#2A81D6"}
              fontSize={"0.875rem"}
            >
              Lupa password?
            </Typography>
          </Box>
          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
            onClick={onLoginSubmit}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={25} /> : <>{"Login"}</>}
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
            marginTop: "3rem",
          }}
        >
          <Typography fontSize={"0.875rem"}>
            Belum punya akun?
            <Typography
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecoration: "underline",
                  color: "#1C568E",
                },
              }}
              component={"a"}
              href="/register"
              color={"#2A81D6"}
              marginLeft={"0.25rem"}
              fontSize={"0.875rem"}
            >
              Daftar
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
