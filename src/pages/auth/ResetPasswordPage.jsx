import { Alert, AlertTitle, Box, Button, TextField } from "@mui/material";
import AppLogo from "../../assets/components/Utility/AppLogo";
import { useAuthContext } from "../../context/services/AuthProvider";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/services/GlobalProvider";
import FieldError from "../../utilities/FieldError";

const ResetPasswordPage = () => {
  const { AuthServices } = useAuthContext();

  const { ToggleDialog } = useGlobalContext();

  // TODO: Lanjut bikin pagination untuk cash page
  const { resetToken } = useParams();

  const [requestProcess, setRequestProcess] = useState();

  const navigate = useNavigate();

  const formFieldTemplate = {
    password: "",
    confirmPassword: "",
  };

  const fieldErrorsTemplate = {
    Password: [],
    ConfirmPassword: [],
  };

  const [formField, setFormField] = useState(formFieldTemplate);

  const [fieldErrors, setFieldErrors] = useState(fieldErrorsTemplate);

  const [nonFieldErrors, setNonFieldErrors] = useState(false);

  const clearFormField = () => {
    setFormField(formFieldTemplate);
    setFieldErrors(fieldErrorsTemplate);
  };

  const handleSubmit = () => {
    setRequestProcess(true);
    AuthServices.resetPassword(resetToken, formField)
      .then((res) => {
        clearFormField();
        navigate("/login");
      })
      .catch((err) => {
        const status = err?.response?.status;
        if (status === 400) {
          const errors = err?.response?.data?.errors;
          setFieldErrors({ ...fieldErrors, ...errors });
        }

        if (status === 401 || status === 403)
          ToggleDialog.unauthorized.setUnauthorized(true);

        if (status > 403) {
          const errors = err.response.data;
          setNonFieldErrors(errors);
        }
      })
      .finally(() => {
        setRequestProcess(false);
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
            value={formField.password}
            onChange={(e) =>
              setFormField({ ...formField, password: e.target.value })
            }
            variant="outlined"
            type="password"
            label="Password"
            required
            error={fieldErrors?.Password?.length !== 0}
            helperText={<FieldError errors={fieldErrors?.Password} />}
          />
          <TextField
            value={formField.confirmPassword}
            onChange={(e) =>
              setFormField({ ...formField, confirmPassword: e.target.value })
            }
            variant="outlined"
            type="password"
            label="Repeat Password"
            required
            error={fieldErrors?.ConfirmPassword?.length !== 0}
            helperText={<FieldError errors={fieldErrors?.ConfirmPassword} />}
          />
          <Button
            onClick={handleSubmit}
            sx={{
              width: "100%",
            }}
            variant="contained"
            disabled={requestProcess}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPasswordPage;
