import { Box, Drawer } from "@mui/material";

const DashboardDrawer = ({ anchor, open, onClose, children }) => {
  return (
    <>
      <Drawer anchor={anchor} open={open} onClose={onClose}>
        <Box
          sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
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
