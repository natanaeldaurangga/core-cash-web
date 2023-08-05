import React, { useState } from "react";
import Navbar from "../../assets/components/Navbar";
import DashboardNavbar from "../../assets/components/dashboard/DashboardNavbar";
import DashboardDrawer from "../../assets/components/dashboard/DashboardDrawer";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// const DashboardMenu

const DashboardPage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <DashboardNavbar onClickMenu={() => setOpenDrawer(true)} />
      <DashboardDrawer
        anchor={"left"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DashboardDrawer>
    </>
  );
};

export default DashboardPage;
