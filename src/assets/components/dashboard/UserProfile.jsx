import { Avatar, Box, Dialog, DialogTitle, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const UserProfile = ({ open, handleClose }) => {
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
              John Doe
            </Typography>
            <Typography fontSize={"0.875rem"} color={"gray"}>
              johndoe@example.com
            </Typography>
            <Typography fontSize={"0.875rem"} color={"gray"}>
              User
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default UserProfile;
