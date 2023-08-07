import { Box, Drawer } from "@mui/material";

const DashboardDrawer = ({ anchor, open, onClose, children }) => {
  return (
    <>
      <Drawer anchor={anchor} open={open} onClose={onClose}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            paddingTop: "1.125rem",
          }}
          role="presentation"
          onClick={onClose}
          onKeyDown={onClose}
        >
          {children}
        </Box>
      </Drawer>
    </>
  );
};

export default DashboardDrawer;
