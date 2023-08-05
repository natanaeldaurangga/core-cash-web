import { Box } from "@mui/material";
import coreCashLogo from "../../img/core-cash-logo.png";

const AppLogo = ({ ...attr }) => {
  return <Box component={"img"} src={coreCashLogo} {...attr} />;
};

export default AppLogo;
