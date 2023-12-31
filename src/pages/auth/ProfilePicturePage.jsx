import { Avatar, Box, Button, Typography } from "@mui/material";
import coreCashLogo from "../../assets/img/core-cash-logo.png";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../context/services/GlobalProvider";
import { useAuthContext } from "../../context/services/AuthProvider";

const ProfilePicturePage = () => {
  const inputFileRef = useRef();

  const [profilePicture, setProfilePicture] = useState(null);
  const [btnSubmitText, setBtnSubmitText] = useState("");

  const { RegistrationPool } = useGlobalContext();

  // TODO: gimana kalo data dari page registrasi pertama disimpan disession sementara (BE), jadi nggak disimpan di FE
  const { AuthServices } = useAuthContext();

  useEffect(() => {
    console.log(RegistrationPool.registrationPayload);
  }, [RegistrationPool]);

  useEffect(() => {
    if (profilePicture !== null) {
      setBtnSubmitText("Daftar");
    } else {
      setBtnSubmitText("Skip");
    }
  }, [profilePicture]);

  const onChoosePicture = () => {
    inputFileRef.current.click();
    // RegistrationPool.setRegistrationFieldPayload({ ... })
  };

  const onSubmitPicture = () => {
    console.log(typeof profilePicture);

    AuthServices.register(RegistrationPool);
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
          }}
        >
          <Box component={"img"} src={coreCashLogo} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.875rem",
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <Avatar
              alt="user-img"
              src={
                typeof profilePicture === "string" || profilePicture === null
                  ? profilePicture
                  : URL.createObjectURL(profilePicture)
              }
              sx={{ height: "6rem", width: "6rem" }}
            />
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="image-input-file"
              type="file"
              ref={inputFileRef}
              onChange={(e) => setProfilePicture(e.currentTarget.files[0])}
            />
            <Button
              variant="outlined"
              sx={{ marginTop: "0.125rem" }}
              startIcon={<AddIcon />}
              onClick={onChoosePicture}
            >
              Pilih
            </Button>
            <Button
              sx={{
                width: "100%",
                marginTop: "1.5rem",
              }}
              variant="contained"
              onClick={onSubmitPicture}
            >
              {btnSubmitText}
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
                href="/register"
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

export default ProfilePicturePage;
