import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import AppLogo from "../../assets/components/Utility/AppLogo";
import { useAuthContext } from "../../context/services/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RequestResetPasswordPage = () => {
  const { AuthServices } = useAuthContext();

  const [requestProcess, setRequestProcess] = useState(false);

  const formFieldTemplate = {
    email: "",
  };

  const fieldErrorsTemplate = {
    Email: [],
  };

  const [formField, setFormField] = useState(formFieldTemplate);

  const [fieldErrors, setFieldErrors] = useState(fieldErrorsTemplate);

  const [nonFieldErrors, setNonFieldErrors] = useState(false);

  const navigate = useNavigate();

  const clearFormField = () => {
    setFormField(formFieldTemplate);
    setFieldErrors(fieldErrorsTemplate);
  };

  const onRequestSubmit = () => {
    setRequestProcess(true);
    AuthServices.requestResetPassword(formField)
      .then((res) => {
        clearFormField();
        navigate("/confirm-email");
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
        setRequestProcess(false);
      });
  };

  return (
    <>
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
            paddingX: {
              xs: "0.625rem",
              sm: "0.5rem",
              md: "1.25rem",
              lg: "2rem",
            },
            paddingY: "2.25rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
          }}
        >
          <AppLogo />
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
              value={formField.email}
              onChange={(e) =>
                setFormField({ ...formField, email: e.target.value })
              }
              type="email"
              label="Email"
            />
            <Button
              sx={{
                width: "100%",
              }}
              variant="contained"
              onClick={onRequestSubmit}
              disabled={requestProcess}
            >
              {requestProcess ? <CircularProgress size={25} /> : <>{"Login"}</>}
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
    </>
  );
};

export default RequestResetPasswordPage;
