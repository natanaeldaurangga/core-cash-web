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
import PaymentsIcon from "@mui/icons-material/Payments";
import GradingIcon from "@mui/icons-material/Grading";
import PaymentIcon from "@mui/icons-material/Payment";
import AppLogo from "../../assets/components/Utility/AppLogo";

// TODO: Lanjut untuk integrasi bikin halaman kas dan integrasi halaman kas
const DashboardPage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const menuList = [
    {
      name: "Kas",
      path: "/app/cash",
      icon: <PaymentsIcon />,
    },
    {
      name: "Piutang",
      path: "/app/receivable",
      icon: <GradingIcon />,
    },
    {
      name: "Utang",
      path: "/app/payable",
      icon: <PaymentIcon />,
    },
  ];

  return (
    <>
      <DashboardNavbar onClickMenu={() => setOpenDrawer(true)} />
      <DashboardDrawer
        anchor={"left"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <AppLogo sx={{ height: "2rem", alignSelf: "center" }} />
        <List>
          {menuList.map((obj, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href={obj.path}>
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText primary={obj.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DashboardDrawer>
    </>
  );
};

export default DashboardPage;
