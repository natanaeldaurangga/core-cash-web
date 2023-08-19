import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLogo from "../../assets/components/Utility/AppLogo";
import { useAuthContext } from "../../context/services/AuthProvider";
import FieldError from "../../utilities/FieldError";

// TODO: Dari registration masuk ke halaman input gambar
const RegistrationPage = () => {
  const { AuthServices } = useAuthContext();

  const [registerProcess, setRegisterProcess] = useState(false);

  const formFieldTemplate = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const fieldErrorsTemplate = {
    FullName: [],
    Email: [],
    Password: [],
    ConfirmPassword: [],
    ProfilePicture: [],
  };

  const [formField, setFormField] = useState(formFieldTemplate);

  const [fieldErrors, setFieldErrors] = useState(fieldErrorsTemplate);

  const [nonFieldErrors, setNonFieldErrors] = useState(false);

  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(null);

  const clearFormField = () => {
    setFormField(formFieldTemplate);
    setFieldErrors(fieldErrorsTemplate);
  };

  const onRegistrationSubmit = () => {
    setRegisterProcess(true);
    AuthServices.register({ ...formField, profilePicture })
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
        setRegisterProcess(false);
      });
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          width: { xs: "380px", sm: "400px", md: "500px" },
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
            value={formField.fullName}
            onChange={(e) =>
              setFormField({ ...formField, fullName: e.target.value })
            }
            variant="outlined"
            label="Full Name"
            error={fieldErrors?.FullName?.length !== 0}
            helperText={<FieldError errors={fieldErrors?.FullName} />}
          />
          <TextField
            value={formField.email}
            onChange={(e) =>
              setFormField({ ...formField, email: e.target.value })
            }
            variant="outlined"
            type="email"
            label="Email"
            error={fieldErrors?.Email?.length !== 0}
            helperText={<FieldError errors={fieldErrors?.Email} />}
          />
          <TextField
            value={formField.password}
            onChange={(e) =>
              setFormField({ ...formField, password: e.target.value })
            }
            variant="outlined"
            type="password"
            label="Password"
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
            label="Confirm Password"
            error={fieldErrors?.ConfirmPassword?.length !== 0}
            helperText={<FieldError errors={fieldErrors?.ConfirmPassword} />}
          />
          <Avatar
            alt="user-img"
            src={
              typeof profilePicture === "string" || profilePicture === null
                ? profilePicture
                : URL.createObjectURL(profilePicture)
            }
            sx={{
              height: "6rem",
              width: "6rem",
              margin: "auto",
              marginTop: "1.5rem",
            }}
          />

          <TextField
            variant="outlined"
            type="file"
            onChange={(e) => setProfilePicture(e.currentTarget.files[0])}
            error={fieldErrors?.ProfilePicture?.length !== 0}
            helperText={<FieldError errors={fieldErrors?.ProfilePicture} />}
          />
          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
            onClick={onRegistrationSubmit}
            disabled={registerProcess}
          >
            {registerProcess ? <CircularProgress size={25} /> : <>{"Submit"}</>}
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
