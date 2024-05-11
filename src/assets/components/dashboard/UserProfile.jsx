import { Avatar, Box, Dialog, DialogTitle, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useAuthContext } from "../../../context/services/AuthProvider";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/services/GlobalProvider";

const UserProfile = ({ open, handleClose }) => {
  const { AuthServices } = useAuthContext();

  const { ApiAttribute } = useGlobalContext();

  const [userData, setUserData] = useState({
    userId: "",
    fullName: "",
    email: "",
    role: "",
    profilePicture: "",
  });

  const normalizeRoleName = (roleName = "") => {
    return roleName.split(/[-_]/g).pop();
  };

  useEffect(() => {
    const userData = AuthServices.authData();
    setUserData(userData);
  }, [AuthServices]);

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>User Profile</DialogTitle>
        <Box
          sx={{
            width: { xs: "250px", sm: "400px", md: "500px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingX: "2rem",
            paddingY: "0.5rem",
          }}
        >
          <Avatar
            alt="User"
            src={
              userData?.profilePicture &&
              ApiAttribute.getImage(userData?.profilePicture)
            }
            sx={{
              bgcolor: blue[100],
              color: blue[600],
              height: "5rem",
              width: "5rem",
            }}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              gap: "0.875rem",
              marginTop: "1rem",
            }}
          >
            <Typography fontSize={"1rem"} fontWeight={600}>
              {userData.fullName}
            </Typography>
            <Typography fontSize={"0.875rem"} color={"gray"}>
              {userData.email}
            </Typography>
            <Typography fontSize={"0.875rem"} color={"gray"}>
              {normalizeRoleName(userData.role)}
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default UserProfile;
